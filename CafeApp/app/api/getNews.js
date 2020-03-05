const URL ='https://wrapapi.com/use/chipviet/news/cafe/0.0.1?wrapAPIKey=TEgXzcPd5KeHk7QB5ypDv3sB3aKirYMU'

function getNews(){
    return fetch(URL)
    .then(res => res.json())
    .then(resJSON =>resJSON.data)
}

export default getNews