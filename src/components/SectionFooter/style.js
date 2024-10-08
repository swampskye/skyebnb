import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${(props) => props.color};
    font-size: 17px;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
`;
