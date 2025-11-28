import styled from "styled-components";
import {SectionTitle} from "../../components/menu/SectioTitle.tsx";
import {Container} from "../../components/Container.tsx";
import {ItemTimeLineExperience} from "./ItemTimeLineExperience.tsx";
import {Theme} from "../../styles/Theme.tsx";

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <ExperienceTitle>Experience</ExperienceTitle>
                <TimeLineExperience>
                        <ItemTimeLineExperience year={2017} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'}/>
                        <ItemTimeLineExperience year={2019} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'}/>
                        <ItemTimeLineExperience year={2021} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'}/>
                        <ItemTimeLineExperience year={2023} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'}/>
                </TimeLineExperience>
            </Container>
        </StyledExperience>
    );
};
const StyledExperience = styled.section`
padding: 100px 0 140px;`

const TimeLineExperience = styled.div`
    display: flex;
    gap: 34px;
    text-align: center; /*Скорее всего уже не нужен*/

    position: relative;

    &::after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 78%;
        height: 8px;
        background: ${Theme.colors.gradientBg};

        top: 45px;
        left: 12%;

        z-index: 0;
    }    
`

const ExperienceTitle = styled(SectionTitle)`
margin-bottom:70px;`