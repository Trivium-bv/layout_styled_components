import styled from 'styled-components';
import {Link} from './Link.styled.tsx';

export const Container = styled.div`
    min-width: 1000px;
`
export const Body = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    //вложенность - все кнопки у родителя имеют "cursor: pointer"
    button {
        cursor: pointer;
    }
    //интерполяция (обратиться к компоненте, внутри другой стилизованной компоненты)
    ${Link} {
        cursor: zoom-in;
    }
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
