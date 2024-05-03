"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Sync() {
  const [syncCode, setSyncCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const submit = () => {
    if (syncCode === "pink-elephant-123") {
      router.push(`/sync/${syncCode}`);
    } else {
      setError("Oops! The entered sync code could not be found");
    }
  };

  return (
    <main className="flex flex-col items-center justify-between h-2/3">
      <h5>
        Enter your sync code to retrieve your stored strings and files on this
        device
      </h5>
      <div className="flex flex-col justify-center items-center space-y-16 flex-1 w-3/12">
        <Input
          label="Sync code"
          value={syncCode}
          name="syncCode"
          onChange={(e) => setSyncCode(e)}
          error={error}
        />
        <Button onClick={() => submit()}>Continue</Button>
      </div>
    </main>
  );
}

export default Sync;
