import styled from "styled-components";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0;
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 2px;
  line-height: 0.875rem;
  color: var(--color-dark-grey);
`;

export default function Navbar() {
  return (
    <StyledNav>
      <Logo />
      <StyledNavList>
        <StyledNavLink to="/about">
          <l1>Our Company</l1>
        </StyledNavLink>
        <StyledNavLink to="/location">
          <l1>Locations</l1>
        </StyledNavLink>
        <StyledNavLink to="/contact">
          <l1>Contact</l1>
        </StyledNavLink>
      </StyledNavList>
    </StyledNav>
  );
}
