import { Container } from "../Home";
import styled from "styled-components";

import { Overlay } from "../../designPage/Design";
import {
  DesignContainer,
  StyledDesign,
  Image,
  Caption,
  ProjectName,
  StyledViewProject,
  DesignContainer2,
} from "../styles/productHighlight";

/*---------------- STYLES -----------------*/

const ImageContainerOverlay = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  transition: all 2s ease-in-out;
`;

export function ProjectHighlight() {
  return (
    <Container>
      <DesignContainer>
        <StyledDesign to="web-design">
          <ImageContainerOverlay>
            <picture>
              <source
                srcSet="/home/desktop/image-web-design-large.jpg"
                media="(min-width: 1063px)"
              />
              <source
                srcSet="/home/tablet/image-web-design.jpg"
                media="(min-width: 601px)"
              />

              <Image
                src="/home/mobile/image-web-design.jpg"
                alt="web design illustration"
              />
            </picture>
            <Overlay></Overlay>
          </ImageContainerOverlay>
          <Caption>
            <ProjectName>Web Design</ProjectName>
            <StyledViewProject>
              View Projects{" "}
              <span>
                <img
                  src="/shared/desktop/icon-right-arrow.svg"
                  alt="arrow icon"
                />
              </span>
            </StyledViewProject>
          </Caption>
        </StyledDesign>
        <DesignContainer2>
          <StyledDesign to="app-design">
            <ImageContainerOverlay>
              <picture>
                <source
                  srcSet="/home/desktop/image-app-design.jpg"
                  media="(min-width: 1063px)"
                />
                <source
                  srcSet="/home/tablet/image-app-design.jpg"
                  media="(min-width: 601px) "
                />

                <Image
                  src="/home/mobile/image-app-design.jpg"
                  alt="app design illustration"
                />
              </picture>
              <Overlay></Overlay>
            </ImageContainerOverlay>
            <Caption>
              <ProjectName>App Design</ProjectName>
              <StyledViewProject>
                View Projects{" "}
                <span>
                  <img
                    src="/shared/desktop/icon-right-arrow.svg"
                    alt="arrow icon"
                  />
                </span>
              </StyledViewProject>
            </Caption>
          </StyledDesign>
          <StyledDesign to="graphic-design">
            <ImageContainerOverlay>
              <picture>
                <source
                  srcSet="/home/desktop/image-graphic-design.jpg"
                  media="(min-width: 1062px)"
                />
                <source
                  srcSet="/home/tablet/image-graphic-design.jpg"
                  media="(min-width: 601px)"
                />

                <Image
                  src="/home/mobile/image-graphic-design.jpg"
                  alt="graphic design illustration"
                />
              </picture>
              <Overlay></Overlay>
            </ImageContainerOverlay>
            <Caption>
              <ProjectName>Graphic Design</ProjectName>
              <StyledViewProject>
                View Projects{" "}
                <span>
                  <img
                    src="/shared/desktop/icon-right-arrow.svg"
                    alt="arrow icon"
                  />
                </span>
              </StyledViewProject>
            </Caption>
          </StyledDesign>
        </DesignContainer2>
      </DesignContainer>
    </Container>
  );
}
