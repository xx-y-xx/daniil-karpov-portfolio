import styled from "styled-components";
import {SectionTitle} from "../../components/menu/SectioTitle.tsx";
import {IconTechnologies} from "./IconTechnologies.tsx";
import {ProgressBar} from "./ProgressBar.tsx";
import {Container} from "../../components/Container.tsx";


export const Technologies = () => {
    return (
        <div>
            <StyleTechnologies>
                <Container>
                    <StyleTitle>Technologies</StyleTitle>
                    <ProgressBar progress={85} language={'HTML'}/>
                    <ProgressBar progress={50} language={'Css, Sass'}/>
                    <ProgressBar progress={32} language={'React'}/>
                    <ProgressBar progress={48} language={'Styled components'}/>
                    <StyleTitle>Additional technologies and skills</StyleTitle>
                    <IconTechnologies/>
                </Container>
            </StyleTechnologies>
        </div>
    );
};

const StyleTitle = styled(SectionTitle)`
margin-bottom: 70px;`

const StyleTechnologies = styled.section`    
    ${Container} ${StyleTitle}:last-of-type
    {
        margin-top: 120px;
        text-align: center;
    }
`
