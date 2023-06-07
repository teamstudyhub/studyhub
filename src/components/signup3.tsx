import Button from "@/components/Button";
import { AiOutlineUser } from "react-icons/ai";




export default function Signup3() {
    return (
      <>
       
        <div className=" h-fit bg-white w-4/5 block justify-center border-0 rounded-md px-6 py-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-6 tracking-tight text-gray-900">
              College Details
            </h2>
          </div>
        <div>  </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Register number
                </label>
                <div className="mt-2">
                  <input
                    id="reg no"
                    name="reg no"
                    type="text"
                    
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
  
              <div>
                <div className="flex items-center justify-between">
                  <label  className="block text-sm font-medium leading-6 text-gray-900">
                    Semester
                  </label>
                  
                </div>
                <div className="mt-2"  >
                <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" name="Department" id="dept" placeholder="Semester">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    </select>
                </div></div>
                <div>
                <div className="flex items-center justify-between">
                  <label  className="block text-sm font-medium leading-6 text-gray-900">
                    Branch
                  </label>
                  
                </div>

                <div className="mt-2"  >
                <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" name="Department" id="dept" placeholder="Department">
                    <option value="CSE">CSE</option>
                    <option value="EC">EC</option>
                    <option value="ME">ME</option>
                    <option value="AE">AE</option>
                    <option value="CE">CE</option>
                    </select>
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label  className="block text-sm font-medium leading-6 text-gray-900">
                    College Name
                  </label>
                  
                </div>
                <div className="mt-2 pb-3">
                  <input
                    id="text"
                    name="text"
                    type="text"
                    
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label  className="block text-sm font-medium leading-6 text-gray-900">
                    College code
                  </label>
                  
                </div>
                <div className="mt-2 pb-3">
                  <input
                    id="Text"
                    name="Text"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div pb-5 >
              <Button
              fullwidth
        intent={"primary"} >
        Next
      </Button>
      
              </div>
            </form>
  
           
          </div>
        </div>
      </>
    )
  }