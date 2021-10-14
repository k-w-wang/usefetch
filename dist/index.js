"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useFetcher_1 = __importDefault(require("./useFetcher"));
var useModal_1 = __importDefault(require("./useModal"));
exports.default = {
    useFetcher: useFetcher_1.default,
    useModal: useModal_1.default
};
