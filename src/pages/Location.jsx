import styled from "styled-components";
import { MainFooter } from "../ui/footer/MainFooter";
import Navbar from "../ui/Navbar";
import { Address } from "../ui/footer/styles/Footer.styled";

const StyledLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  flex-direction: row-reverse;
  gap: 30px;
  @media (max-width: 1062px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    margin-bottom: 35px;
    gap: 0px;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 786px;
    margin: 3rem auto;
  }
`;

export const Container = styled.main`
  margin: 0;
  @media (min-width: 601px) and (max-width: 1062px) {
    margin: 0 1.5rem;
  }
  @media (min-width: 1063px) {
    margin: 0 2rem;
  }
`;

const StyledLocationReverse = styled(StyledLocation)`
  @media (min-width: 1063px) {
    flex-direction: row;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  background: url("/shared/desktop/bg-pattern-two-circles.svg") #fdf3f0;
  height: 326px;
  border-radius: 15px;

  @media (max-width: 600px) {
    align-items: center;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    padding-left: 4rem;
  }
  @media (min-width: 1063px) {
    padding-left: 6rem;
  }
`;

const LocationName = styled.h2`
  font-size: var(--font-medium);
  line-height: var(--font-large);
  font-weight: 500;
  color: var(--color-peach);

  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const StyledLocationMap = styled.img`
  cursor: grab;
  width: 100%;
  @media (min-width: 601px) and (max-width: 1062px) {
    border-radius: 15px;
    object-fit: cover;
    max-height: 20.375rem;
  }
  @media (min-width: 1063px) {
    border-radius: 15px;
    width: auto;
  }
`;

const LocationInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  @media (max-width: 600px) {
    text-align: center;
    gap: 24px;
    flex-direction: column;
  }
`;

const LocationInfo = styled(Address)`
  color: var(--black);
  opacity: 1;
`;

export default function Location() {
  return (
    <section>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>
        <Container>
          <StyledLocation>
            <StyledLocationMap src="/locations/desktop/image-map-canada.png" />

            <LocationContainer>
              <LocationName>Canada</LocationName>
              <LocationInfoContainer>
                <LocationInfo>
                  <b>Designo Central Office</b>
                  <br />
                  3886 Wellington Street
                  <br />
                  Toronto, Ontario M9C 3J5
                </LocationInfo>
                <LocationInfo>
                  <b>Contact</b>
                  <br />P : +1 253-863-8967
                  <br /> M : contact@designo.co
                </LocationInfo>
              </LocationInfoContainer>
            </LocationContainer>
          </StyledLocation>

          <StyledLocationReverse>
            <StyledLocationMap src="/locations/desktop/image-map-australia.png" />
            <LocationContainer>
              <LocationName>Australia</LocationName>
              <LocationInfoContainer>
                <LocationInfo>
                  <b>
                    Designo AU Office
                    <br />
                  </b>
                  19 Balonne Street
                  <br />
                  New South Wales 2443
                </LocationInfo>
                <LocationInfo>
                  <b>Contact</b>
                  <br />P : (02) 6720 9092
                  <br /> M : contact@designo.au
                </LocationInfo>
              </LocationInfoContainer>
            </LocationContainer>
          </StyledLocationReverse>

          <StyledLocation>
            <StyledLocationMap src="/locations/desktop/image-map-united-kingdom.png" />
            <LocationContainer>
              <LocationName>United Kingdom</LocationName>
              <LocationInfoContainer>
                <LocationInfo>
                  <b>Designo UK Office</b>
                  <br />
                  13 Colorado Way
                  <br />
                  Rhyd-y-fro SA8 9GA
                </LocationInfo>
                <LocationInfo>
                  <b>Contact</b>
                  <br />
                  P : 078 3115 1400
                  <br />M : contact@designo.uk
                </LocationInfo>
              </LocationInfoContainer>
            </LocationContainer>
          </StyledLocation>
        </Container>
      </main>
      <MainFooter />
    </section>
  );
}
