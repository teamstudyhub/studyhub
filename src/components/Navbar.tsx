import {IoMdNotificationsOutline} from "react-icons/io"
import {FaRegUser} from "react-icons/fa"
import Image from 'next/image'
export default function Navbar(){

    return(

<nav className="bg-slate-50 drop-shadow-md h-20 flex items-center justify-between px-5 py-2 text-xl font-mono font-bold">
      <div className="flex flex-row items-center gap-2"><h1><Image src="Rectangle 17.svg" alt={""} width={50} height={50}></Image></h1> <h1>STUDYHUB</h1> </div>
        <ul className=" flex flex-row gap-8 mr-5 ">
          <li><h1><IoMdNotificationsOutline size="2rem" color="#3EB489"/></h1></li>
          <li><h1><FaRegUser size="1.8rem" color="#3EB489"/></h1></li>
        </ul>
      </nav>
      
      )
}