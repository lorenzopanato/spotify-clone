import styled from "styled-components";

const TopicContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;
    font-weight: 700;
    color: ${props => props.active ? '#FFF' : '#9e9e9e'};
    cursor: pointer;
    &:hover {
        color: #FFF;
        transition: 0.5s;
    }
    p {
        margin: 0;
    }
`;

const Topic = ({ active, icon, text }) => {
    return (
        <TopicContainer active={active}>
            {icon}
            <p>{text}</p>
        </TopicContainer>
    )
}

export default Topic;