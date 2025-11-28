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
                    <StyledContactLink href="tel:123-456-789">Call me:<br/> 123-456-789</StyledContactLink>
                    <StyledContactLink href="mailto:xxx@xyz.com">Email:<br/> xxx@xyz.com</StyledContactLink>
                    <IconSocialLink/>
                </FooterWrapper>
            </FooterContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    height: 150px;
    background-color: ${Theme.colors.secondaryBg};`
const FooterWrapper = styled(FlexWrapper)`
  height: 100%;`
const FooterContainer = styled(Container)`
  height: 100%;
`
const StyledContactLink = styled.a`
    font-weight: 600;
    font-size: 22px;
    text-align: left;`
