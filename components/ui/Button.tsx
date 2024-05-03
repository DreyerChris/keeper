import Link from "next/link";

export type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
};

function Button({ text, href, onClick }: ButtonProps) {
  const button = (
    <button
      onClick={href ? () => {} : onClick}
      className="px-8 w-fit min-w-72 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-700 text-white hover:bg-none hover:bg-blue-700 hover:scale-105 transition-transform"
    >
      {text}
    </button>
  );

  return href ? <Link href={href}>{button}</Link> : button;
}

export default Button;
