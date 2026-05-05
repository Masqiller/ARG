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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARGSessionManager = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class ARGSessionManager {
    sessionsDir;
    activeSessionId = null;
    sessionMemory = [];
    constructor() {
        // Use user's home directory to persist across IDE runs
        const homeDir = process.env.HOME || process.env.USERPROFILE || '';
        this.sessionsDir = path.join(homeDir, '.arg_sessions');
        if (!fs.existsSync(this.sessionsDir)) {
            fs.mkdirSync(this.sessionsDir, { recursive: true });
        }
    }
    initSession(sessionId) {
        this.activeSessionId = sessionId;
        const sessionFile = path.join(this.sessionsDir, `${sessionId}.json`);
        if (fs.existsSync(sessionFile)) {
            this.sessionMemory = JSON.parse(fs.readFileSync(sessionFile, 'utf-8'));
            return `Session '${sessionId}' resumed. Loaded ${this.sessionMemory.length} memory blocks.`;
        }
        else {
            this.sessionMemory = [];
            this.saveSession();
            return `New session '${sessionId}' initialized.`;
        }
    }
    getActiveSessionId() {
        return this.activeSessionId;
    }
    saveMemory(key, content) {
        if (!this.activeSessionId) {
            throw new Error("No active session. Call arg_session_init first.");
        }
        // Overwrite if key exists, or append new block
        const existingIdx = this.sessionMemory.findIndex(m => m.key === key);
        if (existingIdx !== -1) {
            this.sessionMemory[existingIdx].content = content;
            this.sessionMemory[existingIdx].timestamp = Date.now();
        }
        else {
            this.sessionMemory.push({
                timestamp: Date.now(),
                key,
                content
            });
        }
        this.saveSession();
        return `Memory saved under key '${key}'.`;
    }
    getAllMemory() {
        return this.sessionMemory;
    }
    saveSession() {
        if (this.activeSessionId) {
            const sessionFile = path.join(this.sessionsDir, `${this.activeSessionId}.json`);
            fs.writeFileSync(sessionFile, JSON.stringify(this.sessionMemory, null, 2));
        }
    }
}
exports.ARGSessionManager = ARGSessionManager;
