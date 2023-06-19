"use client";

import Test from "@/components/Test";
import { useAppSelector } from "@/store/index";
import { TestsSelector } from "@/store/tests.slice";
import Link from "next/link";

export default function AttendTestsPage() {
  const Tests = useAppSelector(TestsSelector.selectAll);
  return (
    <div>
      <div className="text-3xl px-16">
        <h1 className="py-4">
         Available tests
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-8 px-10 grid-cols-2">
        {Tests.map((feed) => (
          <Link href={`/dashboard/attendTest/t/${feed.id}`}>
            <Test key={feed.id} {...{ feed }} />
          </Link>
        ))}
      </div>
    </div>
  );
}
