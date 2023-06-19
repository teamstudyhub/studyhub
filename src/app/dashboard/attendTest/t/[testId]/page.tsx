"use client";
import { useAppSelector } from "@/store/index";
import { TestsSelector } from "@/store/tests.slice";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SupaClient } from "../../../../../../utils/supabase";

export default function TestViewPage() {
  const router = useRouter();
  const parmas = useParams();
  const id = parmas.testId;
  const feed = useAppSelector((state) => TestsSelector.selectById(state, id));
  const [state, setState] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setSubmit] = useState(false);

  const onSubmit = async () => {
    setSubmit(true);
    try {
      if (feed) {
        let totalMarks = 0;
        await Promise.resolve(
          feed?.questions.map(async (question) => {
            const response = await SupaClient.from("questions")
              .select("answer")
              .eq("id", question.id)
              .single();

            await SupaClient.from("answers").insert({
              answer: state[question.id],
              questionsId: question.id,
              userId: "7fa09dd1-5e62-4e74-bd3c-bcbc3ae8b73c",
              marks: state[question.id] == response.data?.answer ? 1 : 0,
            });
          })
        );

        await SupaClient.from("marks").insert({
          marks: totalMarks,
          testsId: feed.id,
          userId: "7fa09dd1-5e62-4e74-bd3c-bcbc3ae8b73c",
        });
        router.replace(`/dashboard/attendTest/t/${feed.id}/r/${feed.id}`);
      }
    } catch (e) {
      toast.error("Something went wrong!");
    }
    setSubmit(false);
  };

  return (
    <div className="flex p-10 justify-center">
      <div className="bg-white shadow-md flex flex-col w-2/3">
        <div className="w-full px-10 flex border-b border-gray-300 py-4 items-center gap-3">
          <AiOutlineArrowLeft
            className="text-xl"
            onClick={() => router.back()}
          />{" "}
          <span className="text-xl">{feed?.test_title}</span>
        </div>
        <div>
          {feed?.questions.map((question, index) => (
            <div className="px-10 py-5">
              <h2 className="text-lg font-medium block space-x-2">
                <span>{index + 1}.</span> {question.question}
              </h2>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {question.choices?.map((choice) => (
                  <FormControlLabel
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        [question.id]: (e.target as HTMLInputElement).value,
                      }))
                    }
                    key={choice}
                    value={choice}
                    control={<Radio />}
                    label={choice}
                  />
                ))}
              </RadioGroup>
            </div>
          ))}
          <div className="flex justify-end py-3 px-10">
            <Button
              onClick={onSubmit}
              variant="contained"
              fullWidth
              color={"success"}
            >
              {isSubmitting ? "Uploading your answers..." : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
