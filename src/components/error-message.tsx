import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function ErrorMessage({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span {...props} className={twMerge('text-sm text-zinc-500', className)} />
  )
}
