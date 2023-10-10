import styled from "styled-components";

const StyledRoundButton = styled.button`
    background-color: #181818d0;
    color: #FFF;
    border: none;
    padding: 5px 5px 3px 5px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: #55555570;
        transition: 0.5s;
    }
`;

const RoundButton = ({ children }) => {
    return (
        <StyledRoundButton>
            {children}
        </StyledRoundButton>
    )
}

export default RoundButton;