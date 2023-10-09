import styled from "styled-components";

const PlaylistContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #1f1f1f7a;
        transition: 0.2s;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    .playlist-text {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h4 {
        font-weight: 500;
    }

    p {
        font-size: 13px;
        font-weight: 500;
        color: #9e9e9e;
    }

    h4, 
    p {
        margin: 0;
    }
`;

const Playlist = ({ playlist }) => {
    return (
        <PlaylistContainer>
            <img src={playlist.image} alt="playlist image" />
            <div className="playlist-text">
                <h4>{playlist.title}</h4>
                <p>{playlist.description}</p>
            </div>
        </PlaylistContainer>
        
    )
}

export default Playlist;