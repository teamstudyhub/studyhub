import Button from "@/components/Button"
import FCard from "@/components/featurescard"
import Link  from "next/link"
import { AiOutlineInstagram, AiOutlineUser } from "react-icons/ai"
import { BiRightArrow } from "react-icons/bi"
import { CgMail } from "react-icons/cg"
import { CiFacebook } from "react-icons/ci"
import { FiTwitter } from "react-icons/fi"


export default function Page() {
  return (
    <div className="h-screen w-screen ">
      <nav className=" h-[80px] w-full flex flex-row justify-between shadow-lg shadow-gray-400 items-center ">

        <div className="bg-[url('/logo.jpg')] bg-contain bg-no-repeat w-full h-[65px] mb-[7px] "></div>
        <div className="text-emerald-400 border-2 border-emerald-400 px-[20px] py-[10px] font-bold rounded-full my-[50px]">Sign_in </div>

      </nav>

      <div className="mt-[50px] mx-[50px] flex flex-row justify-between">
        <div className="bg-[url('/lp.png')] bg-contain bg-no-repeat w-[600px] h-[600px]  "></div>
        <div className="mr-[50px] flex flex-col gap-6 items-center">
          <div>
            <div className="bg-[url('/logol.png')] bg-cover bg-no-repeat w-[500px] h-[200px] "></div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-[30px] text-emerald-500 font-bold ">IMPROVING LEARNING FOR </h1>
            <h1 className="text-[30px] text-emerald-500 font-bold "> A BETTER FUTURE</h1>
          </div>

          <div className="flex flex-row items-center">
            <button className="h-14 px-[10px] pr-[50px] border-2 border-emerald-400">New to StudyHub?</button>
           <Link href={"/signin"}> <button className="h-14 px-[10px] pr-[30px]  font-bold text-white bg-gradient-to-t from-[#00E18F] to-[#3EB489] flex flex-row items-center gap-2">GET STARTED <BiRightArrow size="1rem" ></BiRightArrow> </button></Link>
          </div>
        </div>
      </div>

      <div className=" mx-[50px] border-t-2 border-emerald-400 py-[20px] flex flex-col items-center">
        <h1 className="text-[25px] font-bold "> Features</h1>
      </div>
      <div className="flex flex-row gap-8 justify-center">

        <FCard image="/fc1.png" title="Unlimited Revision" content="
                                    Revising and retaining concept is key to a better performance in
                                    test. You can revise the lessons
                                    as many times as you like."/>

        <FCard image="/fc3.png" title="Comprehensive study material" content="
                                    You will always be  provided with the best and the most comprehensive study materials to study."/>

        <FCard image="/fc2.png" title="Unlimited Adaptive Practice" content="
                                    Adaptive chapter wise tests that
                                    help student master each chapter
                                    Recommended in a practice session enabling long-lasting learning."/>

        <FCard image="/fc4.png" title="Study Anywhere Anytime" content="
                                    The program adapts to your pace
                                    of learning and your learning
                                    pattern. You can study as per your schedule."/> </div>


      <div className="mt-[80px] mx-[50px] border-t-2 border-emerald-400 flex flex-col items-center py-[20px]">
        <h1 className="text-[25px] font-bold">Contact us</h1></div>

      <div className="flex flex-row mx-[150px] gap-[200px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col ">
            <label >First name</label>
            <input type="text" placeholder="Enter your name" className="border-[1px] rounded-sm border-emerald-400 px-[10px] py-[10px]"></input></div>
          <div className="flex flex-col "><label >Description</label>
            <textarea placeholder="Enter your description" className="border-[1px] w-[400px] rounded-sm border-emerald-400 px-[10px] py-[10px]"></textarea></div>



        </div>
        <div className="flex flex-col ">
          <label >Email</label>
          <input type="email" placeholder="Enter your email" className="border-[1px] rounded-sm border-emerald-400 px-[10px] py-[10px] w-[400px]"></input>
        </div>

      </div>
      <div className="ml-[150px] my-[30px]"> <Button

        LeftIcon={<AiOutlineUser className="text-xl" />}
        intent={"primary"}
      >
        Submit
      </Button></div>
      

      <div className="bg-black flex flex-col items-center py-[20px]">
        <h1 className="text-white font-bold text-[19px]" >StudyHub</h1>
      <h1 className="text-gray-500 text-[12px]">StudyHub is a website where you can find the best Study materials  Anytime, Anywhere.
          </h1>
          
          <div className="flex flex-row gap-2 justify-center mt-[10px]">
          <CiFacebook size="1.5rem" color="#3EB489"></CiFacebook>
          <AiOutlineInstagram size="1.5rem" color="#3EB489"/>
          <FiTwitter size="1.5rem" color="#3EB489"/>
          <CgMail size="1.5rem" color="#3EB489"/>
          </div>
          
          
          </div>

    </div>
  )
}
