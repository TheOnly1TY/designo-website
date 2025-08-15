import { useInView } from "react-intersection-observer";
import { StyledSection } from "../styles/CoreValues.styled";
import {
  StyledCard,
  StyledImage,
  Title,
  Description,
} from "../styles/CoreValues.styled";

export function CoreValuesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <StyledSection ref={ref}>
      <CoreValuesCard
        inView={inView}
        id="1"
        imgPath="/home/desktop/illustration-passionate.svg"
        title="Passionate"
        description="Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions."
      />
      <CoreValuesCard
        inView={inView}
        id="2"
        imgPath="/home/desktop/illustration-resourceful.svg"
        title="Resourceful"
        description="Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs."
      />
      <CoreValuesCard
        inView={inView}
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

export function CoreValuesCard({ imgPath, title, description, id, inView }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <StyledCard
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6 * id }}
    >
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
