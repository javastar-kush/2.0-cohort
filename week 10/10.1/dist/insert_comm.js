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
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://test1_owner:nxw7i3FDJYSO@ep-noisy-art-a5pj3txm.us-east-2.aws.neon.tech/test1?sslmode=require"
});
function createUsersTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            //Not a good way SQL Injection can be done
            // const result = await client.query(`INSERT INTO users (username, email, password) VALUES('Starlord','starlord@gmail.com','123456')`)
            //To avoid SQL Injection errors (use these command line 18 to 20)
            const ResultQuery = "INSERT INTO users(username,email, password) VALUES($1, $2, $3)";
            const values = [username, email, password];
            const result = yield client.query(ResultQuery, values);
            console.log("INSERTION SUCCESS: ", result);
        }
        catch (err) {
            console.log("error during connection:", err);
        }
        finally {
            yield client.end();
        }
    });
}
createUsersTable("Kushagragarg", "kushagragarg786@gmail.com", "hello");
