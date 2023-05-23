import Button from "@/components/Button";
import Dropdown from "@/components/dropdown";
import Signin from "@/components/signin";
import Ncard from "../components/notesCard";
import { AiOutlineUser } from "react-icons/ai";
import BasicDatePicker from "@/components/datepicker";

export default function Page() {
  return (
    
    <div>
      <BasicDatePicker/><br /><br />
    <Signin/>
     <Ncard title="os week 1" dislikes={10} likes={20}/>
      
    </div>
  );
}