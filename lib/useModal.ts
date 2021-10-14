import { useReducer } from "react"

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
 *      setTitle： 设置窗口名称，
 *      setLoading：设置加载状态，
 *      setData：设置弹窗数据
 *  }
*/

export interface IModalConfig {
    visible: boolean;
    title?: string;
    loading?: boolean;
    data?: any;
}
export interface IModalFun {
    showModal: (title?: string, data?: any) => void;
    hideModal: () => void;
    setLoading: (isLoading: boolean) => void;
}
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "hideModal":
            return {
                ...state, visible: false, data: null
            };
        case "showModal":
            return {
                ...state, visible: true, data: action.data, title: action.title
            };
        case "setLoading":
            return {
                ...state, loading: action.loading
            }
        default:
            break;
    }
}


const useModal: (title?: string, visible?: boolean, loading?: boolean, data?: any) => [IModalConfig, IModalFun] = (title: string = '', visible: boolean = false, loading: boolean = false, data?: any) => {
    const [modalConfig, dispatch] = useReducer(reducer, {
        title,
        visible,
        loading,
        data,
    })
    const showModal = (title: string = modalConfig.title, data: any = null) => {
        !modalConfig.visible && dispatch({ type: "showModal", title, data })
    }
    const hideModal = () => {
        modalConfig.visible && dispatch({ type: "hideModal" })
    }
    const setLoading = (isLoading: boolean) => {
        modalConfig.loading !== isLoading && dispatch({ type: "setLoading", loading: isLoading })
    }

    return [modalConfig, { showModal, hideModal, setLoading }]
}
export default useModal