import { motion } from "motion/react";
import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  @media (max-width: 600px) {
    margin: 6rem auto;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    margin: 8rem 1.5rem;
  }
  @media (min-width: 1063px) {
    margin: 8rem 1.9rem;
  }
`;

export const StyledHeading = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 24px;

  ${(props) =>
    props.type === "Web Design" &&
    css`
      background: url("/web-design/desktop/bg-pattern-intro-web.svg")
        var(--color-peach);
    `}
  ${(props) =>
    props.type === "App Design" &&
    css`
      background: url("/app-design/desktop/bg-pattern-intro-app.svg")
        var(--color-peach);
    `}
      ${(props) =>
    props.type === "Graphic Design" &&
    css`
      background: url("/graphic-design/desktop/bg-pattern-intro-graphic.svg")
        var(--color-peach);
    `}
  background-position: 50%;

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
    height: 320px;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 786px;
    height: 252px;
    border-radius: 15px;
    margin: 3rem auto;
  }

  @media (min-width: 1063px) {
    border-radius: 15px;
    margin: 0 2rem;
    height: 252px;
  }
`;

export const StyledProjectItem = styled.div`
  max-width: 350px;
  background-color: #fdf3f0;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

    &:hover {
    background-color: var(--color-peach);

       h3, p {
      color: white;
    }

    transition: all 0.2s ease-in-out;
  }


  @media (max-width: 600px) {
    margin: 0 auto;
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    display: flex;
    max-width: 100%;
    max-width: 786px;
    margin: 0
    max-height: 310px;
  }
`;

export const ProjectImage = styled.img`
  width: 350px;
  @media (min-width: 601px) and (max-width: 1062px) {
    width: 50%;
  }
`;

export const Title = styled.h3`
  font-size: var(--font-regular);
  line-height: 1.625rem;
  letter-spacing: 5px;
  font-weight: 500;
  color: var(--color-peach);
  text-transform: uppercase;
`;

export const ProjectCaption = styled.figcaption`
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  flex-direction: column;

  @media (min-width: 601px) and (max-width: 1062px) {
    width: 50%;
  }
`;

export const ProjectsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 28px;
  row-gap: 2rem;
  @media (max-width: 600px) {
    margin: 0 1.5rem;
  }
`;
export const HeaderContainer = styled.div`
  @media (min-width: 601px) and (max-width: 1062px) {
    margin: 0 1.5rem;
  }
`;

export const Button = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 1.5rem;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-top: 6rem;
    margin-bottom: 14rem;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    margin-top: 7rem;
    margin-bottom: 14rem;
  }
  @media (min-width: 1063px) {
    flex-direction: row;
    margin-top: 8rem;
    margin-bottom: 14rem;
  }
`;
