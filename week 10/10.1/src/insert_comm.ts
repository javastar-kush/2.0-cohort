import { Client } from "pg";


const client = new Client({
    connectionString : "postgresql://test1_owner:nxw7i3FDJYSO@ep-noisy-art-a5pj3txm.us-east-2.aws.neon.tech/test1?sslmode=require"
})

async function createUsersTable(username : string, email : string, password :string){
    try{
    await client.connect();

    //Not a good way SQL Injection can be done

    // const result = await client.query(`INSERT INTO users (username, email, password) VALUES('Starlord','starlord@gmail.com','123456')`)

    //To avoid SQL Injection errors (use these command line 18 to 20)

    const ResultQuery = "INSERT INTO users(username,email, password) VALUES($1, $2, $3)"
    const values = [username, email,password];
    const result = await client.query(ResultQuery, values)
    
    console.log("INSERTION SUCCESS: ",result)
    }
    catch(err){
        console.log("error during connection:", err)
    }
    finally{
       await client.end();
    }
}

createUsersTable("Kushagragarg", "kushagragarg786@gmail.com", "hello");