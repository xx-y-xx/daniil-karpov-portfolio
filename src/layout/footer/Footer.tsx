import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {IconSocialLink} from "../../components/socialLink/SocialLink.tsx";
import {Theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <FooterWrapper justify="space-between" align={'center'}>
                    <WrapperContactLink>
                        <StyledContactLink href="tel:123-456-789">Call me:<br/> 123-456-789</StyledContactLink>
                        <StyledContactLink href="mailto:xxx@xyz.com">Email:<br/> xxx@xyz.com</StyledContactLink>
                    </WrapperContactLink>
                    <GrowIcon>
                        <IconSocialLink/>
                    </GrowIcon>
                </FooterWrapper>
            </FooterContainer>
        </StyledFooter>
    );
};

const StyledContactLink = styled.a`
    font-weight: 600;
    font-size: 22px;
    text-align: left;`
const StyledFooter = styled.footer`
    height: 150px;
    background-color: ${Theme.colors.secondaryBg};`
const FooterWrapper = styled(FlexWrapper)`
    height: 100%;`
const FooterContainer = styled(Container)`
    height: 100%;
`

const WrapperContactLink = styled(FlexWrapper)`    
    align-items: center;
    justify-content: space-evenly;
    flex-grow: 1;
    
`
const GrowIcon = styled(FlexWrapper)`
    align-items: center;
    justify-content: space-around;
    flex-grow: 1;
`;