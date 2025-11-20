import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {IconSocialLink} from "../../components/socialLink/SocialLink.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify="space-between">
            <StyledTelephoneNumber href="tel:123-456-789">Call me: 123-456-789</StyledTelephoneNumber>
            <StyledEmail href="mailto:xxx@xyz.com">Email: xxx@xyz.com</StyledEmail>
                <IconSocialLink/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer``
const StyledTelephoneNumber = styled.a``
const StyledEmail = styled.a``