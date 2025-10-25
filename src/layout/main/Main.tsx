import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import styled from "styled-components";
import {Button} from "../../components/button/Button.ts";
import photo from "../../assets/img/face-title.png";

export const Main = () => {
    return (
        <StyledMain>
        <FlexWrapper align={"center"} justify={"space-around"}>
            <FlexWrapper direction={"column"} align={"center"} >
                <MainTitle>A Web Developer.</MainTitle>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                <Button>Let’s Begin</Button>
            </FlexWrapper>
            <Photo src={photo} alt="Photo" />
        </FlexWrapper>
        </StyledMain>
    );
};

const MainTitle = styled.h1``
const Photo = styled.img``
const StyledMain = styled.div`  
    min-height: 100vh;
    background-color: #efd0a1;`