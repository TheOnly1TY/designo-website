import styled from "styled-components";
import { Button, Paragraph } from "../../pages/home/styles/heroSecion.styled";
import { Link } from "react-router-dom";

// STILL TO FIX THE BACKGROUND SIZE AND POSTION

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url("/web-design/desktop/bg-pattern-intro-web.svg")
    var(--color-peach);

  border-radius: 15px;
  flex-direction: column;

  @media (max-width: 600px) {
    margin: 0 1.5rem;
    padding: 0 1.5rem;
    min-height: 379px;
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 49.125rem;
    min-height: 350px;
    margin: 3rem auto;
    width: calc(100% - 3rem);
  }

  @media (min-width: 1063px) {
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: row;
    text-align: left;
    min-height: 18.25rem;

    margin: 0 2rem;
    padding: 3rem 6rem 0px 6rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: white;
  font-weight: 500;
  margin-bottom: 1rem;
  max-width: 16.75rem;

  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.25rem;
    max-width: 279px;
    margin: 0px auto 0.5rem auto;
    text-align: center;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    margin: 0 auto;
    max-width: 335px;
  }
`;

const SubHeading = styled(Paragraph)`
  margin-bottom: 2rem;
  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 28.125rem;
    margin-top: 0.5rem;
  }
  @media (min-width: 1063px) {
    max-width: 459px;
  }
`;

export default function CallToAction() {
  return (
    <StyledSection>
      <div>
        <Heading>Let's talk about your project</Heading>
        <SubHeading>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </SubHeading>
      </div>
      <Link to="/contact">
        <Button>Get in touch</Button>
      </Link>
    </StyledSection>
  );
}
