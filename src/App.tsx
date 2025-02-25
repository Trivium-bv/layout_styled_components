import styled from 'styled-components';

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
            <Box>
                <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
                <StyledBtn as="a" href={"#"}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
        </Container>
    )
}
export default App

const Container = styled.div`
    min-width: 1000px;
`

const StyledBtn = styled.button`
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
//атрибут "as"
const Link = styled.a`
    color: #6d0cff;
    font-size: 2rem;
    font-weight: bold;
    background-color: #f9f9f9;
    `

//расширения "extends"
    const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #ffed7b;
    color: #064cff;
`

const Box = styled.div`
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
`

const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        
        li > a {
            color: blue;
        }
        // комбинаторы
        li + li {
            margin-left: 20px;
        }
    }
`
