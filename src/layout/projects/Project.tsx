import styled from "styled-components";
import photo from "../../assets/img/placeholder-projects.png";
import {Theme} from "../../styles/Theme.tsx";

type ProjectPropsType ={
    title: string
    text: string
}
export const Project = (props:ProjectPropsType) => {
    return (
        <StyledBoxProject>
            <Photo src={photo} alt=""/>
            <SectionTitle>{props.title}</SectionTitle>
            <ProjectsText>{props.text}</ProjectsText>
            <LinkProject>Look It Up</LinkProject>
        </StyledBoxProject>
    );
};
const Photo = styled.img`
    width: 500px;
    height: 280px;
    object-fit: cover;
`
const SectionTitle = styled.h3`
    margin-top: 40px;
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 50%;
        height: 4px;
        background: ${Theme.colors.gradientBg};

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
    }
`
const ProjectsText = styled.p`
margin: 70px 0 50px;`
const StyledBoxProject = styled.div`
    text-align: left;
    
    border-radius:40px 0 40px 0;
    border: 1px solid #a39d9d;
    
    padding:25px 25px 40px;
    max-width: 550px;
    width: 100%;`
const LinkProject = styled.a`
    border-radius: 83px;
    width: 200px;
    height: 60px;
    display: inline-block;
    background: ${Theme.colors.gradientBg};
    text-align: center;
    line-height: 60px;/*центрирование*/

    &:hover {
        transform: translateY(-4px);
    }
`