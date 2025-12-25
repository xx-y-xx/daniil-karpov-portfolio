import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {IconSocialLink} from "../../components/socialLink/SocialLink.tsx";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx"
import {Theme} from "../../styles/Theme.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

const items = ["Projects", "Technologies", "About me"]

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <HeaderWrapper justify="space-between" align="center">
                    <Logo/>
                    <HeaderMenu menuItems={items}></HeaderMenu>
                    <IconSocialLink/>
                </HeaderWrapper>
            </HeaderContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${Theme.colors.primaryBg};
    height: 100px;
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    z-index: 99999;
`
const HeaderWrapper = styled(FlexWrapper)`
  height: 100%;
    flex-shrink:10;
`;
const HeaderContainer = styled(Container)`
  height: 100%;
`;