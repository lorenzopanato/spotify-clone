import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {

  const StyledBackground = styled.div`
    background: #000;
    width: 100%;
    min-height: 100vh;
  `;

  const AppContainer = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px;
    color: #FFF;
  `;


  const MainContainer = styled.main`
    background: linear-gradient(to top, #141414, #3dd2ec9c);
    flex: 1;
    height: 100vh;
    border-radius: 8px;
  `;

  return (
    <StyledBackground>
      <GlobalStyles />
      <AppContainer>
        <SideBar />
        <MainContainer>
          <Header />
        </MainContainer>
      </AppContainer>
    </StyledBackground>
  )
}

export default App;
