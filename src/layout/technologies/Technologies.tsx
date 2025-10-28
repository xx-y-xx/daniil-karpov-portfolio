import styled from "styled-components";
import {SectionTitle} from "../../components/menu/SectioTitle.tsx";
import {IconTechnologies} from "./IconTechnologies.tsx";


export const Technologies = () => {
    return (
        <div>
            <StyleTechnologies>
                <SectionTitle>Technologies</SectionTitle>
                <ProgressBar></ProgressBar>
                <SectionTitle>Additional technologies and skills</SectionTitle>
                <IconTechnologies/>
            </StyleTechnologies>
        </div>
    );
};

const StyleTechnologies = styled.section`
    background: #9039ea;`

const ProgressBar = styled.div`
    width: 900px;
    height: 300px;
    background: #432e2e;
`