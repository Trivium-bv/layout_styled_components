import {StyledBtn} from './components/Button.styled.tsx';
import {myTheme} from './styles/Theme.styled.tsx';
import styled from 'styled-components';
import {Link} from './components/Link.styled.tsx';

function App() {
    return (
        <Container>
            <Body>
                {/*<StyledBtn color={"red"}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={"blue"} fontSize={"20px"}>Hello</StyledBtn>*/}
                {/*<StyledBtn fontSize={"30px"} >Hello</StyledBtn>*/}
                <StyledBtn color={myTheme.colors.primary} primary>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} outlined>Hello</StyledBtn>
            </Body>
        </Container>
    )
}
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

    //@media screen and (max-width: 800px) {
    //    flex-direction: column;
    //}
    @media ${myTheme.media.tablet} {
        flex-direction: column;
    }
`

export default App




