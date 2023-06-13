import Ncard from "@/components/notesCard"
import Searchbar from "@/components/searchbar2"
import { MdFilterAlt } from "react-icons/md";

function New() {
  return (<>
    <div className="mr-20 mt-4 flex flex-row-reverse gap-6 sticky top-0">

      <Searchbar />
      <button className=" bg-transparent py-1 px-6 border-2 border-emerald-400 rounded-xl text-emerald-400 ">Question papers </button>
      <button className=" bg-emerald-400 py-1 px-6 border-8 border-emerald-400 rounded-xl text-white ">Notes </button>
      <MdFilterAlt size="2rem" color="#3EB489"/>
    </div>

    <div className=" mt-[70px] mx-[70px] "><h1 className="font-bold text-[22px]">Recently Viewed notes</h1>
      <Ncard title1={"Os"} title6={"Python"} title2={"Java"} title3={"IT skills"} title4={"Maths"} title5={"Os"} likes={0} dislikes={0} />

    </div>

    <div className=" mt-[70px] mx-[70px] "><h1 className="font-bold text-[22px]">Most liked notes</h1>
      <Ncard title1={"Os"} title6={"Python"} title2={"Java"} title3={"IT skills"} title4={"Maths"} title5={"Os"} likes={0} dislikes={0} />
    </div>
  </>
  );

}
export default New;