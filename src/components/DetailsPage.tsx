import React from 'react'
import {Box, Typography, Button, Paper, AppBar, Tabs, Tab} from '@mui/material'
import {styled} from '@mui/material/styles'
import CustomButton from './CustomButton'

const StyledPaper = styled(Paper)(() => ({
  position: 'relative',
}))

const IconWrapper = styled('img')({
  width: 15,
  height: 15,
  marginRight: '15px',
})

const TextWithIcon = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FFCE5C',
  borderRadius: '5px',
  maxWidth: '600px',
  padding: '10px 20px',
})

const ActionButton = styled(Button)(({theme}) => ({
  marginRight: theme.spacing(1),
}))

const StyledButton = styled(CustomButton)({
  backgroundColor: 'white',
  color: '#003145',
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'Inter',
  marginTop: '25px',
  '&:hover': {
    backgroundColor: 'white',
  },
})

const ButtonWrapper = styled(Box)({
  display: 'flex',
  gap: '10px',
})

const OverviewTabs = styled(Tabs)({
  borderBottom: '1px solid #ddd',
  color: 'black',
})

const OverviewTab = styled(Tab)({
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'Poppins',
  color: 'black',
})

const MainWrapper = styled(Box)({})

const TopSection = styled(Box)({
  backgroundColor: '#0A2647',
  color: 'white',
})

const MiddleSection = styled(Box)({
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
})

const BottomSection = styled(Box)({
  backgroundColor: 'white',
  color: 'black',
})

const DetailsPage: React.FC = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static' color='default'></AppBar>
      <StyledPaper elevation={3}>
        <MainWrapper>
          <TopSection sx={{padding: '66px 20px'}}>
            <Box>
              <TextWithIcon>
                <IconWrapper src='/clock.svg' alt='Icon' />
                <Typography
                  variant='body1'
                  sx={{
                    color: 'black',
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '12px',
                    fontFamily: 'inter',
                  }}
                >
                  Starts on 17th Jun'22 09:00 PM (India Standard Time)
                </Typography>
              </TextWithIcon>
            </Box>
            <Box sx={{padding: '16px 0'}}>
              <Typography
                variant='h4'
                component='h1'
                gutterBottom
                sx={{
                  fontSize: '40px',
                  fontWeight: '600',
                  lineHeight: '48px',
                  fontFamily: 'Poppins',
                }}
              >
                Data Sprint 72 - Butterfly Identification
              </Typography>
              <Typography
                variant='subtitle1'
                gutterBottom
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  fontFamily: 'inter',
                  marginTop: '25px',
                }}
              >
                Identify the class to which each butterfly belongs to
              </Typography>
              <StyledButton
                icon='/carbon_skill-level-basic.svg'
                iconPosition='start'
                variant='contained'
              >
                Easy
              </StyledButton>
            </Box>
          </TopSection>

          <MiddleSection
            sx={{
              padding: '16px',
              borderBottom: '1px solid black',
            }}
          >
            <OverviewTabs value={0} aria-label='overview tab'>
              <OverviewTab label='Overview' />
            </OverviewTabs>
            <ButtonWrapper>
              <ActionButton
                variant='contained'
                sx={{
                  color: 'white',
                  backgroundColor: '#44924C',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'Poppins',
                }}
              >
                Edit
              </ActionButton>
              <ActionButton
                variant='outlined'
                color='error'
                sx={{
                  border: '1.2px solid #DC1414',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'Poppins',
                }}
              >
                Delete
              </ActionButton>
            </ButtonWrapper>
          </MiddleSection>

          <BottomSection sx={{padding: '16px'}}>
            <Typography
              paragraph
              sx={{
                color: ' #64607D',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: 'Poppins',
              }}
            >
              Butterflies are the adult flying stage of certain insects
              belonging to an order or group called Lepidoptera. The word
              "Lepidoptera" means "scaly wings" in Greek. This name perfectly
              suits the insects in this group because their wings are covered
              with thousands of tiny scales overlapping in rows.
            </Typography>

            <Typography
              paragraph
              sx={{
                color: ' #64607D',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: 'Poppins',
              }}
            >
              An agency of the Governmental Wildlife Conservation is planning to
              implement an automated system based on computer vision so that it
              can identify butterflies based on captured images. As a consultant
              for this project, you are responsible for developing an efficient
              model.
            </Typography>

            <Typography
              paragraph
              sx={{
                color: ' #64607D',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: 'Poppins',
              }}
            >
              Your Task is to build an Image Classification Model using CNN that
              classifies to which class of weather each Image belongs to.
            </Typography>
          </BottomSection>
        </MainWrapper>
      </StyledPaper>
    </Box>
  )
}

export default DetailsPage
