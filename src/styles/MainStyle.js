import styled from "styled-components";

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 15rem auto;
  grid-gap: 1.5rem;
  margin: 2rem 2rem 0 2rem;
  padding: 1rem 1rem;
  background-color: #cf72c6;
  border: 0px;
  border-radius: 3px;
  box-shadow: 0 0 10px 5px #777777;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 10rem auto;
  }
`;

const CardImage = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  img {
    width: inherit;
    height: auto;
  }
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 2fr 1fr;
  grid-gap: 0.5rem;
`;

const SportsName = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
`;

const ArticleTitle = styled.div`
  font-weight: 600;
  color: #000;
`;

const ArticleContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  p {
    margin: 0;
    padding: 0;
  }
`;

const AuthorDiv = styled.div`
  display: grid;
  grid-template-columns: auto 80px 80px;
  button {
    width: 80%;
    height: 100%;
    border: 0px;
    color: white;
    background-color: #888888;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    :hover{
      background-color: #555555;
    }
  }
`;

export {
  MainWrapper,
  CardDiv,
  CardImage,
  CardDetails,
  SportsName,
  ArticleTitle,
  ArticleContent,
  AuthorDiv
};
