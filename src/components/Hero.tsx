import React from 'react'
import {Box, Typography, Container} from '@mui/material'
import CustomButton from './CustomButton'
import {styled} from '@mui/system'
import {useNavigate} from 'react-router-dom'


const HeroBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.background.default,
  color: 'white',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}))

const HeroTitle = styled(Typography)(() => ({
  fontFamily: 'Poppins',
  fontSize: '48px',
  fontWeight: 600,
  textAlign: 'left',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-50px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '7px',
    height: '85%',
    background: '#FFCE5C',
  },
}))

const HeroDescription = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 500,
  textAlign: 'left',
  margin: '38px 0',
  lineHeight: '28px',
}))

const RocketImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
})

const Hero: React.FC = () => {
  const navigate = useNavigate()
  
  return (
    <HeroBox>
      <Container sx={{mt: 4, mb: 4}}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Box maxWidth='643px'>
            <HeroTitle variant='h3' gutterBottom>
              Accelerate Innovation with Global AI Challenges
            </HeroTitle>
            <HeroDescription variant='body1' paragraph>
              AI Challenges at DPHI simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </HeroDescription>
            <CustomButton
              onClick={() => {
                navigate('/create-hackathon')
              }}
              variant='contained'
              color='secondary'
            >
              Create Challenge
            </CustomButton>
          </Box>
          <Box>
            <RocketImage src='/rocket.svg' alt='Right Rocket' />
          </Box>
        </Box>
      </Container>
    </HeroBox>
  )
}

export default Hero
