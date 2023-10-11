import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import MostPlayedPlaylist from "./components/MostPlayedPlaylist";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {

  const StyledBackground = styled.div`
    background: #000;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
  `;

  const AppContainer = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px;
    color: #FFF;
  `;

  const MainContainer = styled.main`
    background: linear-gradient(to top, #141414, #141414 66%, #41beef9e 100%);
    
    flex: 1;
    margin-left: 364px;
    box-sizing: border-box;
    height: auto;
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

          <MainSection title="Your Playlists" name="Playlist Name" description="By User" />
          <MainSection title="Your Shows" name="Show Name" description="Host" />
        </MainContainer>

        <Footer />
      </AppContainer>
    </StyledBackground>
  )
}

export default App;
