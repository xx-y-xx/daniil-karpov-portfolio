import styled from "styled-components";
import {SectionTitle} from "../../components/menu/SectioTitle.tsx";
import {Container} from "../../components/Container.tsx";

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <ExperienceTitle>Experience</ExperienceTitle>
                <TimeLineExperience>
                    <StyledItemExperience>
                        <StyledYear>2017</StyledYear>
                        <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor t ut
                            labore et dolore magna aliqua.</StyledDescription>
                    </StyledItemExperience>
                    <StyledItemExperience>
                        <StyledYear>2019</StyledYear>
                        <StyledDescription> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t
                            ut labore
                            et dolore magna aliqua.</StyledDescription>
                    </StyledItemExperience>
                    <StyledItemExperience>
                        <StyledYear>2021</StyledYear>
                        <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor t ut
                            labore et dolore magna aliqua.</StyledDescription>
                    </StyledItemExperience>
                    <StyledItemExperience>
                        <StyledYear>2023</StyledYear>
                        <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor t ut
                            labore et dolore magna aliqua.</StyledDescription>
                    </StyledItemExperience>
                </TimeLineExperience>
            </Container>
        </StyledExperience>
    );
};
const StyledExperience = styled.section`
padding: 100px 0 140px;`
const StyledYear = styled.span``
const StyledDescription = styled.p`
    margin-top: 45px;`
const StyledItemExperience = styled.div`
    max-width: 260px`
const TimeLineExperience = styled.div`
    display: flex;
    gap: 34px;
    text-align: center;`
const ExperienceTitle = styled(SectionTitle)`
margin-bottom:70px;`