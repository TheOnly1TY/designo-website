import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLogoImage = styled.img`
  width: 12.25rem;

  @media (max-width: var(--small-screen)) {
    width: 12.625rem;
  }
`;

export function Logo() {
  return (
    <Link to="/">
      <StyledLogoImage src="/shared/desktop/logo-dark.png" alt="Logo" />
    </Link>
  );
}
