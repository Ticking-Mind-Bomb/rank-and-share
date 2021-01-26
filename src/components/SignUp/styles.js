import styled from "styled-components";

export const SignUpPageWrapper = styled.div`
  display: grid;
  gap: 16px;
  place-items: center;
`;

export const FormContainer = styled.div`
  background-color: hsla(46, 100%, 84%, 0.5);
  padding: 24px;
  width: 50%;
  border-radius: 15px;
`;

export const SignUpForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  > input {
      height: 40px;
      padding: 0 8px;
      box-shadow: none;
      border: 1px solid hsla(0, 0%, 0%, .2);
      border-radius: 5px;
  }

  .wide {
    grid-column: 1 / span 2;r
  }
`;
