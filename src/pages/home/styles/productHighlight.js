import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDesign = styled(Link)`
  position: relative;
  cursor: pointer;

  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 786px;
    width: 100%;
    margin: 0 auto;
  }
`;
export const DesignContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  gap: 24px;
  flex-direction: column;

  @media (max-width: 600px) {
    margin: 6rem 1.5rem;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    margin: 8rem 0;
  }
  @media (min-width: 1063px) {
    flex-direction: row;
    gap: 30px;
  }

  /* New: prevent flex items from pushing layout horizontally */
  overflow-x: hidden;
  max-width: 100%;
`;

export const DesignContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1062px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Caption = styled.figcaption`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  @media (max-width: 600px) {
    gap: 14px;
  }
  @media (min-width: 1063px) {
    gap: 24px;
  }

  z-index: 10;
`;

export const ProjectName = styled.h4`
  font-size: var(--font-medium);
  line-height: var(--font-large);
  letter-spacing: 2px;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const StyledViewProject = styled.p`
  font-size: 15px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: white;
  white-space: nowrap;
  text-align: center;
`;
