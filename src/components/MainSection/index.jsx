import styled from "styled-components";
import MainSectionPlaylist from "../MainSectionPlaylist";

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

const YourPlaylistsContainer = styled.section`
    display: flex;
    gap: 22px;
  `;

const MainSection = ({ title, name, description }) => {
    return (
        <section>
            <SubtitleHeader>
                <SubTitle>{title}</SubTitle>
                <ShowAll>Show all</ShowAll>
            </SubtitleHeader>
            <YourPlaylistsContainer>
                <MainSectionPlaylist name={name} description={description} />
                <MainSectionPlaylist name={name} description={description} />
                <MainSectionPlaylist name={name} description={description} />
                <MainSectionPlaylist name={name} description={description} />
            </YourPlaylistsContainer>
        </section>
    )
}

export default MainSection;
