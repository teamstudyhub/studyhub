import { VariantProps, cva } from "class-variance-authority";

interface inputProps{
    heading:string,
    container:string 
}

export default function inputbox(
    {heading,container}:inputProps
) {
    return (
      <div>
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
          {heading}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
           
          </div>
          <input
            
            className="block w-[300px] rounded-[5px] border-0  py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            placeholder={container}
          />
         
        </div>
      </div>
    )
  }