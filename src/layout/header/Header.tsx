import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {IconSocialLink} from "../../components/socialLink/SocialLink.tsx";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <IconSocialLink/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #a2e8a2;
    display: flex;
    justify-content: space-between
`