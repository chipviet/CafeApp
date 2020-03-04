const URL ='https://wrapapi.com/use/chipviet/cafeapp/getdata/latest?wrapAPIKey=TEgXzcPd5KeHk7QB5ypDv3sB3aKirYMU'

function getMarket(){
    return fetch(URL)
    .then(res => res.json())
    .then(resJSON =>resJSON.data)
}

export default getMarket