import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogoImage = styled.img`
  width: 12.25rem;
`;

export function Logo() {
  return (
    <Link to="/">
      <StyledLogoImage src="/shared/desktop/logo-dark.png" alt="Logo" />
    </Link>
  );
}
