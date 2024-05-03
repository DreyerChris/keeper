"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-2/3">
      <h5>
        Seshat is a handy app to store strings, and files temporarily for later
        retrieval or for sharing between devices
      </h5>
      <div className="flex flex-col justify-center space-y-5 flex-1">
        <Button text="I already have a sync code" href="/sync" />
        <Button text="I want to start a new sync" />
      </div>
    </main>
  );
}
