"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.Collection = exports.ChalkySticks = void 0;
const Core = __importStar(require("@chalkysticks/sdk-core"));
const Authentication = __importStar(require("@chalkysticks/sdk-authentication"));
const Pad = __importStar(require("@chalkysticks/sdk-pad"));
const Players = __importStar(require("@chalkysticks/sdk-players"));
const Tv = __importStar(require("@chalkysticks/sdk-tv"));
const Venues = __importStar(require("@chalkysticks/sdk-venues"));
const Wallet = __importStar(require("@chalkysticks/sdk-wallet"));
__exportStar(require("@chalkysticks/sdk-core"), exports);
var sdk_core_1 = require("@chalkysticks/sdk-core");
Object.defineProperty(exports, "ChalkySticks", { enumerable: true, get: function () { return __importDefault(sdk_core_1).default; } });
exports.Collection = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Core.Collection), Pad.Collection), Players.Collection), Tv.Collection), Venues.Collection), Wallet.Collection);
exports.Model = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Core.Model), Authentication.Model), Pad.Model), Players.Model), Tv.Model), Venues.Model), Wallet.Model);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSw2REFBK0M7QUFDL0MsaUZBQW1FO0FBQ25FLDJEQUE2QztBQUM3QyxtRUFBcUQ7QUFDckQseURBQTJDO0FBQzNDLGlFQUFtRDtBQUNuRCxpRUFBbUQ7QUFFbkQseURBQXVDO0FBRXZDLG1EQUFpRTtBQUF4RCx5SEFBQSxPQUFPLE9BQWdCO0FBRW5CLFFBQUEsVUFBVSwyRkFDbkIsSUFBSSxDQUFDLFVBQVUsR0FDZixHQUFHLENBQUMsVUFBVSxHQUNkLE9BQU8sQ0FBQyxVQUFVLEdBQ2xCLEVBQUUsQ0FBQyxVQUFVLEdBQ2IsTUFBTSxDQUFDLFVBQVUsR0FDakIsTUFBTSxDQUFDLFVBQVUsRUFDcEI7QUFFWSxRQUFBLEtBQUsseUdBQ2QsSUFBSSxDQUFDLEtBQUssR0FDVixjQUFjLENBQUMsS0FBSyxHQUNwQixHQUFHLENBQUMsS0FBSyxHQUNULE9BQU8sQ0FBQyxLQUFLLEdBQ2IsRUFBRSxDQUFDLEtBQUssR0FDUixNQUFNLENBQUMsS0FBSyxHQUNaLE1BQU0sQ0FBQyxLQUFLLEVBQ2YifQ==