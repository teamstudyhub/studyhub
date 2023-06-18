
import Comments from "@/components/Comments"
import Searchbar from "@/components/searchbar2"
import { AiFillLike, AiOutlineHeart } from "react-icons/ai"
import { BiDislike } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { FaShareAltSquare } from "react-icons/fa"


export default function Page() {
  return (<>
    


    <div className="flex flex-row gap-[80px] ml-[50px] mt-[20px]">

      <div className="flex flex-col gap-3">

        <div className=" bg-[url('/os.png')] bg-cover bg-no-repeat h-[250px] px-[10px] border-2 border-gray-400 ">    <FaShareAltSquare size="1.5rem" /> </div>
        <div className="flex flex-row justify-between ">
          <h1 className="text-[20px]">OS Week 1 - 2022</h1>
          <h1 className="text-[10px] text-gray-500"> Uploaded 1 month ago </h1>

        </div>

        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row gap-1 text-lg"><CgProfile size="2rem" /> Pankaja</div>
          <div className="flex flex-row gap-2"><AiFillLike size="1.5rem" color="#3EB489" />58</div>
          <div className="flex flex-row gap-2"><BiDislike size="1.5rem" />01</div>
          <div className="flex flex-row gap-2 text-lg items-center"><AiOutlineHeart size="1.5rem" color="#3EB489" />Add to favourites</div>

        </div>

        <div className="border-2 border-gray-700">
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[15px]">04 comments</h1>
          <div className="border-2 border-gray-500 text-[15px] py-[10px] pl-[5px] bg-white">Add a comment</div>

        </div>
      </div>

      
      <div><Comments/></div>
      
    </div>

  </>
  )
}