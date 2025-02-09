interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
  }
  
  export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
    return (
      <button 
        className={`px-6 py-2 rounded-full transition-all duration-300 ${
          variant === 'primary' 
            ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
        {...props}
      >
        {children}
      </button>
    )
  }