import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

export const Button = styled.button`
    border-radius: 83px;
    width: 240px;
    height: 60px;
    background-color: ${Theme.colors.secondaryBg};
    
    font-weight: 600;
    font-size: 20px;
    color: ${Theme.colors.font};
    
    border: solid 1px ${Theme.colors.accent};
    
    &:hover{
        cursor: pointer;
        background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
        transform: translateY(-4px);
    }
`