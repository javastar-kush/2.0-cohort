import { useState, useEffect } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

import axios from "axios"

export const Dashboard = ()=>{

    const [balance, useBalance]= useState(0);

    useEffect(()=>{
        axios.get("http://localhost:3001/api/v1/account/balance",{
            headers : {
                Authorization : "Bearer "+localStorage.getItem("token")
            }
        })
        .then(response=>{
            useBalance(response.data.balance)
        })
    },[])
    return <div>
        <Appbar></Appbar>
        <Balance value={balance}></Balance>
        <Users></Users>
    </div>
}