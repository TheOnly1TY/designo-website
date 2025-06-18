import { StyledSection } from "../styles/CoreValues.styled";
import { CoreValuesCard } from "./CoreValuesCard";

export function CoreValuesSection() {
  return (
    <StyledSection>
      <CoreValuesCard
        id="1"
        imgPath="/home/desktop/illustration-passionate.svg"
        title="Passionate"
        description="Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions."
      />
      <CoreValuesCard
        id="2"
        imgPath="/home/desktop/illustration-resourceful.svg"
        title="Resourceful"
        description="Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs."
      />
      <CoreValuesCard
        id="3"
        imgPath="/home/desktop/illustration-friendly.svg"
        title="Friendly"
        description="We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide."
      />
    </StyledSection>
  );
}
