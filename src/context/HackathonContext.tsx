import React, {createContext, useState, useEffect} from 'react'

export type Hackathon = {
  id: string
  name: string
  startDate: Date
  endDate: Date
  description: string
  image: string
  level: 'easy' | 'medium' | 'hard'
  status: 'active' | 'upcoming' | 'past'
}

type HackathonContextType = {
  hackathons: Hackathon[]
  addHackathon: (hackathon: Hackathon) => void
  updateHackathon: (id: string, updatedHackathon: Partial<Hackathon>) => void
  removeHackathon: (id: string) => void
  getHackathonById: (id: string) => Hackathon | undefined
}

export const HackathonContext = createContext<HackathonContextType | undefined>(
  undefined
)

export const HackathonProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([])

  useEffect(() => {
    // Default hackathons
    const defaultHackathons: Hackathon[] = [
      {
        id: '1',
        name: 'Data Science Bootcamp - Graded Datathon',
        startDate: new Date('2024-09-22'),
        endDate: new Date('2024-09-22'),
        description: 'A graded datathon for data science enthusiasts.',
        image:
          'https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        level: 'medium',
        status: 'upcoming',
      },
      {
        id: '2',
        name: 'Data Sprint 72 - Butterfly Identification',
        startDate: new Date('2024-09-24'),
        endDate: new Date('2024-05-16'),
        description: 'Identify butterfly species using machine learning.',
        image:
          'https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        level: 'hard',
        status: 'upcoming',
      },
      {
        id: '3',
        name: 'Data Sprint 71 - Weather Recognition',
        startDate: new Date('2024-09-17'),
        endDate: new Date('2024-09-17'),
        description: 'Predict weather patterns using machine learning.',
        image:
          'https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        level: 'easy',
        status: 'active',
      },
      {
        id: '4',
        name: 'Data Sprint 70-Airline Passenger Satisfaction',
        startDate: new Date('2024-09-27'),
        endDate: new Date('2024-09-27'),
        description: 'Analyze airline passenger satisfaction using data.',
        image:
          'https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        level: 'medium',
        status: 'active',
      },
      {
        id: '5',
        name: 'Engineering Graduates Employment Outcomes',
        startDate: new Date('2024-05-16'),
        endDate: new Date('2024-05-16'),
        description: 'Study employment outcomes for engineering graduates.',
        image:
          'https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        level: 'hard',
        status: 'past',
      },
      {
        id: '6',
        name: 'Travel Insurance Claim Prediction',
        startDate: new Date('2024-05-16'),
        endDate: new Date('2024-05-16'),
        description: 'Predict travel insurance claims using machine learning.',
        image:
          'https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        level: 'easy',
        status: 'past',
      },
    ]
    setHackathons(defaultHackathons)
  }, [])

  const addHackathon = (hackathon: Hackathon) => {
    setHackathons([...hackathons, hackathon])
  }

  const updateHackathon = (
    id: string,
    updatedHackathon: Partial<Hackathon>
  ) => {
    setHackathons(
      hackathons.map((h) => (h.id === id ? {...h, ...updatedHackathon} : h))
    )
  }

  const removeHackathon = (id: string) => {
    setHackathons(hackathons.filter((h) => h.id !== id))
  }

  const getHackathonById = (id: string) => {
    return hackathons.find((h) => h.id === id)
  }

  return (
    <HackathonContext.Provider
      value={{hackathons, addHackathon, updateHackathon, removeHackathon, getHackathonById}}
    >
      {children}
    </HackathonContext.Provider>
  )
}
