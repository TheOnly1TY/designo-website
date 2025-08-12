import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { Button } from "../pages/home/styles/heroSecion.styled";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 65rem;
  margin: 0 auto;
  align-items: center;
  gap: 30px;

  @media (max-width: 1062px) {
    flex-direction: column;
  }
`;

export function LocationSection() {
  return (
    <StyledSection>
      <LocationItem
        imgPath="/shared/desktop/illustration-canada.svg"
        id="1"
        place="Canada"
      />
      <LocationItem
        id="2"
        imgPath="/shared/desktop/illustration-australia.svg"
        place="Australia"
      />
      <LocationItem
        id="3"
        imgPath="/shared/desktop/illustration-united-kingdom.svg"
        place="United Kingdom"
      />
    </StyledSection>
  );
}

const PlaceText = styled.h3`
  font-size: 1.25rem;
  line-height: 26px;
  letter-spacing: 5px;
  color: var(--color-dark-grey);
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 3rem;
`;

const LocationButton = styled(Button)`
  background-color: var(--color-peach);
  color: white;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: var(--color-light-peach);
  }
`;

const StyledImage = styled.div`
  width: 12.625rem;
  height: 12.625rem;
  border-radius: 999px;

  ${(props) =>
    props.type === "img1" &&
    css`background:linear-gradient(0deg, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1))}`}

  ${(props) =>
    props.type === "img2" &&
    css`background:linear-gradient(to left, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1))}`}


  ${(props) =>
    props.type === "img3" &&
    css`background:linear-gradient(to bottom, rgba(93, 2, 2, 0) 0%, rgba(93, 2, 2, 0.1))}`}
`;

const StyledLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function LocationItem({ id, place, imgPath }) {
  return (
    <StyledLocation>
      <StyledImage type={`img${id}`}>
        <img src={imgPath} />
      </StyledImage>
      <PlaceText>{place}</PlaceText>
      <Link to="/location">
        <LocationButton>See location</LocationButton>
      </Link>
    </StyledLocation>
  );
}
