export type StatusProps = {
  type: "error" | "success";
  children: React.ReactNode;
};

function Status({ type, children }: StatusProps) {
  return (
    <div
      className={`${
        type === "success"
          ? "bg-green-100 text-green-600"
          : "text-red-600 font-bold"
      } w-full flex justify-center py-1 rounded-lg text-sm`}
    >
      <span>{children}</span>
    </div>
  );
}

export default Status;
