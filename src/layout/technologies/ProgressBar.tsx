/*
import styled from "styled-components";
type ProgressBarPropsType = {
    progress: number;
}
// Компонент, который принимает пропс 'progress'
export function ProgressBar = (props:ProgressBarPropsType) => {
    // Убедитесь, что пропс передается как число или строка, которую можно интерполировать
    return (
        <StyledProgressBackground>
         {/!*   <StyledProgress progress={progress} />*!/}
        </StyledProgressBackground>
    );
};

// 🟢 Родительский элемент (Background)
const StyledProgressBackground = styled.div`
    width: 100%;
    max-width: 600px;
    height: 50px;
    background: #444;
    border-radius: 5px;
    overflow: hidden;
`;

// ⚪ Дочерний элемент (Заливка)
const StyledProgress = styled.div`
    height: 100%;
    background: white; 

    /!* 💥 Динамическое свойство width 💥 *!/
    width: ${props => props.progress}%;

    transition: width 0.8s ease-in-out;
`;*/
