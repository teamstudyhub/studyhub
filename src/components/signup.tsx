import Button from "@/components/Button";
import { AiOutlineUser } from "react-icons/ai";
import Link  from "next/link";



export default function Signup() {
    return (
      <div className="block w-4/5 items-center "><div className=" items-center "><h1 className="flex justify-center text-3xl font-bold py-11">SIGN UP</h1></div>
       
        <div className=" h-fit bg-white w-full block justify-center border-0 rounded-md px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Account details
            </h2>
          </div>
        <div>  </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    New Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="first name"
                    name="first name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="last name"
                    name="last name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </label>

                <div className=" flex flex-row mt-2 items-center">
                <div className="px-4"><input
                    id="gender"
                    name="female"
                    type="radio"
                    required
                    className=" text-green-400 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-900 focus:ring-1 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                  />
                    <label className="px-2">Male</label></div>
                    <div className="px-4 ">
                    <input
                    id="gender"
                    name="female"
                    type="radio"
                    
                    className="  text-green-400 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-900 focus:ring-1 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                  />
                    <label className="px-2">Female</label></div>
                    <div className="px-4 ">
                    <input
                    id="gender"
                    name="female"
                    type="radio"
                    required
                    className=" text-green-400 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-900 focus:ring-1 focus:ring-inset focus:ring-green-400 sm:text-sm sm:leading-6"
                  />
                    <label className="px-2">Other</label></div>
               
                </div>

                <div className="mt-5">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Address
                </label>
                <div className="mt-2 pb-3">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              </div>
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
                    id="text"
                    name="text"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
  
          

              <div pb-5 >
                
              <Link href={"/signin"}> <Button
              fullwidth
        intent={"primary"} >
        Create account
      </Button></Link>
              </div>
            </form>
  
           
          </div>
        </div>
      </div>
    )
  }