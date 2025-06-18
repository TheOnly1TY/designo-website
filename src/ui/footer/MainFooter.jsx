import styled from "styled-components";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;

  padding-top: 8rem;
`;

const CTAWrapper = styled.div`
  position: absolute;
  top: -6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 73rem;
  z-index: 10;
  @media (max-width: 600px) {
    top: -8rem;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    top: -10rem;
  }
`;

export function MainFooter() {
  return (
    <StyledFooter>
      <CTAWrapper>
        <CallToAction />
      </CTAWrapper>
      <Footer />
    </StyledFooter>
  );
}
