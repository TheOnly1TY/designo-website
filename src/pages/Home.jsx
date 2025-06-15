import styled, { css } from "styled-components";
import Navbar from "../ui/Navbar";

const StyledHome = styled.section``;
const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 640px;
  background: url("/home/desktop/bg-pattern-hero-home.svg") var(--color-peach);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  overflow: hidden;
  border-radius: 15px;
  padding: 0 3rem;
  margin-bottom: 8rem; // temporary margin
`;
const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: var(--font-large);
      line-height: var(--font-large);
      color: white;
      font-weight: 500;
    `}
`;

const Paragraph = styled.p`
  font-size: var(--font-small);
  line-height: 26px;
  color: white;
`;

const Button = styled.button`
  width: 152px;
  height: 56px;
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-black);
`;

export default function Home() {
  return (
    <StyledHome>
      <header>
        <Navbar />
        <HeroSection>
          <HeroContent>
            <Heading as="h1">
              Award-winning custom designs and digital branding solutions
            </Heading>
            <Paragraph>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </Paragraph>
            <Button>Learn more</Button>
          </HeroContent>
          <figure>
            <img src="/home/desktop/image-hero-phone.png" />
          </figure>
        </HeroSection>
      </header>
    </StyledHome>
  );
}
// Our Company
// Locations
// Contact

// Award-winning custom designs and digital branding solutions

// With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
// and engaging brand experiences. Find out more about our services.

// Learn more

// Web Design
// View Projects

// App Design
// View Projects

// Graphic Design
// View Projects

// Passionate
// Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
// art, design, and technology into exciting new solutions.

// Resourceful
// Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
// collaboration. It guarantees superior results that fulfill our clients’ needs.

// Friendly
// We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
// strive to give them the best experience a company can provide.

// Let’s talk about your project
// Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
// Get in touch

// Our company
// Locations
// Contact

// Designo Central Office
// 3886 Wellington Street
// Toronto, Ontario M9C 3J5

// Contact Us (Central Office)
// P : +1 253-863-8967
// M : contact@designo.co
