import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../../ui/Navbar";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { ProjectHighlight } from "./ProjectHighlight";
import { MainFooter } from "../../ui/footer/MainFooter";
import {
  BrandImage,
  Button,
  Heading,
  HeroContent,
  HeroSection,
  Paragraph,
  StyledOverlay,
} from "./styles/heroSecion.styled";

export const Container = styled.div`
  @media (min-width: 601px) and (max-width: 1062px) {
    margin: 0 1.5rem;
  }
  @media (min-width: 1063px) {
    margin: 0 2rem;
  }
`;

const Main = styled.main`
  @media (min-width: 601px) and (max-width: 1062px) {
    margin-bottom: 10rem;
  }
  @media (min-width: 1063px) {
    margin-bottom: 15rem;
  }
`;

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section>
      <header>
        <Container>
          <Navbar isNavOpen={isNavOpen} onNavOpen={setIsNavOpen} />
          <HeroSection>
            <HeroContent
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Heading as="h1" type="heroMargin">
                Award-winning custom designs and digital branding solutions
              </Heading>
              <Paragraph type="heroMargin">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </Paragraph>
              <Link to="/about">
                <Button>Learn more</Button>
              </Link>
            </HeroContent>
            <BrandImage>
              <img src="/home/desktop/image-hero-phone.png" />
            </BrandImage>
            {isNavOpen && <StyledOverlay></StyledOverlay>}
          </HeroSection>
        </Container>
      </header>
      <Main>
        <ProjectHighlight />
        <CoreValuesSection />
      </Main>
      <MainFooter />
    </section>
  );
}
