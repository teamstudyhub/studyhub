"use client";
import { useAppSelector } from "@/store/index";
import { TestsSelector } from "@/store/tests.slice";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineArrowLeft, AiOutlineCheckCircle } from "react-icons/ai";

export default function TestViewPage() {
  const router = useRouter();
  const parmas = useParams();
  const id = parmas.testId;
  const feed = useAppSelector((state) => TestsSelector.selectById(state, id));
  const [state, setState] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setSubmit] = useState(false);

  // const onSubmit = async () => {
  //   setSubmit(true);
  //   try {
  //     if (feed) {
  //       let totalMarks = 0;
  //       await Promise.resolve(
  //         feed?.questions.map(async (question) => {
  //           const response = await SupaClient.from("questions")
  //             .select("answer")
  //             .single();
  //           await SupaClient.from("answers").insert({
  //             answer: state[question.id],
  //             questionsId: question.id,
  //             userId: "7fa09dd1-5e62-4e74-bd3c-bcbc3ae8b73c",
  //           });

  //           if (state[question.id] == response.data?.answer) {
  //             totalMarks++;
  //           }
  //         })
  //       );

  //       await SupaClient.from("marks").insert({
  //         marks: totalMarks,
  //         testsId: feed.id,
  //         userId: "7fa09dd1-5e62-4e74-bd3c-bcbc3ae8b73c",
  //       });
  //     }
  //   } catch (e) {
  //     toast.error("Something went wrong!");
  //   }
  //   setSubmit(false);
  // };

  return (
    <div className="flex p-10 justify-center">
      <div className="bg-white shadow-md flex flex-col w-2/3 p-20">
        <div className="flex flex-col justify-center items-center gap-3">
          <AiOutlineCheckCircle className="text-6xl text-green-500" />
          <h1 className="text-xl">Total Marks</h1>
          <h2 className="text-2xl">2</h2>
          <Button variant="outlined" onClick={()=>router.replace(`/dashboard/attendTest`)} color="success" size="large">Ok</Button>
        </div>
      </div>
    </div>
  );
}
