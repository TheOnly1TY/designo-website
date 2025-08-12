import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 1.875rem;
  flex-direction: column;

  @media (max-width: 600px) {
    margin: 0 1.5rem 13rem 1.5rem;
    row-gap: 5rem;
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 786px;
    margin: 3rem auto;
  }

  @media (min-width: 1063px) {
    flex-direction: row;
    margin: 8rem 2rem 0 2rem;
    margin-bottom: 1rem; // temporary margin
  }
`;
export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 601px) and (max-width: 1062px) {
    margin: 0 1.5rem;
    text-align: left;
    flex-direction: row;
    column-gap: 3rem;
  }
`;

export const StyledImage = styled.div`
  width: 12.625rem;
  height: 12.625rem;
  border-radius: 999px;
  margin-bottom: 3rem;
  ${(props) =>
    props.type === "card1" &&
    css`background:linear-gradient(to left, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1))}`}
  ${(props) =>
    props.type === "card2" &&
    css`background:linear-gradient(to bottom, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1))}`}

  ${(props) =>
    props.type === "card3" &&
    css`background:linear-gradient(0deg, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1))}`}
`;

export const Title = styled.h3`
  font-size: var(--font-regular);
  line-height: 1.625rem;
  letter-spacing: 5px;
  color: var(--color-dark-grey);
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: var(--font-small);
  line-height: 26px;
  color: var(--color-dark-grey);
`;
