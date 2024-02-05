import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material @emotion/react @emotion/styled';

const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
      Throughout my career, I've had the privilege of working on diverse projects. From VL Resorts  and Gelato Delight, each one has been a learning journey, and I take pride in delivering solutions that make a difference.
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">
            Website of VL Resorts
          </Typography>
          <Typography>
            POS System of Gelato Delight
          </Typography>
        </CardContent>
      </Card>
      {/* Add more Card components for additional projects */}
    </Container>
  );
};

export default Projects;