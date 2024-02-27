import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils';

export const ButtonVariants = cva(
  `
  flex justify-center items-center w-full h-[54px] rounded-button 
  text-base font-medium text-white
  `,
  {
    variants: {
      variant: {
        solid: 'bg-gradient-red',
        outline: 'gradient-border bg-white text-black',
        disabled: 'bg-gray200 text-black',
      },
      size: {
        default: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
  disabled?: boolean;
  isShadow?: boolean;
  onClick: (value?: any) => void;
}

export const Button = ({
  children,
  variant,
  size,
  disabled,
  isShadow,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonVariant = disabled ? 'disabled' : variant;
  return (
    <button
      className={cn(
        isShadow && 'shadow-button',
        ButtonVariants({ variant: buttonVariant, size }),
        className
      )}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
      {...props}
    >
      {children && children}
    </button>
  );
};
