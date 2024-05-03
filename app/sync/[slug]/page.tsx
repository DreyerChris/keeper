"use client";
import Input from "@/components/ui/Input";
import Status from "@/components/ui/Status";
import { useState } from "react";

function Page({ params }: { params: { slug: string } }) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  return (
    <main className="flex flex-col items-center h-2/3">
      <div className="w-2/12">
        <Status type="success">
          sync code: <b>{params.slug}</b>
        </Status>
      </div>
      <div className="flex flex-col space-y-3 mt-8 w-4/12">
        <Input
          label="Text 1"
          value={text1}
          name="text1"
          onChange={(e) => setText1(e)}
          error=""
        />
        <Input
          label="Text 2"
          value={text2}
          name="text2"
          onChange={(e) => setText2(e)}
          error=""
        />
        <Input
          label="Text 3"
          value={text3}
          name="text3"
          onChange={(e) => setText3(e)}
          error=""
        />
        <Input
          label="Text 4"
          value={text4}
          name="text4"
          onChange={(e) => setText4(e)}
          error=""
        />
      </div>
    </main>
  );
}

export default Page;
