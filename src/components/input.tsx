import { Input as BaseInput, InputProps } from '@mui/base/Input'
import React from 'react'

const Input = React.forwardRef(function Input(
  { slotProps, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <BaseInput
      {...props}
      slotProps={{
        ...slotProps,
        input: {
          className:
            'h-12 w-full text-sm leading-5 px-3 py-2 rounded-md bg-transparent border-2 border-zinc-300 focus:border-indigo-400 aria-[invalid=true]:border-red-500 outline-none placeholder:text-zinc-500',
        },
      }}
      ref={ref}
    />
  )
})

export default Input
