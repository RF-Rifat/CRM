'use client';
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
          'h-auto border-t-2 border-r-2 border-b-0 border-l-2 border-gray-400 px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]'
        )}
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%), var(--mantine-color-violet-6)',
          boxShadow:
            '0 20px 40px -10px rgba(124, 58, 237, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.1)',
          ...props.style,
          borderRadius: '12px',
        }}
        {...props}
      />
    );
  }
);

export const Button = createPolymorphicComponent<'button', CustomButtonProps>(
  _Button
);
