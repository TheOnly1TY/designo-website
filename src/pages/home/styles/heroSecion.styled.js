import { motion } from "motion/react";
import styled, { css } from "styled-components";

export const HeroSection = styled.div`
  position: relative;
  display: flex;
  text-align: center;
  width: 100%;
  background: url("/home/desktop/bg-pattern-hero-home.svg") var(--color-peach);
  background-repeat: no-repeat;
  height: 843px;
  background-position: right;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 600px) {
    background-position: left;
    align-items: center;
    flex-direction: column;
    padding: 0 1.5rem;
    border-radius: 0;
    padding-top: 5rem;
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    background-position: 150px;
    padding-top: 5rem;
    flex-direction: column;
    max-width: 786px;
    margin: 0 auto 8rem auto;
  }

  @media (min-width: 1063px) {
    justify-content: space-between;
    background-position: right;
    background-size: contain;
    height: 640px;
    flex-direction: row;
    text-align: left;

    margin-bottom: 8rem;
  }
`;

export const HeroContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1063px) {
    padding-left: 3rem;
  }
`;

export const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: var(--font-large);
      line-height: var(--font-large);
      color: white;
      font-weight: 500;
      max-width: 540px;
    `}
  ${(props) =>
    props.type === "heroMargin" &&
    css`
      margin-bottom: 2rem;
    `};

  @media (max-width: 600px) {
    ${(props) =>
      props.type === "heroMargin" &&
      css`
        margin-bottom: 14px;
      `};

    ${(props) =>
      props.as === "h1" &&
      css`
        font-size: 2rem;
        line-height: 2.25rem;
        color: white;
        font-weight: 500;
      `}
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    ${(props) =>
      props.type === "heroMargin" &&
      css`
        margin-left: auto;
        margin-right: auto;
      `};

    max-width: 573px;
  }
`;

export const Paragraph = styled.p`
  margin: ${(props) => props.margin || 0};
  font-size: var(--font-small);
  line-height: 26px;
  color: white;
  max-width: 445px;

  ${(props) =>
    props.type === "heroMargin" &&
    css`
      margin-bottom: 2rem;
    `};

  @media (max-width: 600px) {
    margin: ${(props) => props.mobilemargin || props.margin || 0};
    font-size: 0.9375rem;
    line-height: 25px;
    ${(props) =>
      props.type === "heroMargin" &&
      css`
        margin-bottom: 24px;
      `};
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    margin: ${(props) => props.tabletmargin || props.margin || 0};
    margin-left: auto;
    margin-right: auto;

    ${(props) =>
      props.type === "heroMargin" &&
      css`
        margin-bottom: 1rem;
      `};
  }
`;

export const Button = styled.button`
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

  @media (max-width: 1063px) {
    margin: 0 auto;
  }
`;

export const BrandImage = styled.figure`
  // margin-top: -2rem;

  @media (min-width: 1063px) {
    margin-top: 0rem;
    margin-left: -4rem;
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);

  @media (min-width: 601px) {
    display: none;
  }
`;
