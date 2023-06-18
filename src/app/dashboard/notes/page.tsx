import Ncard from "@/components/notesCard"
import Searchbar from "@/components/searchbar2"
import Link from "next/link";
import { MdFilterAlt } from "react-icons/md";

function New() {
  return (<>
    <div className="mr-20 mt-4 flex flex-row-reverse gap-6 sticky top-0">

    
      
     
      
    </div>

    <div className=" mt-[70px] mx-[70px] "><h1 className="font-bold text-[22px]">Recently Viewed notes</h1>
      <Link href={"/dasboard/notes/viewNotes"}></Link><Ncard title1={"Os"} title6={"Python"} title2={"Java"} title3={"IT skills"} title4={"Maths"} title5={"Os"} likes={0} dislikes={0} />

    </div>

    <div className=" mt-[70px] mx-[70px] "><h1 className="font-bold text-[22px]">Most liked notes</h1>
      <Ncard title1={"Os"} title6={"Python"} title2={"Java"} title3={"IT skills"} title4={"Maths"} title5={"Os"} likes={0} dislikes={0} />
    </div>
  </>
  );

}
export default New;