import React, {useEffect, useState} from 'react'
import {Typography, Box, Grid} from '@mui/material'

type TimerProps = {
  status: 'active' | 'upcoming' | 'past'
  startDate: Date
  endDate: Date
}

const HackathonTimer: React.FC<TimerProps> = ({status, startDate, endDate}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const now = new Date()

    let difference = 0

    if (status === 'active' || status === 'upcoming') {
      difference =
        status === 'active'
          ? endDate.getTime() - now.getTime()
          : startDate.getTime() - now.getTime()
    }

    return difference > 0 ? difference : 0
  }
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft), 1000)
    return () => clearInterval(timer)
  })

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      {status === 'past' ? (
        <Typography variant='body1'>{endDate.toDateString()}</Typography>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography
              variant='h5'
              component='div'
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {Math.floor(timeLeft / 86400000)}{' '}
              <Typography variant='caption'>Days</Typography>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  transform: 'translateY(10%)',
                  fontWeight: 600,
                }}
              >
                :
              </span>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant='h5'
              component='div'
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {Math.floor((timeLeft % 86400000) / 3600000)}{' '}
              <Typography variant='caption'>Hours</Typography>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  transform: 'translateY(10%)',
                  fontWeight: 600,
                }}
              >
                :
              </span>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant='h5'
              component='div'
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {Math.floor((timeLeft % 3600000) / 60000)}{' '}
              <Typography variant='caption'>Minutes</Typography>
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

export default HackathonTimer
