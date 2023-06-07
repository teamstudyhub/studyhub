import Button from "@/components/Button";
import { AiOutlineUser } from "react-icons/ai";




export default function Signin() {
    return (
      <>
       
        <div className=" h-fit bg-white w-4/5 block justify-center border-0 rounded-md px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
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
                    Password
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
              <Button
              fullwidth
        LeftIcon={<AiOutlineUser className="text-xl" />}
        intent={"primary"}
      >
        Signin
      </Button>
      <div className="text-sm flex items-center justify-center px-2 py-2">
                    <a href="#" className="font-semibold  text-[#00E18F] hover:text-[#3EB489] ">
                      Forgot password?
                    </a>
                  </div>
              </div>
            </form>
  
           
          </div>
        </div>
      </>
    )
  }