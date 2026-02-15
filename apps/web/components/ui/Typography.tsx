import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'muted' | 'brand';
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const variantStyles = {
  h1: 'text-4xl md:text-5xl lg:text-5xl font-heading leading-tight',
  h2: 'text-3xl md:text-4xl font-heading leading-snug',
  h3: 'text-2xl md:text-3xl font-heading leading-snug',
  body: 'text-base md:text-lg font-body leading-relaxed',
  caption: 'text-sm font-body leading-normal',
};

const weightStyles = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorStyles = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  muted: 'text-muted',
  brand: 'text-brand',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  weight = 'normal',
  color = 'primary',
  children,
  className,
  id,
}) => {
  const Component = (
    variant.startsWith('h') ? variant : 'p'
  ) as React.ElementType;

  return (
    <Component
      id={id}
      className={cn(
        variantStyles[variant],
        weightStyles[weight],
        colorStyles[color],
        className
      )}
    >
      {children}
    </Component>
  );
};
