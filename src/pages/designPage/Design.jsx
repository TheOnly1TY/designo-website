import { Link, useParams } from "react-router-dom";

import {
  Heading,
  Paragraph,
  StyledOverlay,
} from "../home/styles/heroSecion.styled";
import { Description } from "../home/styles/CoreValues.styled";
import { MainFooter } from "../../ui/footer/MainFooter";
import { Container } from "../Location";
import Data from "./designData.json";
import Navbar from "../../ui/Navbar";
import {
  Caption,
  Image,
  ProjectName,
  StyledViewProject,
} from "../home/styles/productHighlight";
import {
  Button,
  HeaderContainer,
  ProjectCaption,
  ProjectImage,
  ProjectsList,
  StyledHeading,
  StyledProjectItem,
  StyledSection,
  Title,
} from "./design.styled";
import styled from "styled-components";

const designButtons = [
  {
    illustration: "image-app-design.jpg",
    name: "App Design",
    pathName: "app-design",
  },
  {
    illustration: "image-web-design.jpg",
    name: "Web Design",
    pathName: "web-design",
  },
  {
    illustration: "image-graphic-design.jpg",
    name: "Graphic Design",
    pathName: "graphic-design",
  },
];

const Btn = styled(Link)`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
`;

export const Overlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(231, 129, 107, 0.5);
  }
  transition: all 0.1s ease-in-out;
`;

export function Design() {
  const { designType } = useParams();

  const designData = Data[designType];
  const remainButton = designButtons.filter(
    (button) => button.pathName !== designType
  );
  return (
    <section>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>
        <HeaderContainer>
          <StyledHeading type={designData.title}>
            <Heading as="h1">{designData.title}</Heading>
            <Paragraph>{designData.subtitle}</Paragraph>
          </StyledHeading>
        </HeaderContainer>

        <StyledSection>
          <ProjectsList>
            {designData?.projects.map((project) => (
              <StyledProjectItem key={project.name}>
                <ProjectImage
                  src={project.image}
                  alt={`${project.name}_image`}
                />
                <ProjectCaption>
                  <Title>{project.name}</Title>
                  <Description>{project.description}</Description>
                </ProjectCaption>
              </StyledProjectItem>
            ))}
          </ProjectsList>
          <Button>
            {remainButton.map((button, id) => (
              <Btn to={`/${button.pathName}`} key={id}>
                <picture>
                  <source
                    srcSet={`/home/desktop/${button.illustration}`}
                    media="(min-width: 1063px)"
                  />
                  <source
                    srcSet={`/home/tablet/${button.illustration}`}
                    media="(min-width: 601px) "
                  />

                  <Image
                    src={`/home/mobile/${button.illustration}`}
                    alt="Design Image"
                  />
                </picture>
                <Caption>
                  <ProjectName>{button.name}</ProjectName>
                  <StyledViewProject>
                    View Projects{" "}
                    <span>
                      <img src="/shared/desktop/icon-right-arrow.svg" />
                    </span>
                  </StyledViewProject>
                </Caption>
                <Overlay></Overlay>
              </Btn>
            ))}
          </Button>
        </StyledSection>
      </main>
      <footer>
        <MainFooter />
      </footer>
    </section>
  );
}
