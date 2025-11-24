import styled from "styled-components";
import {Theme} from "../../styles/Theme.tsx";

type ProgressBarPropsType = {
    progress: number;
    language: string;
}

export const ProgressBar = (props: ProgressBarPropsType) => {
    return (
        <WrapProgress>
            <NameLanguage>{props.language}</NameLanguage>
            <BackgroundProgress>
                <StyledProgress $progress={props.progress}/>
            </BackgroundProgress>
        </WrapProgress>
    );
};
const WrapProgress = styled.div`
    padding: 0 120px;
    margin: 0 auto;`
const NameLanguage = styled.span`
    display: inline-block;
    margin-top: 25px;
    padding-left:30px`
const BackgroundProgress = styled.div`
    width: 100%;
    overflow: hidden;

    max-width: 900px;
    border-radius: 83px;
    height: 18px;
    background-color: #162950;
`


const StyledProgress = styled.div<{ $progress: number }>`
    height: 100%;
    background: ${Theme.colors.gradientBg};
    width: ${props => props.$progress}%;
`