"use client";
import Button from "@/components/Button";
import { Input, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SupaClient } from "../../../../../utils/supabase";
import { useAppDispatch } from "../../../../../utils/hooks";
import { postNotes } from "@/store/notes.slice";

const Subjects = [
  { value: "20CS21P", name: "Operating systems" },
  { value: "20CS23P", name: "Sowtware engineering" },
  { value: "20CS24P", name: "Hardware" },
];
export default function NewNotes() {
  const router = useRouter();
  const [state, setState] = useState({
    title: "",
    unitNo: "",
    subjectName: "",
    semester: "",
    unitName: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    try {
      if (file) {
        const response = await SupaClient.storage
          .from("notes")
          .upload(`/f/${file.name}-${new Date().getTime()}.pdf`, file);
        const path = response.data?.path;
        if (path) {
          dispatch(
            postNotes({
              title: state.title,
              fileUrl: path,
              unitNo: state.unitNo,
              subCode: state.subjectName,
              semester: state.semester,
              unitName: state.unitName,
            })
          );
          toast.success("Uploaded notes successfully");
          setState({
            title: "",
            unitNo: "",
            subjectName: "",
            semester: "",
            unitName: "",
          });
        }
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex p-10 justify-center">
      <div className="bg-white shadow-md flex flex-col w-1/2 gap-3">
        <div className="w-full px-10 flex border-b border-gray-300 py-4 items-center gap-3">
          <AiOutlineArrowLeft
            className="text-xl"
            onClick={() => router.back()}
          />{" "}
          <span className="text-xl">New Notes</span>
        </div>
        <div className={"flex flex-col gap-3 w-full h-fit p-10"}>
          <input
            onChange={(e) => setFile(e.target!.files![0])}
            type={"file"}
            className="focus:outline-none"
          />
          <TextField
            onChange={(e) =>
              setState((prev) => ({ ...prev, title: e.target.value }))
            }
            value={state.title}
            label="Title"
            className="focus:outline-none"
          />
          <TextField
            onChange={(e) =>
              setState((prev) => ({ ...prev, unitNo: e.target.value }))
            }
            value={state.unitNo}
            label="Unit No"
            className="focus:outline-none"
          />
          <TextField
            onChange={(e) =>
              setState((prev) => ({ ...prev, unitName: e.target.value }))
            }
            value={state.unitName}
            label="Unit Name"
            className="focus:outline-none"
          />
          <TextField
            onChange={(e) =>
              setState((prev) => ({ ...prev, semester: e.target.value }))
            }
            value={state.semester}
            id="outlined-select-currency"
            select
            label="Select Sem"
            helperText="Please select sem"
          >
            {new Array(6).fill(0).map((_p, option) => (
              <MenuItem key={option + 1} value={option + 1}>
                {option + 1}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            onChange={(e) =>
              setState((prev) => ({ ...prev, subjectName: e.target.value }))
            }
            value={state.subjectName}
            id="outlined-select-currency"
            select
            label="Select Subject"
            helperText="Please select subject"
          >
            {Subjects.map((option) => (
              <MenuItem key={option.name} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <Button onClick={() => onSubmit()} fullwidth>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}
