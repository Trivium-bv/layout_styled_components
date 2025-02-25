import './App.css'
import styled from 'styled-components';

function App() {
    return (
        <>
            <Box>
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
`