/*
 * @Author: nordon-wang
 * @Date: 2019-08-18 22:20:39
 * @Description: koa-route 使用
 * @Email: 
 */
const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const route = require('koa-route')
// const static = require('koa-static')

const app = new Koa()

const main = ctx => {
  ctx.response.body = 'main'
}

const news = ctx => {
  ctx.response.body = 'news'
}

const errorPath = ctx => {
  ctx.response.body = '404'
}

app.use(route.get('/', main))
app.use(route.get('/news', news))
app.use(route.get('*', errorPath))

// app.use(static(path.join(__dirname)))

app.listen(9527)