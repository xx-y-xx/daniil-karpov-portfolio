import styled from "styled-components";
import {Theme} from "../../../styles/Theme.tsx";


export const HeaderMenu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem> })}
            </ul>
        </StyledHeaderMenu>    );
};
const Mask = styled.span`
    color: ${Theme.colors.font};
    
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;

    &+& {
        top:50%;
        span {
            display: inline-block;         
            transform: translateY(-50%);
        }
    }
`
const StyledHeaderMenu = styled.nav`
    ul{
    display:flex;
    gap: 30px}`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: ${Theme.colors.font};
        

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
        }
    &:hover {
        &::before {
            transform: scale(1);}
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${Theme.colors.accent};            

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }    
    }
`
const Link = styled.a`
    font-weight: 500;
    font-size: 16px;
    color: transparent;
`
