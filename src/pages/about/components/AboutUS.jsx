import styled from "styled-components";
import { Heading, Paragraph } from "../../home/styles/heroSecion.styled";
import { Source } from "./Layout";

const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("/home/desktop/bg-pattern-hero-home.svg") var(--color-peach);
  background-position: left -100px;
  background-repeat: no-repeat;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 600px) {
    max-height: 946px;
    flex-direction: column;
    border-radius: 0;
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    max-height: 632px;
    max-width: 786px;
    margin: 0 auto;
    flex-direction: column;
  }
`;

const StyledImage = styled.picture`
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 600px) {
      height: 320px;
      width: 100vw;
    }
    @media (min-width: 601px) and (max-width: 1062px) {
      width: 100vw;
    }
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
  color: white;

  @media (max-width: 600px) {
    order: 1;
    height: 50%;
    text-align: center;
    padding: 4rem 1.5rem;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    order: 1;
    height: 50%;
    text-align: center;
  }
`;

const AboutText = styled(Paragraph)`
  max-width: 458px;

  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 573px;
    margin: 0 auto;
  }
`;

export function AboutUsSection() {
  return (
    <StyledSection>
      <AboutContent>
        <Heading as="h1">About us</Heading>
        <AboutText>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </AboutText>
      </AboutContent>
      <StyledImage>
        <Source
          srcset="/about/desktop/image-about-hero.jpg"
          media="(min-width: 1063px)"
        />

        <Source
          srcset="/about/tablet/image-about-hero.jpg"
          media="(min-width: 601px)"
        />

        <img src="/about/mobile/image-about-hero.jpg" alt="Responsive Image" />
      </StyledImage>
    </StyledSection>
  );
}
