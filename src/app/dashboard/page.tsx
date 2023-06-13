import Ncard from "@/components/notesCard"
import Tcard from "@/components/Tcard"
const New = () => {
  return (<>
    <div className=" mt-[70px] mx-[70px] "><h1 className="font-bold text-[22px]">Recently uploaded notes</h1>
    <Ncard title1={"Os"} title6={"Python"} title2={"Java"} title3={"IT skills"} title4={"Maths"} title5={"Os"} likes={0} dislikes={0} />
    
    <div className="mt-[50px]"><h1 className="font-bold text-[22px]">Upcoming Tests</h1>
    <Tcard title1={"Data structures with python"} title2={"Operating system"}staff={"Pankaja"} date={"May 4th 2023 10:30AM" }duration={"90 minutes"}/>
      </div></div>
      </>
  );
  
}
export default New;