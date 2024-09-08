import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import styled from '@emotion/styled'
import CustomButton from './CustomButton'
import HackathonTimer from './HackathonTimer'
import {useNavigate} from 'react-router-dom'

// Styled components
const StyledCard = styled(Card)({
  // height: '450px',
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  overflow: 'visible',
  height: '500px',
})

const StyledCardMedia = styled(CardMedia)({
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  height: '174px',
})

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px',
  flex: 1,
})

const StyledButton = styled(CustomButton)({
  marginTop: 'auto',
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#45a049',
  },
})

const StatusChip = styled(Chip)(({status}: {status: string}) => ({
  borderRadius: '12px',
  padding: '0 10px',
  backgroundColor: statusColors[status.toLowerCase()] || '#FCF1D2',
  color: textColors[status.toLowerCase()] || 'black',
  margin: '5px 0',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
}))

const statusColors: Record<string, string> = {
  upcoming: '#FCF1D2',
  active: '#D2E5D4',
  past: '#FFDED4',
}

const textColors: Record<string, string> = {
  upcoming: 'black',
  active: 'green',
  past: 'black',
}

interface HackathonCardProps {
  image: string
  status: 'active' | 'upcoming' | 'past'
  timeRemaining?: string
  title: string
  startDate: Date
  endDate: Date
  hackathonId: string
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  title,
  image,
  status,
  endDate,
  startDate,
  hackathonId,
}) => {
  const navigate = useNavigate()

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={3} justifyContent='center'>
        <Grid>
          <StyledCard>
            <StyledCardMedia image={image} title={title} />
            <StyledCardContent>
              <Box sx={{width: '100%'}}>
                <StatusChip
                  label={status.charAt(0).toUpperCase() + status.slice(1)}
                  status={status}
                />
              </Box>
              <Typography
                gutterBottom
                variant='h6'
                component='div'
                sx={{
                  marginTop: '10px',
                  marginBottom: '15px',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '26px',
                  textAlign: 'center',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  WebkitLineClamp: 2,
                  textOverflow: 'ellipsis',
                  height: '52px',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                sx={{
                  marginBottom: '5px',
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '14px',
                  textAlign: 'center',
                }}
              >
                {status === 'past'
                  ? 'Ends On'
                  : status === 'active'
                  ? 'Ends In'
                  : 'Starts In'}
              </Typography>

              <HackathonTimer
                status={status}
                startDate={startDate}
                endDate={endDate}
              />
              <StyledButton
                icon='/charm_circle-tick.svg'
                iconPosition='start'
                variant='contained'
                onClick={() => {
                  navigate(`hackathon/${hackathonId}`)
                }}
              >
                Participate Now
              </StyledButton>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HackathonCard
