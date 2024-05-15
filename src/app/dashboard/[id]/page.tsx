interface DashboardProps {
  params: {
    id: string
  }
}

export default function Dashboard({ params }: DashboardProps) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px] grid md:justify-center items-center p-8">
      <h1 className="text-3xl text-center font-bold leading-tight">
        Welcome, Natasha!
      </h1>
    </div>
  )
}
