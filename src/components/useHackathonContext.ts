import {useContext} from 'react'
import {HackathonContext} from '../context/HackathonContext'

export const useHackathonContext = () => {
  const context = useContext(HackathonContext)
  if (!context)
    throw new Error(
      'useHackathonContext must be used within a HackathonProvider'
    )
  return context
}
