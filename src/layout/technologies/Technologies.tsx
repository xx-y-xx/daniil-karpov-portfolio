import styled from "styled-components";
import {SectionTitle} from "../../components/menu/SectioTitle.tsx";
import {IconTechnologies} from "./IconTechnologies.tsx";
/*import {ProgressBar} from "./ProgressBar.tsx";*/


export const Technologies = () => {
    return (
        <div>
            <StyleTechnologies>
                <SectionTitle>Technologies</SectionTitle>
                {/*<ProgressBar progress={'85'}/>*/}
                <SectionTitle>Additional technologies and skills</SectionTitle>
                <IconTechnologies/>
            </StyleTechnologies>
        </div>
    );
};

const StyleTechnologies = styled.section`
    background: #9039ea;`