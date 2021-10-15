简介：基础react-hook开发的钩子函数

npm i ts-usehooks
# useFetch

1、钩子函数useFetch

为了配合hooks进行发送数据请求
能够在自己组件直接获取到后台数据
解决每个函数都要统一写try/catch的流程
解决发送请求需要手动加锁防止多次重复请求的痛点
不需要在手动useState loading，直接获取loading值

使用方法

import { useFetch } from "ts-usehooks"

list: 后台返回的数据

getNewList: 重新发起请求方法，需要两个参数（当请求和上一次请求发送的参数一样时不会重新请求）
params：发送给后台的参数 focus？：强制发送一次请求（布尔值）

Refresh: 刷新请求，重新获取一遍数据

getLists: 接口api，

{}: 第一次请求的参数

const [list, getNewList, Refresh ] = useFetch(getLists, {})