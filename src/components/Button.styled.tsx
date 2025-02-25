import styled from 'styled-components';
import {MyAnimations} from '../styles/animations/Animations.tsx';

export const StyledBtn = styled.button`
    border: none;
    background-color: #fa5879;
    padding: 10px 20px;
    color: #f8dede;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #646cff;
    }

    &:last-child {
        background-color: #d3ff44;
    }
`
//расширения "extends"
export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #ffed7b;
    color: #064cff;

    &:hover {
        animation: ${MyAnimations} 2s ease-in-out infinite;
    }

`