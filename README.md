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


# useModal
1、钩子函数useModal
为了更方便的处理antd中Modal弹窗所开发的hook钩子函数

配合antd中的modal使用

第一步引用hook-usemodal
import useModal from "hooks-usemodal"

const [modalConfig, modalFun] = useModal("创建")


/*
 *  传入参数
 *  目的为封装一个弹窗
 *  title: 弹窗标题，
 *  visible：是否显示，
 *  loading：状态（如发送请求可设置为true）
 *  data，弹窗数据
 *  *  返回参数
 *  {
 *      modalConfig:  {title, visible, loading, data},
 *      showModal: 显示弹窗，
 *      hideModal：关闭弹窗，
 *      setLoading：设置加载状态，
 *  }
*/

modalConfig：
export interface IModalConfig {
    visible: boolean;
    title?: string;
    loading?: boolean;
    data?: any;
}

modalFun：
export interface IModalFun {
    showModal: (title?: string, data?: any) => void;
    hideModal: () => void;
    setLoading: (isLoading: boolean) => void;
}

showModal方法显示弹窗并设置弹窗标题和弹窗中的data，参数非必填
hideModal方法关闭弹窗并置空标题和data数据，无参数
setLoading是为了执行请求方法时弹窗状态

