import React, {useState, ChangeEvent} from 'react'
import {
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
  SelectChangeEvent,
  Box,
  Grid,
  Paper,
  styled,
  Input,
} from '@mui/material'
import {useHackathonContext} from '../hooks/useHackathonContext'
import {Hackathon} from '../context/HackathonContext'

export interface ChallengeData {
  name: string
  startDate: string
  endDate: string
  description: string
  image: File | null
  level: 'easy' | 'medium' | 'hard'
}

const StyledPaper = styled(Paper)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  boxShadow: theme.shadows[5],
  backgroundColor: '#F8F9FD',
  padding: '25px 40px',
  borderRadius: '0',
}))

const StyledButton = styled(Button)(() => ({
  marginTop: '20px',
  backgroundColor: ' #44924C',
  color: 'white',
  '&:hover': {
    backgroundColor: '#44924C',
  },
}))

const ChallengeDetailsForm: React.FC = () => {
  const {addHackathon} = useHackathonContext()
  const [formData, setFormData] = useState<ChallengeData>({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    image: null,
    level: 'easy',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target
    setFormData((prevData) => ({...prevData, [name]: value}))
  }

  const handleLevelChange = (
    event: SelectChangeEvent<'easy' | 'medium' | 'hard'>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      level: event.target.value as 'easy' | 'medium' | 'hard',
    }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prevData) => ({...prevData, image: file}))
  }

  const handleSubmit = () => {
    const newHackathon: Hackathon = {
      ...formData,
      id: Date.now().toString(),
      status: 'upcoming',
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      image: formData.image ? URL.createObjectURL(formData.image) : '',
    }
    addHackathon(newHackathon)
    setFormData({
      name: '',
      startDate: '',
      endDate: '',
      description: '',
      image: null,
      level: 'easy',
    })
  }

  return (
    <StyledPaper>
      <Typography
        variant='h5'
        gutterBottom
        sx={{
          color: 'black',
          fontFamily: 'Inter',
          fontWeight: '500',
          fontSize: '24px',
          lineHeight: '29px',
          padding: '20px 10px',
          backgroundColor: ' #f0f1f8',
          width: '100%',
        }}
      >
        Challenge Details
      </Typography>
      <Box component='form' noValidate autoComplete='off'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel
              htmlFor='name'
              sx={{
                color: '#333333',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '19px',
              }}
            >
              Challenge Name
            </InputLabel>
            <TextField
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              sx={{
                color: '#B7B7B7',
                marginTop: '20px',
                width: '453px',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              htmlFor='startDate'
              sx={{
                color: '#333333',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '19px',
                marginTop: '25px',
              }}
            >
              Start Date
            </InputLabel>
            <TextField
              id='startDate'
              name='startDate'
              type='date'
              value={formData.startDate}
              onChange={handleChange}
              InputLabelProps={{shrink: true}}
              placeholder='Add start date'
              sx={{
                color: ' #B7B7B7',
                marginTop: '20px',
                width: '453px',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              htmlFor='endDate'
              sx={{
                color: '#333333',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '19px',
                marginTop: '25px',
              }}
            >
              End Date
            </InputLabel>
            <TextField
              id='endDate'
              name='endDate'
              type='date'
              value={formData.endDate}
              onChange={handleChange}
              InputLabelProps={{shrink: true}}
              placeholder='Add end date'
              sx={{
                color: '#B7B7B7',
                marginTop: '20px',
                width: '453px',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              htmlFor='description'
              sx={{
                color: '#333333',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '19px',
                marginTop: '25px',
              }}
            >
              Description
            </InputLabel>
            <TextField
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              sx={{
                color: '#B7B7B7',
                marginTop: '20px',
                width: '553px',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              htmlFor='image'
              sx={{
                color: '#333333',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '19px',
                marginTop: '25px',
              }}
            >
              Image
            </InputLabel>
            <Box display='flex' alignItems='center'>
              <input
                id='image'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                style={{display: 'none'}}
              />
              <label
                htmlFor='image'
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #B7B7B7',
                  borderRadius: '5px',
                  backgroundColor: '#D9D9D9',
                  padding: '5px 50px',
                  marginTop: '20px',
                }}
              >
                <Typography
                  variant='body2'
                  style={{
                    marginRight: '8px',
                    color: '#666666',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Upload
                </Typography>
                <img
                  src='/upload.svg'
                  alt='Upload Icon'
                  style={{width: '24px', height: '24px'}}
                />
              </label>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor='level'
                  sx={{
                    color: '#333333',
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '19px',
                  }}
                >
                  Level Type
                </InputLabel>
                <Select
                  id='level'
                  value={formData.level}
                  onChange={handleLevelChange}
                  sx={{
                    border: '1px solid #B7B7B7',
                    borderRadius: '4px',
                    marginTop: '40px',
                    width: '453px',
                  }}
                  input={<Input name='level' />}
                >
                  <MenuItem value='easy'>Easy</MenuItem>
                  <MenuItem value='medium'>Medium</MenuItem>
                  <MenuItem value='hard'>Hard</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <StyledButton
          variant='contained'
          color='primary'
          onClick={handleSubmit}
        >
          Create Challenge
        </StyledButton>
      </Box>
    </StyledPaper>
  )
}

export default ChallengeDetailsForm
