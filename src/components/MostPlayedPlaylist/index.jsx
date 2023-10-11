import styled from "styled-components";
import PlayButton from "../PlayButton";

const PlaylistContainer = styled.div`
    background-color: #3b3b3bba;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    cursor: pointer;

    .left-section {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &:hover {
        background-color: #cdcccc4a;
        transition: 0.4s;
        
        .play-button {
            visibility: visible;
        }
    }
`;

const StyledImage = styled.img`
    width: 80px;
    box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.381);
    border-radius: 6px 0 0 6px;
`;

const StyledName = styled.h3`
    font-size: 16px;
`;

const MostPlayedPlaylists = () => {
    return (
        <PlaylistContainer>
            <div className="left-section">
                <StyledImage src="/images/astroworld.jpg" alt="playlist image" />
                <StyledName>Playlist Name</StyledName>
            </div>
            <PlayButton />
        </PlaylistContainer>
    )
}

export default MostPlayedPlaylists;