import { Button as BaseButton, ButtonProps } from '@mui/base/Button'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = React.forwardRef(function Button(
  { className, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <BaseButton
      {...props}
      className={twMerge(
        'flex h-12 items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 font-semibold text-white',
        className,
      )}
      ref={ref}
    />
  )
})

export default Button
