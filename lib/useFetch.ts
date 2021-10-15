import { useReducer, useState } from "react";
import { useDeepCompareEffect } from "react-use";
export interface IState {
    data: any;
    isLoading: boolean;
    isError: boolean;
}

interface IAction {
    type: string;
    data?: any;
}

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case "FETCH_LOADING":
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.data,
            };
        case "FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error("网络错误，请稍后重试");
    }
};

const useFetcher = (
    fetcher: (params: any) => Promise<any>,
    initialParams: any = {}
): [IState, (params: any, force?: boolean) => void, () => void] => {
    const [dep, setDep] = useState({
        params: initialParams,
        refresh: true
    })
    const [state, dispatch] = useReducer(reducer, {
        data: {},
        isLoading: true,
        isError: false,
    });

    const toggleRefresh = () => {
        setDep({
            ...dep,
            refresh: !dep.refresh
        })
    };

    const getNewStateWithNewParams = (newParams: any, force: boolean = false) => {
        setDep({
            ...dep,
            params: newParams,
            refresh: force ? !dep.refresh : dep.refresh
        })
    };

    useDeepCompareEffect(() => {
        let didCancel = false;

        const fetchData = async (dataParams: any) => {
            dispatch({ type: "FETCH_LOADING" });
            try {
                const result = await fetcher(dataParams);
                if (!didCancel) {
                    dispatch({
                        type: "FETCH_SUCCESS",
                        data: result.data,
                    });
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: "FETCH_FAILURE" });
                }
            }
        };

        fetchData(dep.params);

        return () => {
            didCancel = true;
        };
    }, [dep]);

    return [state, getNewStateWithNewParams, toggleRefresh];
};

export default useFetcher;