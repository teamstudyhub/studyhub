import { SetStateAction, useState } from "react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Searchbar(){
    const [username,setUserName] = useState("");
    const handle=(e:{target: { value: SetStateAction<string>;};})=>{
        setUserName(e.target.value);
    }
return(

    <div className=" h-12 w-80 border-2 bg-white border-emerald-400 flex flex-row items-center rounded-full">
    <form>
        <input className="ml-8 items-stretch border-transparent h-auto  w-auto text-black focus:ring-transparent  text-lg" type="text" value={username} placeholder="Search" onChange={handle}></input>
    </form>

        <h1 className="ml-2"> <AiOutlineSearch size="2rem" color="#3E8489"></AiOutlineSearch></h1>
    </div>
)
}
