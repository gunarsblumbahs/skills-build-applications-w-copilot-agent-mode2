"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseUrl = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
exports.baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend', baseUrl: exports.baseUrl });
});
exports.app.get('/api', (_req, res) => {
    res.json({ message: 'OctoFit Tracker API ready', baseUrl: exports.baseUrl });
});
exports.app.use('/api', api_1.default);
async function startServer() {
    try {
        await (0, database_1.connectDatabase)();
    }
    catch (error) {
        console.warn('MongoDB unavailable; continuing without database connection.', error);
    }
    exports.app.listen(port, '0.0.0.0', () => {
        console.log(`OctoFit backend listening on port ${port}`);
        console.log(`API base URL: ${exports.baseUrl}`);
    });
}
if (require.main === module) {
    startServer().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
