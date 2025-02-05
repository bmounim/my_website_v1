import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // A helper function to render the appropriate content
  const renderContent = () => {
    if (toggle === 'all') {
      return projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ));
    }
    if (toggle === 'data science classique') {
      // Assuming the project data uses "data science" as category,
      // we filter based on that while displaying the label "DATA SCIENCE CLASSIQUE".
      return projects
        .filter((item) => item.category === 'Data Science classique')
        .map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ));
    }
    if (toggle === 'gen ai') {
      // Render GEN AI projects based on the category "gen ai"
      return projects
        .filter((item) => item.category === 'gen ai')
        .map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ));
    }
    // For "data analysis" or "data engineering", display Coming Soon text
    if (toggle === 'data analysis' || toggle === 'data engineering') {
      return (
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'white',
            fontSize: '1.5rem',
            padding: '2rem 0'
          }}
        >
          Coming Soon
        </div>
      );
    }
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc></Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'data science classique' ? (
            <ToggleButton
              active
              value="data science classique"
              onClick={() => setToggle('data science classique')}
            >
              DATA SCIENCE CLASSIQUE
            </ToggleButton>
          ) : (
            <ToggleButton
              value="data science classique"
              onClick={() => setToggle('data science classique')}
            >
              DATA SCIENCE CLASSIQUE
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'gen ai' ? (
            <ToggleButton
              active
              value="gen ai"
              onClick={() => setToggle('gen ai')}
            >
              GEN AI
            </ToggleButton>
          ) : (
            <ToggleButton
              value="gen ai"
              onClick={() => setToggle('gen ai')}
            >
              GEN AI
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'data analysis' ? (
            <ToggleButton
              active
              value="data analysis"
              onClick={() => setToggle('data analysis')}
            >
              DATA ANALYSIS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="data analysis"
              onClick={() => setToggle('data analysis')}
            >
              DATA ANALYSIS
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'data engineering' ? (
            <ToggleButton
              active
              value="data engineering"
              onClick={() => setToggle('data engineering')}
            >
              DATA ENGINEERING
            </ToggleButton>
          ) : (
            <ToggleButton
              value="data engineering"
              onClick={() => setToggle('data engineering')}
            >
              DATA ENGINEERING
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>{renderContent()}</CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
