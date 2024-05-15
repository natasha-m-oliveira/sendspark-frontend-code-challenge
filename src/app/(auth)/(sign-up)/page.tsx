import { SignUpForm } from '@/components/sign-up-form'

export default function SignUp() {
  return (
    <div className="md:w-auto">
      <h1 className="text-3xl text-center font-bold leading-tight">
        Nice to meet you!
      </h1>
      <p className="mt-4 leading-relaxed text-center text-zinc-500">
        We&apos;re excited to have you aboard!
      </p>

      <SignUpForm />
    </div>
  )
}
