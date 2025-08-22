import React from "react";
import styled, { css } from "styled-components";
import { Paragraph } from "../../home/styles/heroSecion.styled";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const StyledSectionWorld = styled.div`
  display: flex;
  align-items: center;

  background: url("/shared/desktop/bg-pattern-two-circles.svg") #fdf3f0;
  background-repeat: no-repeat;
  background-position: bottom;
  overflow: hidden;
  margin: 5rem 0;
  ${(props) =>
    props.type === "2" &&
    css`
      flex-direction: row-reverse;
    `}
  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    text-align: center;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 786px;
    margin: 0 auto;
    margin: 8rem 0;
    flex-direction: column;
    border-radius: 15px;
  }
  @media (min-width: 1024px) {
    margin: 10rem 0;
    border-radius: 15px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  line-height: 48px;
  color: #e7816b;
  font-weight: 500;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.25rem;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    font-size: var(--font-medium);
  }
`;

const SubTitle = styled(Paragraph)`
  color: var(--color-black);
  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 572px;
  }
`;

const StyledContent = styled(motion.div)`
  @media (max-width: 600px) {
    padding: 5rem 1.5rem;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    padding: 5rem 0;
  }

  @media (min-width: 1024px) {
    ${(props) =>
      props.type === "1" &&
      css`
        margin-left: 6rem;
      `}
    ${(props) =>
      props.type === "2" &&
      css`
        margin-right: 6rem;
      `}
  }
`;

const StyledImage = styled.picture`
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 600px) {
      width: 100vw;
    }
    @media (min-width: 601px) and (max-width: 1062px) {
      width: 100vw;
    }
  }
`;

export const Source = styled.source`
  display: block;
  width: 100%;
`;

export function Layout({ title, subtitle, id, image, position }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const containerVariants = {
    hidden: { x: Number(position), opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <StyledSectionWorld type={id} ref={ref}>
      <div>
        <StyledImage>
          <Source
            media="(min-width: 1024px)"
            srcSet={`/about/desktop/${image}`}
          />
          <Source
            media="(min-width: 600px)"
            srcSet={`/about/tablet/${image}`}
          />
          <img src={`/about/mobile/${image}`} alt={image} />
        </StyledImage>
      </div>
      <StyledContent
        type={id}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        <Title>{title}</Title>
        <SubTitle>
          {subtitle.split("<br /> <br />").map((part, i) => (
            <React.Fragment key={i}>
              {console.log(part)}
              {part}
              {i !== subtitle.split("<br /> <br />").length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </SubTitle>
      </StyledContent>
    </StyledSectionWorld>
  );
}
