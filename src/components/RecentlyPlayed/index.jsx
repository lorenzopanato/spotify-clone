import styled from "styled-components";

const MusicContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #171717d6;
    border-radius: 4px;
    padding: 20px;
    width: auto;

    img {
        width: 100%;
        border-radius: 4px;
    }
`;

const DescriptionContainer = styled.div`
    padding-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    h4 {
        font-weight: 500;
    }

    p {
       font-size: 15px;
       color: #bbbbbb;
    }

    h4,
    p {
        margin: 0;
    }
`;

const RecentlyPlayed = () => {
    return (
        <MusicContainer>
            <img src="/images/astroworld.jpg" alt="music image" />
            <DescriptionContainer>
                <h4>Music Name</h4>
                <p>Singer</p>
            </DescriptionContainer>
        </MusicContainer>
    )
}

export default RecentlyPlayed;