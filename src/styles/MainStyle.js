import styled from "styled-components";

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
  @media(max-width: 900px){
    margin-bottom: 1rem;
  }
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 15rem auto;
  grid-gap: 1.5rem;
  margin: 1.5rem 1.5rem 0 1.5rem;
  padding: 0.5rem 0.5rem;
  background-color: #eae7dc;
  border: 0px;
  border-radius: 3px;
  box-shadow: 0 0 10px 5px #777777;
  width: auto;
  @media(max-width: 900px) {
    grid-template-columns: 10rem auto;    
    margin: 0.7rem 0.7rem 0 0.7rem;
  }
  @media(max-width: 600px){    
    grid-template-columns: 5rem auto;
    margin: 0.5rem 0.5rem 0 0.5rem;
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
    object-fit: cover;
  }
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
`;

const SportsName = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  color: #44318d;
  font-size: 1rem;
`;

const ArticleTitle = styled.div`
  font-weight: 600;
  color: #112d32;
  font-size: 1.2rem;
`;

const ArticleContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  color: #2a1b3d;
  font-size: 0.9rem;
  p {
    margin: 0;
    padding: 0;
  }
`;

const AuthorDiv = styled.div`
  display: grid;
  grid-template-columns: auto 60px 60px;
  color: #7f8583;
  font-size:0.9rem;
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
