import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import MostPlayedPlaylist from "./components/MostPlayedPlaylist";

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
    background: linear-gradient(to top, #141414, #9ed0e98b);
    flex: 1;
    box-sizing: border-box;
    height: 100vh;
    border-radius: 8px;
    padding: 20px 24px;
  `;

  const Title = styled.h1`
    color: #FFF;
    font-size: 30px;
    margin: 28px 0;
  `;

  const PlaylistsContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
  `;

  return (
    <StyledBackground>
      <GlobalStyles />
      <AppContainer>
        <SideBar />
        <MainContainer>
          <Header />
          <Title>Good morning</Title>
          <PlaylistsContainer>
            <MostPlayedPlaylist />
            <MostPlayedPlaylist />
            <MostPlayedPlaylist />
            <MostPlayedPlaylist />
            <MostPlayedPlaylist />
            <MostPlayedPlaylist />
          </PlaylistsContainer>
          
          
        </MainContainer>
      </AppContainer>
    </StyledBackground>
  )
}

export default App;
