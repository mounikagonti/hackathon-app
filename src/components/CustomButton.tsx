import React from 'react'
import {Button as MuiButton, ButtonProps as MuiButtonProps} from '@mui/material'
import styled from '@emotion/styled'

interface CustomButtonProps extends MuiButtonProps {
  icon?: string
  iconPosition?: 'start' | 'end'
}

const StyledCustomButton = styled(MuiButton)({
  width: '208px',
  height: '47px',
  padding: '15px 18px 14px 18px',
  borderRadius: '10px',
  fontSize: '18px',
  color: '#003145',
  textTransform: 'capitalize' as const,
  fontWeight: 600,
  opacity: 1,
  '&:hover': {
    opacity: 0.8,
  },
})

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  icon,
  iconPosition = 'start',
  ...props
}) => {
  return (
    <StyledCustomButton
      {...props}
      startIcon={
        icon && iconPosition === 'start' ? <img src={icon} alt='icon' /> : null
      }
      endIcon={
        icon && iconPosition === 'end' ? <img src={icon} alt='icon' /> : null
      }
    >
      {children}
    </StyledCustomButton>
  )
}

export default CustomButton
