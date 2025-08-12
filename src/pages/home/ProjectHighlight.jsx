import { Container } from "./Home";
import {
  DesignContainer,
  StyledDesign,
  Image,
  Caption,
  ProjectName,
  StyledViewProject,
  DesignContainer2,
} from "./styles/productHighlight";

export function ProjectHighlight() {
  return (
    <Container>
      <DesignContainer>
        <StyledDesign to="web-design">
          <picture>
            <source
              srcSet="/home/desktop/image-web-design-large.jpg"
              media="(min-width: 1063px)"
            />
            <source
              srcSet="/home/tablet/image-web-design.jpg"
              media="(min-width: 601px)"
            />

            <Image src="/home/mobile/image-web-design.jpg" alt="" />
          </picture>
          <Caption>
            <ProjectName>Web Design</ProjectName>
            <StyledViewProject>
              View Projects{" "}
              <span>
                <img src="/shared/desktop/icon-right-arrow.svg" />
              </span>
            </StyledViewProject>
          </Caption>
        </StyledDesign>
        <DesignContainer2>
          <StyledDesign to="app-design">
            <picture>
              <source
                srcSet="/home/desktop/image-app-design.jpg"
                media="(min-width: 1063px)"
              />
              <source
                srcSet="/home/tablet/image-app-design.jpg"
                media="(min-width: 601px) "
              />

              <Image src="/home/mobile/image-app-design.jpg" alt="" />
            </picture>
            <Caption>
              <ProjectName>App Design</ProjectName>
              <StyledViewProject>
                View Projects{" "}
                <span>
                  <img src="/shared/desktop/icon-right-arrow.svg" />
                </span>
              </StyledViewProject>
            </Caption>
          </StyledDesign>
          <StyledDesign to="graphic-design">
            <picture>
              <source
                srcSet="/home/desktop/image-graphic-design.jpg"
                media="(min-width: 1062px)"
              />
              <source
                srcSet="/home/tablet/image-graphic-design.jpg"
                media="(min-width: 601px)"
              />

              <Image src="/home/mobile/image-graphic-design.jpg" alt="" />
            </picture>
            <Caption>
              <ProjectName>Graphic Design</ProjectName>
              <StyledViewProject>
                View Projects{" "}
                <span>
                  <img src="/shared/desktop/icon-right-arrow.svg" />
                </span>
              </StyledViewProject>
            </Caption>
          </StyledDesign>
        </DesignContainer2>
      </DesignContainer>
    </Container>
  );
}
