# usemodal
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

