import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {IconSocialLink} from "../../components/socialLink/SocialLink.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify="space-between">
            <StyledTelephoneNumber>Call me: 123-456-789</StyledTelephoneNumber>
            <StyledEmail>Email: xxx@xyz.com</StyledEmail>
                <IconSocialLink/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer``
const StyledTelephoneNumber = styled.span``
const StyledEmail = styled.span``