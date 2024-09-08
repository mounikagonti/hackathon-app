import React from 'react'
import {Typography, Box, Container} from '@mui/material'
import Grid from '@mui/material/Grid2'
import iconOne from '/carbon_notebook-reference.svg'
import iconTwo from '/Robot.svg'
import iconThree from '/Vector.svg'
import iconFour from '/IdentificationCard.svg'
import styled from '@emotion/styled'

interface Reason {
  icon: string
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    icon: iconOne,
    title: 'Prove your skills',
    description:
      'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.',
  },
  {
    icon: iconTwo,
    title: 'Learn from community',
    description:
      'One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.',
  },
  {
    icon: iconThree,
    title: 'Challenge yourself',
    description:
      'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.',
  },
  {
    icon: iconFour,
    title: 'Earn recognition',
    description:
      'You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.',
  },
]

const ParticipationReasonsWrapper = styled(Box)(() => ({
  backgroundColor: '#fff',
  padding: '20px 0',
}))

const ParticipationReasons: React.FC = () => {
  return (
    <ParticipationReasonsWrapper>
      <Container>
        <Box sx={{bgcolor: 'background.paper', py: 8, marginBottom: '82px'}}>
          <Typography
            variant='h4'
            component='h2'
            align='center'
            gutterBottom
            sx={{
              fontFamily: 'Poppins',
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '20px',
              textAlign: 'center',
              marginBottom: '82px',
            }}
          >
            Why Participate in{' '}
            <span
              style={{
                color: '#0FA958',
              }}
            >
              AI Challenges?
            </span>
          </Typography>
          <Grid
            container
            spacing={{xs: 2, md: 3}}
            columns={{xs: 4, sm: 8, md: 8}}
          >
            {reasons.map((reason, index) => (
              <Grid key={index} size={{xs: 2, sm: 4, md: 4}}>
                <Box
                  sx={{
                    backgroundColor: '#F8F9FD',
                    width: '542px',
                    height: '276px',
                    borderRadius: '20px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Box>
                    <img src={reason.icon} alt={reason.title} />
                  </Box>
                  <Typography
                    variant='h6'
                    component='h3'
                    align='left'
                    gutterBottom
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '50px',
                      letterSpacing: '-0.03em',
                      textAlign: 'left',
                    }}
                  >
                    {reason.title}
                  </Typography>

                  <Typography
                    variant='body2'
                    align='left'
                    sx={{
                      fontFamily: 'Poppins',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      letterSpacing: '-0.02em',
                      textAlign: 'left',
                      color: '#64607D',
                    }}
                  >
                    {reason.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ParticipationReasonsWrapper>
  )
}

export default ParticipationReasons
