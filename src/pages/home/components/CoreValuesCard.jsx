import {
  StyledCard,
  StyledImage,
  Title,
  Description,
} from "../styles/CoreValues.styled";

export function CoreValuesCard({ imgPath, title, description, id }) {
  return (
    <StyledCard>
      <StyledImage type={`card${id}`}>
        <img src={imgPath} alt={`${title}_illustration`} />
      </StyledImage>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </StyledCard>
  );
}
