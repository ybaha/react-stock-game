let express = require('express')
let app = express()
let http = require('http').createServer(app)
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const { json } = require('express')
const info = require('./info.json')
const cors = require('cors')


let PORT = process.env.PORT || 5000;

const API_KEY = 'HGJWFG4N8AQ66ICD'
const API_KEY2 = 'VKJ2JYJCM1XKCA1G'

// let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`

// const first = require(__dirname + '/stocks/bir.js')

app.use(express.static("stocks"))
app.use(cors())


const setRoutes = () => {
  let slug = JSON.parse(fs.readFileSync('./info.json', 'utf8'))
  console.log(slug);
  for (let i = 0; i < slug.length; i++) {
    app.get(`/${slug[i]}`, (req, res, next) => {
      console.log("selam buradasin =>" + slug[i])
      res.json(require(__dirname + `/stocks/${slug[i]}.json`))
      // fs.writeFileSync(path.resolve(__dirname + '/stocks/iki.json'), JSON.stringify(student))

    })
  }
}

setRoutes()





const fetchStockData = (slug) => {
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${slug}&outputsize=compact&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if("merchant_id" in data){

      }
      else{
        fs.writeFileSync(path.resolve(__dirname + `/stocks/${slug}.json`), JSON.stringify(data))
      }
    })
    .catch(err => console.log(err))
}


const refreshStockData = () => {
  let stocks = JSON.parse(fs.readFileSync('./info.json', 'utf8'))
  stocks.forEach( (stock, index) => {
    setTimeout( () => {
      console.log(`${stock} updated`)
      fetchStockData(stock)
    }, 14000 * index)
  })

}

refreshStockData()





const getAllStockNames = (folder) => {
  let stcks = []
  fs.readdirSync(folder).forEach(file => {
    let fileName
    fileName = file.slice(0, -5)
    stcks.push(fileName)
    //console.log(fileName)

  })

  fs.writeFileSync(path.resolve(__dirname + '/info.js'), JSON.stringify(stcks))

  return stcks
}

//getAllStockNames('./stocks')

// let direc = "./stocks"
// let allStocks = []

// allStocks = getAllStockNames(direc, allStocks)



let appendArray = ["NKE", "KO", "ADBE", "MCD", "PEP"]
const appendNewStocks = (array) => {
  for (let i = 0; i < array.length; i++) {

    fs.appendFile(`stocks/${array[i]}.json`, json, (err) => {
      if (err) throw err
      else{
        console.log('The "data to append" was appended to file!')

      }
    })
  }
}

//appendNewStocks(appendArray)





app.get("/", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
})


app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
})