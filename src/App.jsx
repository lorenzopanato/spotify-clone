import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import MostPlayedPlaylist from "./components/MostPlayedPlaylist";
import RecentlyPlayed from "./components/RecentlyPlayed";

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

  const SubtitleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const SubTitle = styled.h2`
    color: #FFF;
    font-size: 23px;
    margin: 28px 0;
  `;

  const ShowAll = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: #aeaeae;
    cursor: pointer;
  `;

  const PlaylistsContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
  `;

  const RecentlyPlayedContainer = styled.section`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    gap: 18px;
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

          <SubtitleHeader>
            <SubTitle>Recently played</SubTitle>
            <ShowAll>Show all</ShowAll>
          </SubtitleHeader>

          <RecentlyPlayedContainer>
            <RecentlyPlayed />
            <RecentlyPlayed />
            <RecentlyPlayed />
            <RecentlyPlayed />
          </RecentlyPlayedContainer>

        </MainContainer>
      </AppContainer>
    </StyledBackground>
  )
}

export default App;
