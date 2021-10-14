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
declare const useModal: (title?: string, visible?: boolean, loading?: boolean, data?: any) => [IModalConfig, IModalFun];
export default useModal;
