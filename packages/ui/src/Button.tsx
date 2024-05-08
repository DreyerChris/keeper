export type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-8 w-fit min-w-72 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-700 text-white hover:bg-none hover:bg-blue-700 hover:scale-105 transition-transform"
    >
      {children}
    </button>
  )
}
