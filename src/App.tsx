import './App.css'
import styled from 'styled-components';

function App() {
    return (
        <>
            <Box>
                <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
                <StyledBtn as="a" href={"#"}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
        </>
    )
}
export default App

const StyledBtn = styled.button`
    border: none;
    background-color: #fa5879;
    padding: 10px 20px;
    color: #f8dede;
    font-size: 2rem;
    font-weight: bold;
`

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
    min-width: 1000px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`