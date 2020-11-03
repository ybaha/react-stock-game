let express = require('express')
let app = express()
let http = require('http').createServer(app)
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const cors = require('cors')


let PORT = process.env.PORT || 5000;

const API_KEY = 'HGJWFG4N8AQ66ICD'
const API_KEY2 = 'VKJ2JYJCM1XKCA1G'


app.use(express.static("stocks"))
app.use(cors())


const setRoutes = () => {
  let slug = JSON.parse(fs.readFileSync('./info/info.json', 'utf8'))
  for (let i = 0; i < slug.length; i++) {
    app.get(`/${slug[i]}`, (req, res, next) => {
      console.log("selam buradasin =>" + slug[i])
      res.json(require(__dirname + `/stocks/${slug[i]}.json`))

    })
  }

  refreshStockData()
}




const fetchStockData = (slug) => {
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${slug}&outputsize=compact&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if ("merchant_id" in data) {

      }
      else {
        fs.writeFileSync(path.resolve(__dirname + `/stocks/${slug}.json`), JSON.stringify(data))
      }
    })
    .catch(err => console.log(err))
}


const refreshStockData = () => {
  let stocks = JSON.parse(fs.readFileSync('./info/info.json', 'utf8'))
  stocks.reverse()
  stocks.forEach((stock, index) => {
    setTimeout(() => {
      console.log(`${stock} updated`)
      fetchStockData(stock)
    }, 14000 * index)
  })

}




const getAllStockNames = (folder) => {
  let stcks = []
  fs.readdirSync(folder).forEach(file => {
    let fileName
    fileName = file.slice(0, -5)
    stcks.push(fileName)
    //console.log(fileName)
  })

  //fs.writeFileSync(path.resolve(__dirname + '/info/info.json'), JSON.stringify(stcks))
  return stcks
}





const appendNewStocks = (array) => {

  let currentStocks = []
  currentStocks = getAllStockNames("./stocks")
  console.log(currentStocks);

  array.forEach((e) => {
    if (!currentStocks.includes(e)) {
      fs.appendFileSync(`stocks/${e}.json`, "")
      console.log(`${e} appended to stocks`)
    }
  })

  let lastStocks = getAllStockNames("./stocks")

  if(lastStocks.length > 0) fs.writeFileSync(path.resolve(__dirname + '/info/info.json'), JSON.stringify(lastStocks));

  setRoutes()

}



let appendArray = []

appendNewStocks(appendArray)





app.get("/", (req, res, next) => {
  res.json(getAllStockNames('stocks'));
})


app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
})