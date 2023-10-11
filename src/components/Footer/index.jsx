import styled from "styled-components";
import { Heart } from "lucide-react";

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    padding: 12px;
`; 

const LeftSection = styled.div`
    height: 100%;
    color: #FFF;
    display: flex;
    align-items: center;
    gap: 14px;

    h4 {
        color: #FFF;
        font-size: 13px;
        padding-bottom: 5px;
    }

    P {
        color: #e2e2e2;
        font-size: 11px;
        font-weight: 500;
    }

    h4,
    p {
        margin: 0;
    }
    
    img {
        width: 60px;
        border-radius: 5px;
    }

    .description {
        margin-right: 12px;
    }
`;

const MiddleSection = styled.div`

`;

const RightSection = styled.div`

`;

const Footer = () => {
    return (
        <FooterContainer>
            <LeftSection>
                <img src="/images/astroworld.jpg" alt="" />
                <div className="description">
                    <h4>Music Name</h4>
                    <p>Singer</p>
                </div>
                <Heart size={'20px'} style={{ color: '#e2e2e2' }} />
            </LeftSection>
            <MiddleSection></MiddleSection>
            <RightSection></RightSection>
        </FooterContainer>
    )
}

export default Footer;