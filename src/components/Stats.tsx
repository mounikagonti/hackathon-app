import {Container, styled} from '@mui/system'
import {Box, Typography} from '@mui/material'

const StatsBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#fff',
}))

const StatItemBox = styled(Box)<{index?: number}>(() => ({
  textAlign: 'center',
  position: 'relative',
  '&:not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    right: '-50%',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '80%',
    width: '2px',
    backgroundColor: '#fff',
  },
}))
const StatIcon = styled('img')({
  marginRight: '22px',
})
const StatsWrapper = styled(Box)(() => ({
  backgroundColor: '#002A3B',
  padding: '72px 0',
  borderTop: '1px solid gray',
}))

function Stats() {
  return (
    <StatsWrapper>
      <Container>
        <StatsBox>
          <StatItemBox>
            <Box display='flex' alignItems='center'>
              <StatIcon src='/stat1.svg' alt='AI model submissions' />
              <Box textAlign='left'>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontWeight: 700,
                    lineHeight: '20px',
                    textAlign: 'left',
                    marginBottom: '8px',
                  }}
                >
                  100K+
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    textAlign: 'left',
                  }}
                >
                  AI model submissions
                </Typography>
              </Box>
            </Box>
          </StatItemBox>
          <StatItemBox>
            <Box display='flex' alignItems='center'>
              <StatIcon src='/stat2.svg' alt='Data Scientists' />
              <Box textAlign='left'>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontWeight: 700,
                    lineHeight: '20px',
                    textAlign: 'left',
                    marginBottom: '8px',
                  }}
                >
                  50K+
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    textAlign: 'left',
                  }}
                >
                  Data Scientists
                </Typography>
              </Box>
            </Box>
          </StatItemBox>
          <StatItemBox>
            <Box display='flex' alignItems='center'>
              <StatIcon src='/stat3.svg' alt='AI Challenges hosted' />
              <Box textAlign='left'>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '24px',
                    fontWeight: 700,
                    lineHeight: '20px',
                    textAlign: 'left',
                    marginBottom: '8px',
                  }}
                >
                  100+
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    textAlign: 'left',
                  }}
                >
                  AI Challenges hosted
                </Typography>
              </Box>
            </Box>
          </StatItemBox>
        </StatsBox>
      </Container>
    </StatsWrapper>
  )
}

export default Stats
