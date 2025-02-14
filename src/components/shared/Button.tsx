// shared/Button.tsx

"use client"
import { Button as MuiButton, ButtonProps, styled } from '@mui/material';
import React from 'react';

// Type extension for MUI Button
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'text' | 'outlined' | 'contained' | 'gradient';
  customcolor?: 'primary' | 'secondary';
}

const StyledButton = styled(MuiButton)<CustomButtonProps>(({ theme, variant, customcolor = 'primary' }) => ({
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  
  ...(variant === 'contained' && {
    backgroundColor: theme.palette[customcolor].main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette[customcolor].dark,
    }
  }),

  ...(variant === 'gradient' && {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: theme.palette.common.white,
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
      boxShadow: theme.shadows[3]
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
      transition: 'all 0.5s'
    },
    '&:hover::before': {
      left: '100%'
    }
  })
}));

const Button: React.FC<CustomButtonProps> = ({ variant = 'contained', customcolor, ...props }) => {
  return <StyledButton 
    variant={variant === 'gradient' ? 'contained' : variant}
    customcolor={customcolor}
    {...props} 
  />;
};

export default Button;