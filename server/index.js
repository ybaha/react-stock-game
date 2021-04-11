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

let isFetching = true


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

const fetchStockData = async (slug) => {
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
    if (index + 1 === stocks.length) {
      setTimeout(async () => {
        console.log(`${stock} updated`)
        await fetchStockData(stock)
        isFetching = false
        console.log("isFetching: ", isFetching);
      }, 14000 * index)
    }
    else {
      setTimeout(() => {
        console.log(`${stock} updated`)
        fetchStockData(stock)
      }, 14000 * index)
    }
  })

}


const getAllStockNames = (folder) => {
  let stcks = []
  try {
    fs.readdirSync(folder).forEach(file => {
      let fileName
      fileName = file.slice(0, -5)
      stcks.push(fileName)
      //console.log(fileName)
    })
  } catch (e) {
    console.log(e);
  }

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

  if (lastStocks.length > 0) fs.writeFileSync(path.resolve(__dirname + '/info/info.json'), JSON.stringify(lastStocks));

  setRoutes()

}



let appendArray = []

appendNewStocks(appendArray)


const getTodaysStockPrices = async () => {
  let date = new Date()
  var day = date.getDay()
  var isWeekend = (day === 6) || (day === 0)   // 6 = Saturday, 0 = Sunday

  let stockNames = getAllStockNames("./stocks")
  let stockPrices = {}
  stockNames.forEach(e => {
    let raw = fs.readFileSync(__dirname + '/stocks/' + e + '.json')
    let data = JSON.parse(raw)
    let keys = Object.keys(data['Time Series (Daily)']);
    let last = keys[0];
    let today = date.toJSON().slice(0, 10)

    let price
    if (today === last) {
      price = Number(data['Time Series (Daily)'][last]['1. open'])
    }
    else if (today[6] === last[6] && isWeekend) { // api tam 00.00'da vermiyorsa sıkıntı
      if (today.slice(today.length - 2) - last.slice(last.length - 2) <= 2 && day === 0) {
        price = Number(data['Time Series (Daily)'][last]['1. open'])
      }
      else {
        console.log("wait for server to fetch latest date for stock " + e)
        console.log("isFetching: " + isFetching);
        price = false
      }
    }
    else {
      console.log("wait for server to fetch latest date for stock " + e)
      console.log("isFetching: " + isFetching);
      price = false
    }
    stockPrices[e] = price
  })

  return stockPrices
}


app.get("/", (req, res, next) => {
  res.json(getAllStockNames('stocks'));
})

app.get("/prices", async (req, res) => {
  let r = await getTodaysStockPrices()
  res.json(r)
})


app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
})


// 5000/'de isimler + anlık stok fiyatlarını ver