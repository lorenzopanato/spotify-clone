import styled from "styled-components";
import PlayButton from "../PlayButton";

const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1c1c1c;
    border-radius: 6px;
    padding: 18px 18px 34px 18px;
    width: 150px;
    position: relative;
    cursor: pointer;

    .playlist-image {
        width: 100%;
        border-radius: 6px;
        box-shadow: 2px 2px 10px 10px rgba(5, 5, 5, 0.202),
                -2px -2px 10px 10px rgba(5, 5, 5, 0.202);
    }

    .play-button {
        position: absolute;
        right: 6px;
        top: 112px;
    }

    &:hover {
        background-color: #cdcccc4a;
        transition: 0.4s;
        
        .play-button {
            visibility: visible;
        }
    }
`;

const DescriptionContainer = styled.div`
    padding-top: 18px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    h4 {
        font-size: 15px;
    }

    p {
       font-size: 13px;
       font-weight: 500;
       color: #bbbbbb;
    }

    h4,
    p {
        margin: 0;
    }
`;

const YourPlaylistsPlaylist = ({ name, description }) => {
    return (
        <PlaylistContainer>
            <img className="playlist-image" src="/images/astroworld.jpg" alt="music image" />
            <DescriptionContainer>
                <h4>{name}</h4>
                <p>{description}</p>
            </DescriptionContainer>
            <PlayButton className="play-button" />
        </PlaylistContainer>
    )
}

export default YourPlaylistsPlaylist;