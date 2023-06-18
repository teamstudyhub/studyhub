


interface history {

    title: string;
    staff: string;
    date: string;
    duration: string;
}
export default function Page({ title,
    staff,
    date,
    duration }: history) {
    return (
        <><div className='text-3xl px-16 pt-2'><h1><b>Test History</b></h1></div>
            <div className="flex flex-col mt-[50px] mx-[50px] ">
                <div className=" flex flex-row justify-between px-[10px] bg-gray-100 py-[10px] border-2 border-gray-500  mb-[10px] ">
                    <div className="flex flex-col">
                        <div className="text-[15px] font-bold">Data structures with Python</div>
                        <div className="text-[10px] ">Created by {staff = "Pankaja"}</div>
                        <div className="text-[10px] ">Conduction date and time {date = "May 4th 2023 10:30 AM"}</div>
                        <div className="text-[10px] ">Duration {duration = "100 minutes"}</div>

                    </div>
                    <div className="flex justify-center items-center">
                        <div className="border-2 border-dashed border-emerald-400 bg-transparent px-[15px] py-[10px]">View</div>
                    </div>
                </div>
                <div className=" flex flex-row justify-between px-[10px] bg-gray-100 py-[10px] border-2 border-gray-500  mb-[10px]">
                    <div className="flex flex-col">
                        <div className="text-[15px] font-bold">Data structures with Python</div>
                        <div className="text-[10px] ">Created by {staff = "Pankaja"}</div>
                        <div className="text-[10px] ">Conduction date and time {date = "May 4th 2023 10:30 AM"}</div>
                        <div className="text-[10px] ">Duration {duration = "100 minutes"}</div>

                    </div>
                    <div className="flex justify-center items-center">
                        <div className="border-2 border-dashed border-emerald-400 bg-transparent px-[15px] py-[10px]">View</div>
                    </div>
                </div>
                <div className=" flex flex-row justify-between px-[10px] bg-gray-100 py-[10px] border-2 border-gray-500  mb-[10px]">
                    <div className="flex flex-col">
                        <div className="text-[15px] font-bold">Data structures with Python</div>
                        <div className="text-[10px] ">Created by {staff = "Pankaja"}</div>
                        <div className="text-[10px] ">Conduction date and time {date = "May 4th 2023 10:30 AM"}</div>
                        <div className="text-[10px] ">Duration {duration = "100 minutes"}</div>

                    </div>
                    <div className="flex justify-center items-center">
                        <div className="border-2 border-dashed border-emerald-400 bg-transparent px-[15px] py-[10px]">View</div>
                    </div>
                </div>
                <div className=" flex flex-row justify-between px-[10px] bg-gray-100 py-[10px] border-2 border-gray-500  mb-[10px]">
                    <div className="flex flex-col">
                        <div className="text-[15px] font-bold">Data structures with Python</div>
                        <div className="text-[10px] ">Created by {staff = "Pankaja"}</div>
                        <div className="text-[10px] ">Conduction date and time {date = "May 4th 2023 10:30 AM"}</div>
                        <div className="text-[10px] ">Duration {duration = "100 minutes"}</div>

                    </div>
                    <div className="flex justify-center items-center">
                        <div className="border-2 border-dashed border-emerald-400 bg-transparent px-[15px] py-[10px]">View</div>
                    </div>
                </div>
                <div className=" flex flex-row justify-between px-[10px] bg-gray-100 py-[10px] border-2 border-gray-500  mb-[10px]">
                    <div className="flex flex-col">
                        <div className="text-[15px] font-bold">Data structures with Python</div>
                        <div className="text-[10px] ">Created by {staff = "Pankaja"}</div>
                        <div className="text-[10px] ">Conduction date and time {date = "May 4th 2023 10:30 AM"}</div>
                        <div className="text-[10px] ">Duration {duration = "100 minutes"}</div>

                    </div>
                    <div className="flex justify-center items-center">
                        <div className="border-2 border-dashed border-emerald-400 bg-transparent px-[15px] py-[10px]">View</div>
                    </div>
                </div>
                <div className=" flex flex-row justify-between px-[10px] bg-gray-100 py-[10px] border-2 border-gray-500  mb-[10px]">
                    <div className="flex flex-col">
                        <div className="text-[15px] font-bold">Data structures with Python</div>
                        <div className="text-[10px] ">Created by {staff = "Pankaja"}</div>
                        <div className="text-[10px] ">Conduction date and time {date = "May 4th 2023 10:30 AM"}</div>
                        <div className="text-[10px] ">Duration {duration = "100 minutes"}</div>

                    </div>
                    <div className="flex justify-center items-center">
                        <div className="border-2 border-dashed border-emerald-400 bg-transparent px-[15px] py-[10px]">View</div>
                    </div>
                </div>

            </div>
                

         

        </>
    )
}