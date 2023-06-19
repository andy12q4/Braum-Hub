import React from 'react';
import styled from 'styled-components';
import brainImage from '../images/brain.png'; // Update the path to the brain image

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
  background-color: #10002B; // Updated primary color
  padding: 50px;
  font-family: Arial, sans-serif;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

class Homepage extends React.Component {
  state = {
    projects: [
      {
        title: 'Project 1',
        imageUrl: 'https://example.com/project1-image.jpg',
        description: 'Description 1',
      },
      {
        title: 'Project 2',
        imageUrl: 'https://example.com/project2-image.jpg',
        description: 'Description 2',
      },
      {
        title: 'Project 3',
        imageUrl: 'https://example.com/project3-image.jpg',
        description: 'Description 3',
      },
    ],
  };

  render() {
    return (
      <Container>
        <h1>Welcome to Our Student Projects Showcase</h1>
        <ImageContainer>
          <Image src={brainImage} alt="Brain" />
        </ImageContainer>
        <div className="projects-container">
          {this.state.projects.map((project, index) => (
            <div className="project-card" key={index}>
              <Image src={project.imageUrl} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default Homepage;
