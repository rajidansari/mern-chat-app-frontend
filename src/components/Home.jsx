import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(45deg, #f3f4f6 30%, #ffffff 90%)',
});

const Home = () => {
  return (
    <StyledContainer maxWidth="sm">
      <Box textAlign="center" py={4}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            color: '#1a365d',
            mb: 3
          }}
        >
          Welcome to ChatApp
        </Typography>
        
        <Typography 
          variant="h6" 
          color="textSecondary" 
          paragraph
          sx={{ mb: 4 }}
        >
          Connect with friends and family through instant messaging
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Button 
            variant="contained"
            size="large"
            sx={{
              mr: 2,
              backgroundColor: '#2c5282',
              '&:hover': {
                backgroundColor: '#1a365d',
              }
            }}
          >
            Sign In
          </Button>
          <Button 
            variant="outlined"
            size="large"
            sx={{
              color: '#2c5282',
              borderColor: '#2c5282',
              '&:hover': {
                borderColor: '#1a365d',
                color: '#1a365d',
              }
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default Home;