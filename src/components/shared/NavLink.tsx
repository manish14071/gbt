// shared/NavLink.tsx
import { Link, LinkProps } from '@mui/material';
import { forwardRef } from 'react';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <Link 
      ref={ref} 
      {...rest}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        ...rest.sx
      }}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

export default NavLink;