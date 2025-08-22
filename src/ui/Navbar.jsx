import styled, { css } from "styled-components";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";
import { useNavbar } from "./navbar/NavBarContext";
import { motion } from "motion/react";

/*---------------- STYLES -----------------*/

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 786px;
    margin: 3rem auto;
  }

  @media (min-width: 1063px) {
    margin: 3rem 0;
  }
`;

const StyledNavList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 600px) {
    position: absolute;
    flex-direction: column;
    align-items: start;
    padding: 1.5rem;
    top: 100%;
    left: 0;
    right: 0;
    height: 235px;
    background-color: var(--color-black);

    ${(props) =>
      props.type === "open"
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `}
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 2px;
  line-height: 0.875rem;
  color: var(--color-dark-grey);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 25px;
    letter-spacing: 2px;
    color: white;
  }
`;

const StyledNavIcon = styled.figure`
  @media (min-width: 601px) {
    display: none;
    cursor: pointer;
  }
`;

/*---------------- DATA -----------------*/
const NavList = [
  {
    pathname: "about",
    name: "Our Company",
  },
  {
    pathname: "location",
    name: "Locations",
  },

  {
    pathname: "contact",
    name: "Contact",
  },
];

export default function Navbar() {
  const { isNavOpen, handleNavToggle } = useNavbar();
  return (
    <StyledNav>
      <Logo />
      <StyledNavIcon onClick={handleNavToggle}>
        {!isNavOpen ? (
          <img src="/shared/mobile/icon-hamburger.svg" alt="open nav icon" />
        ) : (
          <img src="/shared/mobile/icon-close.svg" alt="close nav icon" />
        )}
      </StyledNavIcon>
      <StyledNavList type={`${isNavOpen ? "open" : "close"}`}>
        {NavList.map((navitem) => (
          <li>
            <StyledNavLink
              to={`/${navitem.pathname}`}
              onClick={handleNavToggle}
            >
              {navitem.name}
            </StyledNavLink>
          </li>
        ))}
      </StyledNavList>
    </StyledNav>
  );
}
