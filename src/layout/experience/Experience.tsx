import styled from "styled-components";
import {SectionTitle} from "../../components/menu/SectioTitle.tsx";

export const Experience = () => {
    return (
        <StyledExperience>
            <SectionTitle>Experience</SectionTitle>
            <TimeLineExperience>
                <StyledItemExperience>
                    <StyledYear>2017</StyledYear>
                    <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                        labore et dolore magna aliqua.</StyledDescription>
                </StyledItemExperience>
                <StyledItemExperience>
                    <StyledYear>2019</StyledYear>
                    <StyledDescription> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore
                        et dolore magna aliqua.</StyledDescription>
                </StyledItemExperience>
                <StyledItemExperience>
                    <StyledYear>2021</StyledYear>
                    <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                        labore et dolore magna aliqua.</StyledDescription>
                </StyledItemExperience>
                <StyledItemExperience>
                    <StyledYear>2023</StyledYear>
                    <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut
                        labore et dolore magna aliqua.</StyledDescription>
                </StyledItemExperience>
            </TimeLineExperience>
        </StyledExperience>
    );
};
const StyledExperience = styled.section`
    min-height: 25vh;/*🔴🔴*/
    background: #c6ed7f;    
`
const StyledYear = styled.span``
const StyledDescription = styled.p`
margin-top: 45px;`
const StyledItemExperience = styled.div`
    max-width: 260px`
const TimeLineExperience = styled.div`
display: flex;
gap: 34px`