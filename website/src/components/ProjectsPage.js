import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 50px 0;
  align-items: center;
  background-color: #f2f2f2;
  padding: 50px;
  font-family: Arial, sans-serif;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ProjectsPage = () => {
  return (
    <Container>
      <h1>Projects Page</h1>
      <ImageContainer>
        <Image src="https://source.unsplash.com/random?coding" alt="Full Width Image" />
      </ImageContainer>
      {/* Add your projects content here */}
    </Container>
  );
};

export default ProjectsPage;
