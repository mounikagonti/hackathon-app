import React, {useState} from 'react'
import {
  Box,
  Chip,
  Typography,
} from '@mui/material'
import styled from '@emotion/styled'
import {Container} from '@mui/system'
import FilterSearch from './FilterSearch'
import FilterDropdown from './FilterDropdown'
import useDebounce from '../hooks/useDebounce'
import HackathonCard from './HackathonCard'
import {useHackathonContext} from '../hooks/useHackathonContext'

const ExploreChallengesWrapper = styled(Box)(() => ({}))
const ExploreHackathon = styled(Box)(() => ({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  background: '#003145',
  padding: '50px 0',
}))

const ExploreSearch = styled(Box)(() => ({
  background: '#002A3B',
  padding: '0 0 100px 0',
}))


const ChallengeExplorer: React.FC = () => {
  const {hackathons} = useHackathonContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedValues, setSelectedValues] = useState<string[]>([])
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const filteredHackathons =
    debouncedSearchTerm || selectedValues.length > 0
      ? hackathons.filter((hackathon) => {
          const matchesStatus =
            selectedValues.length === 0 ||
            selectedValues.includes(hackathon.status)
          const matchesSearchTerm = hackathon.name
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase())
          return matchesStatus && matchesSearchTerm
        })
      : hackathons

  return (
    <ExploreChallengesWrapper>
      <ExploreSearch>
        <Container>
          <Box>
            <Typography
              variant='h4'
              component='h2'
              align='center'
              gutterBottom
              sx={{
                fontFamily: 'Poppins',
                fontSize: '28px',
                fontWeight: 600,
                lineHeight: '40px',
                textAlign: 'center',
                color: 'white',
                py: 8,
              }}
            >
              Explore Challenges
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                justifyContent: 'center',
              }}
            >
              <FilterSearch
                search={searchTerm}
                onSearchChange={(e) => setSearchTerm(e.target.value)}
              />
              <FilterDropdown
                selectedValues={selectedValues}
                onChange={setSelectedValues}
              />
            </Box>
          </Box>
          <Box sx={{display: 'flex', gap: '8px'}}>
            {selectedValues.map((value, index) => (
              <Chip
                key={index}
                label={value}
                onDelete={() =>
                  setSelectedValues(
                    selectedValues.filter((_, i) => i !== index)
                  )
                }
                sx={{
                  width: '119px',
                  height: '40px',
                  borderRadius: '30px',
                  backgroundColor: '#F8F9FD7D',
                  color: '#fff',
                  margin: '20px 0',
                  '& .MuiChip-deleteIcon': {
                    color: '#fff',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </ExploreSearch>
      <Container>
        <ExploreHackathon>
          {filteredHackathons?.map((challenge) => (
            <HackathonCard
              key={challenge.id}
              title={challenge.name}
              status={challenge?.status}
              startDate={challenge.startDate} 
              endDate={challenge.endDate}
              image={challenge.image}
              hackathonId={challenge.id}
            />
          ))}
        </ExploreHackathon>
      </Container>
    </ExploreChallengesWrapper>
  )
}

export default ChallengeExplorer
