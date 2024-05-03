"use client";
import Link from "next/link";
import Button from "./Button";

export type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link href={href}>
      <Button>{children}</Button>
    </Link>
  );
}

export default LinkButton;
