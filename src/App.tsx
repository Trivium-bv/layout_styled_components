import {StyledBtn, SuperButton} from './components/Button.styled.tsx';
import {Link} from './components/Link.styled.tsx';
import {Menu} from './components/Menu.styled.tsx';
import {Body, Container} from './components/Body.styled.tsx';

function App() {
    return (
        <Container>
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Body>
                <StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn>
                <StyledBtn as="a" href={'#'}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Body>
        </Container>
    )
}

export default App




