"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users = [];
router.post('/register', function (req, res, next) {
    if (!req.body.loginId || !req.body.password) {
        res.json({ created: false, error: 'Please fill all fields' });
        return;
    }
    const user = users.find(cUser => cUser.email == req.body.loginId);
    if (user) {
        res.json({ created: false, error: 'User already exist' });
        return;
    }
    users.push({ email: req.body.loginId, name: "something", ownIdData: req.body.ownIdData });
    res.json({ created: true });
});
router.post('/setOwnIDDataByLoginId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.loginId; //The unique id of a user in your database, usually email or phone
    const ownIdData = req.body.ownIdData; //OwnID authentication information as string
    users.push({ email: email, name: "something", ownIdData });
    return res.sendStatus(204);
    // if(user) {
    //     users[users.indexOf(user)].ownIdData = ownIdData;
    //     return res.sendStatus(204);
    // } else {
    //     return res.send("user not found");
    // }
}));
router.post('/getOwnIDDataByLoginId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.loginId; //The unique id of a user in your database, usually email or phone
    const user = users.find(cUser => cUser.email == email);
    if (!user) {
        return res.json({ errorCode: 404 });
    } //Error code when user doesn't exist
    res.json({ ownIdData: user.ownIdData }); //OwnID authentication information as string
}));
router.post('/getSessionByLoginId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sign = require('jwt-encode');
    const email = req.body.loginId; //The unique id of a user in your database, usually email or phone
    const user = users.find(cUser => cUser.email == email);
    if (user) {
        const jwt = sign({ email: user.email }, 'secret');
        return res.json({ token: jwt });
    }
    else {
        return res.send("undefined login session (user)");
    }
}));
exports.default = router;
//# sourceMappingURL=OwnID_API.js.map