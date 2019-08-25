import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem;
  grid-gap: 0.5rem;

  span {
    display: grid;
    grid-template-columns: 1fr;

    label {
      font-weight: 600;
    }
    input {
      padding: 0.3rem 1rem;
      font-size: 1rem;
    }
    textarea {      
      padding: 0.3rem 1rem;
      font-size: 1rem;
      height: 6rem;
    }
  }

  button {
    width: 4rem;
    height: 30px;
    border: 1px solid #444444;
    border-radius: 3px;
    :hover{
      box-shadow: 0 0 5px 5px #999999
    }
  }
`;

export default Form;