import { StyledLogoImage } from "../Logo";
import {
  Address,
  ContactContainer,
  Container,
  Nav,
  NavList,
  SocialLinks,
  StyledContactInfo,
  StyledFooter,
  StyledLine,
  StyledNavLink,
} from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Nav>
          <StyledLogoImage src="/shared/desktop/logo-light.png" />

          <StyledLine type="mobile-line" />
          <NavList>
            <li>
              <StyledNavLink to="/about">Our Company</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/location">Locations</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contact">Contact</StyledNavLink>
            </li>
          </NavList>
        </Nav>

        <StyledLine type="biggerScreen-line" />

        <StyledContactInfo>
          <ContactContainer>
            <Address>
              <b>Designo Central Office</b>
              <br />
              3886 Wellington Street Toronto,
              <br />
              Ontario M9C 3J5
            </Address>
            <Address>
              <b>Contact Us (Central Office)</b>
              <br />
              <b>P : +1 253-863-8967</b>
              <br />
              <b>M : contact@designo.co</b>
            </Address>
          </ContactContainer>
          <SocialLinks>
            <a href="">
              <img
                src="/shared/desktop/icon-facebook.svg"
                alt="facebook-icon"
              />
            </a>
            <a href="">
              <img src="/shared/desktop/icon-youtube.svg" alt="youtube icon" />
            </a>
            <a href="">
              <img src="/shared/desktop/icon-twitter.svg" alt="twitter icon" />
            </a>
            <a href="">
              {" "}
              <img
                src="/shared/desktop/icon-pinterest.svg"
                alt="pinterest icon"
              />
            </a>
            <a href="">
              {" "}
              <img
                src="/shared/desktop/icon-instagram.svg"
                alt="instagram icon"
              />
            </a>
          </SocialLinks>
        </StyledContactInfo>
      </Container>
    </StyledFooter>
  );
}
