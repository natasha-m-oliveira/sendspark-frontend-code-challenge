export interface Candidate {
  id: string
  firstName: string
  lastName: string
  company: string
  jobTitle: string | null
  workEmail: string
  password: string
  createdAt: Date
  updatedAt: Date
}
