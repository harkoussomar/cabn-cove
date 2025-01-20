import styled, { css } from "styled-components";

const Form = styled.form`
  padding: 3.2rem 4rem;

  ${(props) =>
    props.type === "regular" &&
    css`
      /* Box */
      background-color: var(--color-grey-0);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
