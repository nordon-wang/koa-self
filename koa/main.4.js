/*
 * @Author: nordon-wang
 * @Date: 2019-08-18 22:20:39
 * @Description: 中间件
 * @Email: 
 */
const fs = require('fs')
const path = require('path')

const Koa = require('koa')
const route = require('koa-route')
const serve = require('koa-static')

const app = new Koa()

// 模拟实现 logger 日志中间件
const logger = (ctx, next) => {
  console.log(`中间件执行, 方法:${ctx.request.method}, 路径:${ctx.request.path}`);
  next()
}

const main = (ctx, next) => {
  ctx.response.body = 'main'
  next()
}

const errorPath = (ctx, next) => {
  ctx.response.body = '404'
  next()
}

app.use(logger)
app.use(route.get('/', main))
app.use(serve(path.join(__dirname)))
app.use(route.get('/new', errorPath))

app.listen(9527)