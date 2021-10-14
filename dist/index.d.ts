declare const _default: {
    useFetcher: (fetcher: (params: any) => Promise<any>, initialParams?: any) => [import("./useFetcher").IState, (params: any, force?: boolean | undefined) => void, () => void];
    useModal: (title?: string | undefined, visible?: boolean | undefined, loading?: boolean | undefined, data?: any) => [import("./useModal").IModalConfig, import("./useModal").IModalFun];
};
export default _default;
