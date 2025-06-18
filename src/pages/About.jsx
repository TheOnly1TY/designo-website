import styled from "styled-components";
import { MainFooter } from "../ui/footer/MainFooter";
import { LocationSection } from "../ui/LocationSection";
import Navbar from "../ui/Navbar";
import { Heading, Paragraph } from "./home/styles/heroSecion.styled";
import { Container } from "./Location";

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
    /* border-radius: 0; */
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
    /* padding: 4rem 1.5rem; */
  }
`;

const AboutText = styled(Paragraph)`
  max-width: 458px;

  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 573px;
    margin: 0 auto;
  }
`;

export default function About() {
  return (
    <section>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>
        <Container>
          <AboutUsSection />
          <LocationSection />
        </Container>
      </main>
      <MainFooter />
    </section>
  );
}

function AboutUsSection() {
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
        <source
          srcset="/about/desktop/image-about-hero.jpg"
          media="(min-width: 1063px)"
        />

        <source
          srcset="/about/tablet/image-about-hero.jpg"
          media="(min-width: 601px)"
        />

        <img src="/about/mobile/image-about-hero.jpg" alt="Responsive Image" />
      </StyledImage>
    </StyledSection>
  );
}
// World-class talent
// We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully
// crafted from concept to launch, ensuring success in its given market. We are constantly updating
// our skills in a myriad of platforms.

// Our team is multi-disciplinary and we are not merely interested in form — content and meaning
// are just as important. We give great importance to craftsmanship, service, and prompt delivery.
// Clients have always been impressed with our high-quality outcomes that encapsulates their
// brand’s story and mission.

// The real deal
// As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
// Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
// opportunity. We make design and technology more accessible and give you tools to measure success.

// We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies,
// we inspire audiences to take action and drive real results.
