"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const OwnID_API_1 = __importDefault(require("./routers/OwnID_API"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.default)());
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '/index.html'));
});
app.use('/api', OwnID_API_1.default);
app.listen(5000, () => {
    console.log("running");
});
//# sourceMappingURL=index.js.map