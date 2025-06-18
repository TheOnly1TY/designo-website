import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Paragraph } from "../../../pages/home/styles/heroSecion.styled";

export const StyledFooter = styled.footer`
  background-color: #1d1c1e;
  padding: 9rem 0 4rem 0;

  @media (max-width: 600px) {
    text-align: center;
    padding-top: 13rem;
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    padding-top: 12rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1063px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 786px;
    margin: 0 auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 3rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledNavLink = styled(Link)`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
`;

export const StyledContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 3rem;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    gap: 50px;
  }
  @media (min-width: 1063px) {
    gap: 200px;
  }
`;
export const StyledLine = styled.hr`
  background-color: white;
  width: 100%;
  opacity: 0.2;

  @media (max-width: 600px) {
    ${(props) =>
      props.type === "mobile-line"
        ? css`
            display: block;
            width: calc(100% - 3rem);
            margin: 3rem 1.5rem;
          `
        : css`
            display: none;
          `}
  }

  @media (min-width: 601px) {
    ${(props) =>
      props.type === "biggerScreen-line"
        ? css`
            display: block;
            margin: 3rem 0;
          `
        : css`
            display: none;
          `}
  }
`;

export const Address = styled(Paragraph)`
  color: white;
  opacity: 0.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 601px) {
    margin-left: 1.5rem;
  }
`;
