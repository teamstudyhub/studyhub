import Profile from "@/components/Profile";

interface college {
    Register: string
    Name: string
    Branch: string
    Semester: number
}

export default function Page({ Register,
    Name,
    Branch,
    Semester }: college) {

    return (<>
        <div className="  py-[30px] px-[30px] text-[30px] font-bold">My Profile
        <div className="flex flex-row gap-10 ml-[150px] my-[50px] " >
            <Profile />
            <div className="flex flex-col gap-6 mt-[50px]">
                <div className="bg-white px-[10px] py-[10px] shadow-lg shadow-gray-800 w-[500px] h-[200px] rounded-3xl">

                    <h1 className="text-[25px] font-bold"> College Details</h1>
                    <div className="border-[2px] border-black rounded-full"></div>
                    <div className="flex flex-col gap-3 mt-[10px] pl-[30px] ">
                    <div className="text-[15px] font-bold"> Register Number :       {Register = "465CS2000"}</div>
                    <div className="text-[15px] font-bold"> College Name :      {Name = "KS Polytechnic"}</div>
                    <div className="text-[15px] font-bold"> Branch :      {Branch = "Computer Science"}</div>
                    <div className="text-[15px] font-bold"> Semester :      {Semester = 6}</div>
                    </div>

                </div>

                <div className="bg-white px-[10px] py-[10px] shadow-lg shadow-gray-800 h-[200px] rounded-3xl">
                    <h1 className="text-[25px] font-bold"> Performance</h1>
                    <div className="border-[2px] border-black rounded-full"></div>
                    <div className="flex flex-row gap-8 mt-[30px] ml-[70px]">
                        <div className="flex flex-col items-center text-[20px] font-bold">Tests Attended
                             <div className="text-[25px] font-bold">12</div>
                        </div>
                        <div className="h-[80px] w-[5px] bg-gray-500 rounded-full"></div>
                        <div className="flex flex-col items-center text-[20px] font-bold">Tests Attended
                            <div className="text-[25px] font-bold">12</div>
                        </div>
                    </div>

                    
                </div>
            </div>
            </div></div>
        </>
        )
}