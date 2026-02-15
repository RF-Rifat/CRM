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
          'transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]',
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
