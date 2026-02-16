'use client';
import {
  Container as MantineContainer,
  ContainerProps as MantineContainerProps,
} from '@mantine/core';
import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CustomContainerProps extends MantineContainerProps {
  className?: string;
}

export const Container: React.FC<CustomContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <MantineContainer
      className={cn('w-full transition-all duration-300', className)}
      size="xl" // Standardizing to xl per design system
      {...props}
    />
  );
};
