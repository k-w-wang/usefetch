"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var reducer = function (state, action) {
    switch (action.type) {
        case "hideModal":
            return __assign(__assign({}, state), { visible: false, data: null });
        case "showModal":
            return __assign(__assign({}, state), { visible: true, data: action.data, title: action.title });
        case "setLoading":
            return __assign(__assign({}, state), { loading: action.loading });
        default:
            break;
    }
};
var useModal = function (title, visible, loading, data) {
    if (title === void 0) { title = ''; }
    if (visible === void 0) { visible = false; }
    if (loading === void 0) { loading = false; }
    var _a = (0, react_1.useReducer)(reducer, {
        title: title,
        visible: visible,
        loading: loading,
        data: data,
    }), modalConfig = _a[0], dispatch = _a[1];
    var showModal = function (title, data) {
        if (title === void 0) { title = modalConfig.title; }
        if (data === void 0) { data = null; }
        !modalConfig.visible && dispatch({ type: "showModal", title: title, data: data });
    };
    var hideModal = function () {
        modalConfig.visible && dispatch({ type: "hideModal" });
    };
    var setLoading = function (isLoading) {
        modalConfig.loading !== isLoading && dispatch({ type: "setLoading", loading: isLoading });
    };
    return [modalConfig, { showModal: showModal, hideModal: hideModal, setLoading: setLoading }];
};
exports.default = useModal;
