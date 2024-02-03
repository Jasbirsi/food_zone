import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="search food" />
        </div>
      </TopContainer>
    </Container>
  );
  
};

export default App;

const Container=styled.div`
  background-color: #323343;
`;
const TopContainer = styled.section``;