import Button from '@/components/button'
import Input from '@/components/input'

export default function SignUp() {
  return (
    <main>
      <h1 className="text-3xl text-center font-bold leading-tight">
        Nice to meet you!
      </h1>
      <p className="mt-4 leading-relaxed text-center text-zinc-500">
        We&apos;re excited to have you aboard!
      </p>

      <form className="mt-10 grid grid-cols-2 gap-y-4 gap-x-2">
        <div>
          <label>First name</label>
          <Input className="mt-2" />
        </div>

        <div>
          <label>Last name</label>
          <Input className="mt-2" />
        </div>

        <div className="col-span-full">
          <label>Company</label>
          <Input className="mt-2" />
        </div>

        <div className="col-span-2">
          <label>Job title (optional)</label>
          <Input className="mt-2" />
        </div>

        <div className="col-span-2">
          <label>Work Email</label>
          <Input className="mt-2" />
        </div>

        <div className="col-span-2">
          <label>Create Password</label>
          <Input className="mt-2" />
        </div>

        <Button className="col-span-full">Continue</Button>
      </form>
    </main>
  )
}
