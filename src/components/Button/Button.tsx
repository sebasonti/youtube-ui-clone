import { type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonStyles } from './Button.styles';

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};

export default Button;
