import styled from "styled-components";
import {Project} from "./Project.tsx";
import {SectionTitle} from "../../components/menu/SectioTitle.tsx";
import {Container} from "../../components/Container.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <StyledSectionTitle>Projects</StyledSectionTitle>
                <WrapProject>
                    <Project title={"Projects 1"}
                             text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Project title={"Projects 2"}
                             text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Project title={"Projects 3"}
                             text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    <Project title={"Projects 4"}
                             text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                </WrapProject>
            </Container>
        </StyledProjects>
    );
};
const StyledProjects = styled.section`
padding: 100px 0 140px`
const WrapProject = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px`

const StyledSectionTitle = styled(SectionTitle)`
margin-bottom: 70px;`