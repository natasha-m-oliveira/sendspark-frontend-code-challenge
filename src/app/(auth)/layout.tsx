import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px] grid md:justify-center items-center p-8">
      {children}
    </div>
  )
}
