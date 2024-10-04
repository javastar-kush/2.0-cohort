import { Heading }  from "../components/Heading"
import { SubHeading }  from "../components/SubHeading"
import { InputBox }  from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { Password } from "../components/Password"

export const Signin = () =>{
    return <div className="bg-sky-200 h-screen flex justify-center shadow">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded h-max p-7 w-full text-center">
                <Heading label="Sign In"></Heading>
                <SubHeading content="Enter to Sign in to your Account"></SubHeading>
                <InputBox content={"Username"} placeholder={"Kushagra789"}></InputBox>
                <Password placeholder={"1234"}></Password>
                <Button label={"Sign In"}></Button>
                <BottomWarning label={"Don't Have Account ?"} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
            </div>
        </div>
    </div>
}