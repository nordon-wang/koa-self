/*
 * @Author: nordon-wang
 * @Date: 2019-08-18 22:20:39
 * @Description: koa-static 和 redirect 使用
 * @Email: 
 */
const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const route = require('koa-route')
const serve = require('koa-static')

const app = new Koa()

// 读取图片， 在没有使用 koa-static 的时候，需要为每个静态资源编写对应的route
const getImg = ctx => {
  ctx.response.type = 'png'
  ctx.response.body = fs.readFileSync(path.resolve(__dirname, './img/img1.png'))
}

const main = ctx => {
  ctx.response.body = 'main'
}

const errorPath = ctx => {
  // ctx.response.body = '404'
  ctx.response.redirect('/')
}

app.use(route.get('/', main))
app.use(route.get('/img', getImg))
// http://localhost:9527/img.png
// app.use(serve(path.join(__dirname, './img')))

// http://localhost:9527/img/img.png
app.use(serve(path.join(__dirname)))

app.use(route.get('*', errorPath))


app.listen(9527)