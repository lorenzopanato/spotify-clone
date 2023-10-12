import styled from "styled-components";
import { Heart, MonitorSpeaker, PlaySquare, AlignJustify, Volume2, Maximize2 } from "lucide-react";
import PlaySection from "./PlaySection";

const FooterContainer = styled.footer`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    padding: 8px 14px;
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

const RightSection = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;

    .right-icons {
        cursor: pointer;

        &:hover {
            opacity: 0.8;
            transition: 0.2s;
        }
    }

    .volume-bar {
        width: 80px;
        height: 3px;
        background: linear-gradient(to right,  #FFF 80%, #747474 20%);
        border-radius: 2px;
        cursor: pointer;
    }
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
            <PlaySection />
            <RightSection>
                <PlaySquare className="right-icons" size={'20px'} />
                <AlignJustify className="right-icons" size={'20px'} />
                <MonitorSpeaker className="right-icons" size={'20px'} />
                <Volume2 className="right-icons" size={'20px'} />
                <div className="volume-bar"></div>
                <Maximize2 className="right-icons" size={'20px'} />
            </RightSection>
        </FooterContainer>
    )
}

export default Footer;