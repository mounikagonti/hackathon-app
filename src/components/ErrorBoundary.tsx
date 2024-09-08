import React, {Component, ReactNode} from 'react'
import {Container, Typography, Button} from '@mui/material'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {hasError: true}
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  handleReload = () => {
    this.setState({hasError: false})
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container sx={{textAlign: 'center', mt: 4}}>
          <Typography variant='h3' gutterBottom>
            Something went wrong.
          </Typography>
          <Typography variant='body1' gutterBottom>
            An unexpected error occurred. Please try again later.
          </Typography>
          <Button
            onClick={this.handleReload}
            variant='contained'
            color='primary'
          >
            Reload Page
          </Button>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
