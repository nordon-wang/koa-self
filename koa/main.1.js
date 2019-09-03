/*
 * @Author: nordon-wang
 * @Date: 2019-08-18 22:20:39
 * @Description: 基本使用
 * @Email: 
 */
const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const app = new Koa()

const main = ctx => {
  ctx.response.type = 'html'
  const { path: routerPath } = ctx.request
  if(routerPath === '/'){
    ctx.response.body = fs.createReadStream(path.join(__dirname, './index.html'), 'utf-8')
  }else if (routerPath === '/news'){
    ctx.response.body = '<h1>news</h1>'
  }else if (routerPath === '/about'){
    ctx.response.body = '<h1>about</h1>'
  }else {
    ctx.response.body = '<h1>others</h1>'
  }
}


app.use(main)


app.listen(9527)