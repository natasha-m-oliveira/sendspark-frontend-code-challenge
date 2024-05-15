import { api } from '@/data/api'
import { Candidate } from '@/data/types/candidate'
import { notFound } from 'next/navigation'

interface DashboardProps {
  params: {
    id: string
  }
}

async function getCandidate(id: string): Promise<Candidate | null> {
  try {
    const response = await api.get<Candidate>(`/candidates/${id}`)

    const candidate = response.data

    return candidate
  } catch {
    return null
  }
}

export default async function Dashboard({ params }: DashboardProps) {
  const candidate = await getCandidate(params.id)

  if (!candidate) return notFound()

  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px] grid md:justify-center items-center p-8">
      <h1 className="text-3xl text-center font-bold leading-tight">
        Welcome, {candidate.firstName}!
      </h1>
    </div>
  )
}
