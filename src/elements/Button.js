import styled from "styled-components";

import "@styles/styles.scss";

export const Button = styled.button`
  background: #3e0f64;
  width: ${(props) => (props.large ? "12rem" : "9rem")};
  height: ${(props) => (props.large ? "4rem" : "3rem")};
  border: none;
  border-radius: 8px;
  color: #eeeaf2;
  font-size: ${(props) => (props.large ? "1.8rem" : "1.4rem")};
  font-weight: 500;
`;
