// console.log('Request Data...')


// setTimeout(()=>{
//     console.log('Preparing data...')
    

//     const backendData = {
//      server: 'aaaa',
//      part:2000,
//      status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true,
//         console.log('Data received',backendData)
//     },2000)
// },2000)


// console.log('Request Data...')

// const promise = new Promise((resolve, reject) => {
//      setTimeout(() => {
//          console.log('Preparing data...')
//          const backendData ={
//              server: 'fnjvn',
//              port:2000,
//              status:'working'
//          }
//          resolve (backendData)
//      },2000)
// })

// promise.then((data) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             data.modifed = true
//             resolve(data)
//         },2000)
//     }).then(ClientData => {
//         console.log('Data recieved', ClientData)
//         ClientData.fromPromise = true
//         return ClientData
//     }).then(data => {
//         console.log('Modified', data);
//     }).catch(err => {
//        console.error('Error',err)
//     }).finally(()=>{
//         console.log('Finally')
//     })
// })
// let key = "HgeGC1tK2erNUOEaws7ZJnuCAPwdfBhU"

let api = "https://api.giphy.com/v1/gifs/search?q="
let key = "HgeGC1tK2erNUOEaws7ZJnuCAPwdfBhU"

let secondStr = '&api_key=' + key


const search = async() => {
    let input = document.querySelector('#input')
    let url = api + input.value + secondStr + '&limit=20'

    let response = await fetch(url)
    let data = await response.json()

    let arr = data.data
    console.log(arr)
    
    let div = document.querySelector('.output')
    div.innerHTML = ''
    input.innerHTML = ''

    arr.forEach(el => {
        let ifrm = document.createElement('iframe')
        ifrm.src = el.embed_url
        div.append(ifrm)
    })
}




