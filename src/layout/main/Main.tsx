import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import styled from "styled-components";
import {Button} from "../../components/button/Button.ts";
import photo from "../../assets/img/face-title.png";
import {Container} from "../../components/Container.tsx";
import {Theme} from "../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <InformationBlock>
                        <MainTitle>A Web Developer</MainTitle>
                        <FlavorText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</FlavorText>
                        <Button type={"submit"}>Let’s Begin</Button>
                    </InformationBlock>

                        <Photo src={photo} alt="Photo"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const MainTitle = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 54px;
    color: ${Theme.colors.font};`
const FlavorText = styled.p`    
    font-weight: 500;
    font-size: 18px;
    margin: 15px 0 60px 0;
    color: ${Theme.colors.fontFlavor};`
const InformationBlock = styled.div`
    text-align: left;
max-width: 674px;`
const Photo = styled.img``
const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;`