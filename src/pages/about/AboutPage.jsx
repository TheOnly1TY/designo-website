import styled from "styled-components";
import { MainFooter } from "../../ui/footer/MainFooter";
import { LocationSection } from "../../ui/LocationSection";
import Navbar from "../../ui/Navbar";
import { Container } from "../Location";
import { AboutUsSection } from "./components/AboutUS";
import { Layout } from "./components/Layout";

const Main = styled.main`
  @media (min-width: 601px) {
    margin-bottom: 15rem;
  }
`;

export default function About() {
  return (
    <section>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <Main>
        <Container>
          <AboutUsSection />
          <WorldClassTalent />
          <LocationSection />
          <RealDeal />
        </Container>
      </Main>
      <MainFooter />
    </section>
  );
}

function WorldClassTalent() {
  return (
    <Layout
      position="100"
      id="1"
      image="image-world-class-talent.jpg"
      title="World-class talent"
      subtitle="We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
          <br /> <br /> Our team is multi-disciplinary and we are not merely
          interested in form — content and meaning are just as important. We
          give great importance to craftsmanship, service, and prompt delivery.
          Clients have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission."
    />
  );
}

function RealDeal() {
  return (
    <Layout
      position="-100"
      id="2"
      image="image-real-deal.jpg"
      title="The real deal"
      subtitle="As strategic partners in our clients’ businesses, we are ready
       to take on any challenge as our own. Solving real problems require empathy
       and collaboration, and we strive to bring a fresh perspective to every opportunity.
       We make design and technology more accessible and give you tools to measure success.
       <br /> <br /> We are visual storytellers in appealing and captivating ways. By 
       combining business and marketing strategies, we inspire audiences to take action
       and drive real results"
    />
  );
}
