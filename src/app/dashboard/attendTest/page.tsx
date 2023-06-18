import Upcoming_Test from "@/components/UpcomingTest";
import Example from "@/components/availableTests";
import { UpcomingTest } from "@/stories/UpcomingTest.stories";

export default function Page() {
    return(
      <div>
       <div className='text-3xl px-16'><h1><b>Available tests</b></h1></div>
           <Example/>
           <div className='text-3xl px-16 '><h1><b>Upcoming tests</b></h1></div>
      <Upcoming_Test/>
      </div>
    );
  }