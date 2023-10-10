import { ChevronLeft, ChevronRight } from 'lucide-react';
import styled from 'styled-components';
import Button from './Button';

const HeaderContainer = styled.header`
    display: flex;
    gap: 10px;
    padding: 18px;

    .left-section {
        display: flex;
        gap: 8px;
    }   
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className='left-section'>
                <Button icon={<ChevronLeft />} />
                <Button icon={<ChevronRight />} />
            </div>
            <div className='right-section'>

            </div>
            
        </HeaderContainer>
    )
}

export default Header;