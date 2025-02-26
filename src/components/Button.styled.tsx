import styled, {css} from 'styled-components';

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primery?: boolean
    outlined?: boolean
    active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: ${props => props.fontSize || '2rem'};;
    font-weight: bold;

    //primery
    ${props => props.primery && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#fa5879"};
        color: #f8dede;

        &:hover {
            background-color: #646cff;
        }
    `} //outlined
    ${props => props.outlined && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#fa5879"};
        color: ${props => props.color || "#fa5879"};
        background-color: transparent;

        &:hover {
            border-color: #646cff;
            color: #646cff;
            background-color: transparent;
        }
    `}
`
//другой пример
//<StyledBtn btnType={"outlined"}>Hello</StyledBtn>
//${props => props.btnType === "primery" && css<StyledBtnPropsType>``
//${props => props.btnType === "outlined" && css<StyledBtnPropsType>``
//${props => props.active && css<StyledBtnPropsType>`
// box-shadow: 5px "#fa5879"
// `

//расширения "extends"
// export const SuperButton = styled(StyledBtn)`
//     border-radius: 5px;
//     background-color: #ffed7b;
//     color: #064cff;
//
//     &:hover {
//         animation: ${MyAnimations} 2s ease-in-out infinite;
//     }
//
// `