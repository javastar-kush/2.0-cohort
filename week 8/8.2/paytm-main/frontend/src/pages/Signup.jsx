import { useState } from "react"
import axios from "axios"

import { Heading }  from "../components/Heading"
import { SubHeading }  from "../components/SubHeading"
import { InputBox }  from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { Password } from "../components/Password"

export const Signup = ()=>{
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return <div className="bg-slate-400 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-md bg-white p-7 h-max shadow text-center w-full">
                <Heading label={"Sign Up"}></Heading>
                <SubHeading content={"Enter your Information to Create an Account"}></SubHeading>

                <div className="pt-3">
                    <InputBox onChange={e=>{
                        setFirstname(e.target.value);
                    }} content={"First Name"} placeholder={"Kushagra"}></InputBox>

                    <InputBox onChange={e=>{
                        setLastname(e.target.value);
                    }} content={"Last Name"} placeholder={"Garg"}></InputBox>

                    <InputBox onChange={e=>{
                        setUsername(e.target.value);
                    }} content={"User Name"} placeholder={"Kushgra456"}></InputBox>

                    <Password onChange={e=>{
                        setPassword(e.target.value);
                    }} placeholder={"12345"}></Password>
                </div>

                <Button  label={"Sign In"} onClick={async ()=>{
                   const response = await axios.post("http://localhost:3001/api/v1/user/signup",{
                        firstname,
                        lastname,
                        username,
                        password
                    })
                    localStorage.setItem("token", response.data.token)
                }}></Button>
                <BottomWarning label={"Already have an Account"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
            </div>
        </div>
    </div>
}