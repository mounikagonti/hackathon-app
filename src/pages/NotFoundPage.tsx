import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you're looking for doesn't exist.
      </Typography>
      <Button component={Link} to="/hackathons" variant="contained" color="primary">
        Go Back to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
