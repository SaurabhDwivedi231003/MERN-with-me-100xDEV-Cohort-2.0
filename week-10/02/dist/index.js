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
function insertUser(username, password, firstName, lastName, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.create({
                data: {
                    email: username,
                    password,
                    name,
                    firstName,
                    lastName
                }
            });
            console.log(res);
        }
        catch (error) {
            console.error("Error inserting user:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function updateUser(username, updateParams) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.update({
                where: {
                    email: username
                },
                data: Object.assign({}, updateParams // This will only update fields that are provided
                )
            });
            console.log(res);
        }
        catch (error) {
            console.error("Error updating user:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
updateUser('saurabh6@gmail.com', {
    firstName: "seenuuu",
    lastName: "dwivediiii"
});
