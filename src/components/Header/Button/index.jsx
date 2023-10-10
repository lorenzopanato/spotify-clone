import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #0000007e;
    border: none;
    border-radius: 50%;
    color: #9e9e9e;
    padding: 4px 6px;
    cursor: pointer;

    &:hover {
        color: #FFF;
        opacity: 0.8;
        transition: 0.4s;
    }
`;

const Button = ({ icon }) => {
    return (
        <StyledButton>
            {icon}
        </StyledButton>
    )
}

export default Button;