import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import photo from "../../assets/img/placeholder-projects.png";


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper direction="column">
                <Photo src={photo} alt=""/>
                <SectionTitle>PROJECT 1</SectionTitle>
                <ProjectsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ProjectsText>
            </FlexWrapper>
        </StyledProjects>
    );
};
const StyledProjects = styled.section``
const SectionTitle = styled.h2``
const Photo = styled.img`
    width: 500px;
    height: 280px;
    object-fit: cover
`
const ProjectsText = styled.p``