
import { Inter } from 'next/font/google'
import { ExperinceBar } from '@/components/ExperienceBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      <div className="container">
        <ExperinceBar />
      </div>
  
  )
}
