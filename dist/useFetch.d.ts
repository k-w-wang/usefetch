export interface IState {
    data: any;
    isLoading: boolean;
    isError: boolean;
}
declare const useFetcher: (fetcher: (params: any) => Promise<any>, initialParams?: any) => [IState, (params: any, force?: boolean | undefined) => void, () => void];
export default useFetcher;
