import Ncard from "@/components/notesCard";
import Tcard from "@/components/Tcard";

const New = () => {
  return (
    <>
      <div className="mt-[70px] mb-2 mx-[70px] ">
        <h1 className="font-bold mb-2 text-[22px]">Recently uploaded notes</h1>
        <Ncard
          title1={"Os"}
          title6={"Python"}
          title2={"Java"}
          title3={"IT skills"}
          title4={"Maths"}
          title5={"Os"}
          likes={0}
          dislikes={0}
        />

        <div className="mt-[50px] ">
          <h1 className="font-bold mb-2 text-[22px]">Upcoming Tests</h1>
          <div className="flex gap-40 items-start">
            <Tcard
              title1={"Data structures with python"}
              title2={"Operating system"}
              staff={"Pankaja"}
              date={"May 4th 2023 10:30AM"}
              duration={"90 minutes"}
            />
            <div className="flex flex-col  items-center">
              <div className="h-[310px] w-[1px] bg-gray-500"></div>
            </div>
            <div className="flex flex-col">
              <div className="text-black font-bold text-[22px] mb-2">Performance</div>
              <div className=" bg-[url('/studentdash.png')] bg-contain bg-no-repeat w-[350px] h-[310px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
