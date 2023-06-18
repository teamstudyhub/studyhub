import Button from "@/components/Button";
import { AiOutlineUser } from "react-icons/ai";
import Link  from "next/link";


export default function Signup_emailverification() {
    return (
    <div className="block w-auto items-center"><div className=" items-center "><h1 className="flex justify-center text-3xl font-bold py-11">SIGN UP</h1></div>
      
        <div className=" h-fit bg-white  block justify-center border-0 rounded-md px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Email Verification
            </h2>
            <h3 className="text-center">Check your mail <span className="text-green-400">s***@gmail.com</span>. We sent you a code. Enter the code below to verify your gmail account.</h3>

          </div>
        <div>  </div>
          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Verification code
                </label>
                <div className="mt-2">
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
             
              <div pb-5 >
             <Link href={'/signup2'}><Button
              fullwidth
        intent={"primary"} >
       Verify
      </Button></Link>
      
              </div>
            </form>
  
          </div>
        </div>
        </div>
   
    )
  }