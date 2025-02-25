import './App.css'
import styled from 'styled-components';

function App() {
    return (
        <>
            <Box>
                <StyledBtn>Hello</StyledBtn>
            </Box>
        </>
    )
}
export default App

const StyledBtn = styled.button`
    border: none;
    background-color: #fa5879;
    padding: 10px 20px;
    border-radius: 5px;
    color: #f8dede;
    font-size: 2rem;
    font-weight: bold;
`


const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`