import {StyledBtn} from './components/Button.styled.tsx';
import {Body, Container} from './components/Body.styled.tsx';

function App() {
    return (
        <Container>
            <Body>
                {/*<StyledBtn color={"red"}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={"blue"} fontSize={"20px"}>Hello</StyledBtn>*/}
                {/*<StyledBtn fontSize={"30px"} >Hello</StyledBtn>*/}
                <StyledBtn primery>Hello</StyledBtn>
                <StyledBtn outlined>Hello</StyledBtn>
            </Body>
        </Container>
    )
}

export default App




