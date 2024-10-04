import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () =>{

    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3001/api/v1/user/bulk?filter=" + filter)
        .then(response=>{
            setUsers(response.data.user)
        })
    },[filter])

    return <>
        <div className="text-2xl m-2 font-bold">
            Users
        </div>
        <div className="m-2">
            <input onChange={e=>{
                setFilter(e.target.value)
            }} type="text" placeholder="Search Here.." className="border-2 border-slate-500 rounded w-full py-1 px-3 placeholder:italic"/>
        </div>
        <div>
        {users.map(user => <User key={user._id} user={user} user_firstname={user.firstname} user_lastname={user.lastname}/>)}
        </div>
    </>
}

function User({user_firstname, user_lastname, user}){
    const navigate = useNavigate();

    return <div className="flex justify-between m-4">
        <div className="flex">
            <div className="rounded-full w-12 h-12 bg-blue-500 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user_firstname[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user_firstname} {user_lastname}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
            <Button label={"Send Money"} onClick={e=>{
                navigate("/send?id="+user._id+"&name="+user_firstname);
            }}></Button>
        </div>
    </div>
}