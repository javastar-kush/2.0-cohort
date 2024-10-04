import {Heading} from "../components/Heading";
import { InputBox } from "../components/InputBox";
import {Button} from "../components/Button";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

export const Send = ()=>{

    const [amount, setAmount] = useState(0);

    const [searchParams] = useSearchParams();
    const name=searchParams.get("name");
    const id = searchParams.get("id");


    return <div className="flex justify-center bg-sky-200 h-screen">
        <div className="flex flex-col justify-center">
            <div className="bg-white text-center rounded p-4 w-96 shadow">
                <Heading label={"Send Money"}></Heading>
                <div className="pt-10">
                    <div className="flex">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex flex-col justify-center">{name[0].toUpperCase()}</div>
                        <div className="ml-5 mt-2 text-xl font-bold">{name}</div>
                    </div>
                    <div className="pt-4">
                        <input onChange={(e)=>{
                            setAmount(e.target.value)
                        }} type="number" className="border border-slate-700 py-1 placeholder:p-1 rounded w-full px-1" placeholder="Enter Amount in Rupees"/>
                    </div>
                    <Button onClick={async()=>{
                        await axios.post("http://localhost:3001/api/v1/account/transfer",{
                            to : id,
                            amount : amount
                        },{
                            headers : {
                                Authorization : "Bearer "+localStorage.getItem("token")
                            }
                        })
                    }} label={"Initiate Transfer"}></Button>
                </div>
            </div>
        </div>
    </div>
}