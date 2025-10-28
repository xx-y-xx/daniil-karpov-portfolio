import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import styled from "styled-components";
import photo from "../../assets/img/placeholder-projects.png";
import {Button} from "../../components/button/Button.ts";

type ProjectPropsType ={
    title: string
    text: string
}
export const Project = (props:ProjectPropsType) => {
    return (
        <StyledBoxProject>
        <FlexWrapper direction="column">
            <Photo src={photo} alt=""/>
            <SectionTitle>{props.title}</SectionTitle>
            <ProjectsText>{props.text}</ProjectsText>
            <Button>Look It Up</Button>
        </FlexWrapper>
        </StyledBoxProject>
    );
};
const Photo = styled.img`
    width: 500px;
    height: 280px;
    object-fit: cover
`
const SectionTitle = styled.h2``
const ProjectsText = styled.p``
const StyledBoxProject = styled.div`
    width: 50%`