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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.create({
            data: {
                title,
                description,
                userId
            },
        });
        console.log(todo);
    });
}
// createTodo(1, "go to school", "go to school at 9 am");
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: userId,
            },
        });
        console.log(todos);
    });
}
// getTodos(1);
// RELATIONSHIP : getTodosAndUserDetails (Does/should it use joins?)
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: userId,
            },
            select: {
                user: true,
                id: true,
                title: true,
                description: true,
            }
        });
        console.log(todos);
    });
}
getTodosAndUserDetails(1);
