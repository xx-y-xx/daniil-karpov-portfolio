import styled from "styled-components";
import {Project} from "./Project.tsx";
import {SectionTitle} from "../../components/menu/SectioTitle.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper wrap="wrap">
                <Project title={"Projects 1"}
                         text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Project title={"Projects 2"}
                         text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Project title={"Projects 3"}
                         text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Project title={"Projects 4"}
                         text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
            </FlexWrapper>
        </StyledProjects>
    );
};
const StyledProjects = styled.section`
    background: #ed609f;
    min-height: 50vh;
`
/*
const StyledBoxProject = styled.div`
    width: 50%`*/
