import { ChevronLeft, ChevronRight, Bell, UserCircle, ArrowDownCircle } from 'lucide-react';
import styled from 'styled-components';
import RoundButton from './RoundButton';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    .left-section {
        display: flex;
        gap: 8px;
    }   

    .right-section {
        display: flex;
        gap: 10px;

        .text-button {
            border: none;
            font-size: 13px;
            font-weight: 700;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
                transition: 0.2s;
            }
        }

        .premium-button {
            background-color: #FFF;
            color: #000;
        }

        .install-button {
            background-color: #181818d0;
            color: #FFF;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .premium-button,
        .install-button {
            @media (max-width: 910px) {
                display: none;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className='left-section'>
                <RoundButton>
                    <ChevronLeft />
                </RoundButton>
                <RoundButton>
                    <ChevronRight />
                </RoundButton>
            </div>
            <div className='right-section'>
                <button className='text-button premium-button'>
                    Explore Premium
                </button>
                <button className='text-button install-button'>
                    <ArrowDownCircle size={'20px'} />
                    Install App
                </button>
                <RoundButton>
                    <Bell size={'20px'} />
                </RoundButton>
                <RoundButton>
                    <UserCircle size={'20px'} />
                </RoundButton>
                
            </div>
            
        </HeaderContainer>
    )
}

export default Header;