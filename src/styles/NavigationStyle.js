import styled from 'styled-components';

const NavigationDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 2fr;
  width: 100%;
  height: 60px;
  background-color: #331330;
  box-shadow: 0px 5px 5px #777777;
  position: sticky;
  top: 0;
  left: 0;

  @media (max-width: 900px){
    grid-template-columns: 60px auto;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  font-size: 2rem;
  padding-left: 15px;
  width: 100%;
  img {
    width: 90%;
    height: auto;
  }
  @media (max-width: 900px){
    display: none;
  }
`;

const Title = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-size: 1.5rem;
  padding-right: 15px;
  @media (max-width: 800px){
    display: none;
  }
`;

const Menu = styled.div`
  display: none;
  @media (max-width: 900px){
    padding-left: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: inherit;
    padding: 15px;
    cursor: pointer;
    position: relative;
  }
`;

const Bar = styled.div`
  display: block;
  width: 30px;
  height: 5px;
  background-color: #fff;
`;

const VerticalMenu = styled.ul`
  position: absolute;
  top: 60px;
  left: 0px;
  background-color: inherit;
  width: 40%;
  height: auto;
  margin: 0;
  opacity: 0.8;
  visibility: ${props => props.visibility ? "visible" : 'hidden'}
  li {
    list-style: none;
    display: block;
    color: #fff;
    padding: 10px;
    cursor: pointer;
  }
`;

export { NavigationDiv, LogoDiv, Title, Pages, Menu, Bar, VerticalMenu }