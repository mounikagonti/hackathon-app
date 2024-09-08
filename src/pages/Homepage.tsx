import ChallengeExplorer from '../components/ChallengeExplorer'
import Hero from '../components/Hero'
import ParticipationReasons from '../components/ParticipationReasons'
import Stats from '../components/Stats'

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ParticipationReasons />
      <ChallengeExplorer />
    </>
  )
}

export default Homepage
