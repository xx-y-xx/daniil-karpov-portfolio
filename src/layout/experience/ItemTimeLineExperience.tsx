import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

type ExperiencePropsType = {
    year: number,
    description: string,
}


export const ItemTimeLineExperience = (props: ExperiencePropsType) => {
    return (
            <WrapItem>
                <StyledYear>{props.year}</StyledYear>
                <StyledDescription>{props.description}</StyledDescription>
            </WrapItem>
    );
};

const StyledYear = styled.span`
    font-weight: 600;
    font-size: 26px;
    color: ${Theme.colors.font};
    
    position: relative;

    &::before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 50%;
        z-index: 1;

        top: 40px;
        left: 50%;        
    }
`
const StyledDescription = styled.p`    
    margin-top: 45px;
    
    font-weight: 500;
    font-size: 18px;
    text-align: center;/*Уже есть */
    color: ${Theme.colors.font};`
const WrapItem = styled.div`
    max-width: 260px;`