interface NavLinkProps {
    href: string
    text: string
  }
  
  export default function NavLink({ href, text }: NavLinkProps) {
    return (
      <a 
        href={href} 
        className="text-white/90 hover:text-white relative group py-2"
      >
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
      </a>
    )
  }