import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  createPolymorphicComponent,
} from '@mantine/core';
import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CustomButtonProps extends MantineButtonProps {
  className?: string;
}

const _Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <MantineButton
        ref={ref}
        className={cn(
          'h-auto rounded-[12px] border-[1.5px] border-[#989898] px-[20px] py-[10px] shadow-[0_48px_100px_0_rgba(17,12,46,0.15)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]',
          className
        )}
        {...props}
      />
    );
  }
);

export const Button = createPolymorphicComponent<'button', CustomButtonProps>(
  _Button
);
