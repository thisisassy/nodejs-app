const http = require('http')
const ctype = {'Content-Type':'text/html;charset=utf-8'}

const svr = http.createServer(handler)
svr.listen(8081)

function handler(req,res){
    const url = req.url
    if(url === '/' || '/index.html'){
        showIndexPage(req, res)
        return
    }
    if(url.substr(0, 6) === '/japan/'){
        showDicePage(req, res)
        return
    }
    res.writeHead(404,ctype)
    res.end('404 not found')    
}

function showIndexPage(req,res){
    res.writeHead(200,ctype)
    const html = '<h1>日本観光のご案内</h1>\n' +
    '<p><a href="/japan/1">西日本</a></p>' + 
    '<p><a href="/japan/2">東日本</a></p>'
    res.end(html)
}

function showDicePage(req,res){
    res.writeHead(200,ctype)
    const a = req.url.split('/')
    const num = parseInt(a[2])

    const r = Math.floor(Math.random() * num) + 1
    res.end('<p style="font-size:4em;">' + r + '</p>')
}