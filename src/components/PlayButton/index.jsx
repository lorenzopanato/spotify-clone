import styled from "styled-components";

const StyledButton = styled.button`
    background: #4de15ffb;
    border: none;
    border-radius: 50%;
    padding: 13px 12px 9px 14px;
    margin-right: 24px;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.381);
    visibility: hidden;
    cursor: pointer;
    
    &:hover { 
        opacity: 0.8;
        transition: 0.4s;
    }

    img {
        width: 20px;
    }
`;

const PlayButton = () => {
    return (
        <StyledButton className="play-button">
            <img src="/icons/play.png" alt="play button" />
        </StyledButton>
    )
}

export default PlayButton;