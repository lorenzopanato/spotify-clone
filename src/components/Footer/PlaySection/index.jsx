import styled from "styled-components";
import {SkipForward, SkipBack} from "lucide-react";

const PlayContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .buttons {
        display: flex;
        align-items: center;
        gap: 20px;

        .play-button {
            background-color: #FFF;
            border-radius: 50%;
            padding: 7px 6px 3px 8px;
            cursor: pointer;

            img {
                width: 18px;
            }
        }
    }

    .play-bar {
        width: 440px;
        display: flex;
        align-items: center;
        gap: 10px;

        .bar {
            height: 2px;
            width: 90%;
            border-radius: 2px;
            background: linear-gradient(to right, #FFF 66%, #7a7a7a 34%);
        }

        .minute {
            color: #9e9e9e;
            font-size: 11px;
            font-weight: 500;
            margin: 0;
        }
    }
`;

const PlaySection = () => {
    return (
        <PlayContainer>
            <div className="buttons">
                <SkipBack size={'20px'}/>
                <div className="play-button">
                    <img src="/icons/play.png" alt="play button" />
                </div>
                <SkipForward size={'20px'}/>
            </div>
            <div className="play-bar">
                <p className="minute">3:04</p>
                <div className="bar"></div>
                <p className="minute">4:52</p>
            </div>
            
        </PlayContainer>
    )
}

export default PlaySection;