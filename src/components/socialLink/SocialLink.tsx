import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const IconSocialLink = () => {
    return (
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconID={"telegram"} width={"32"} height={"32"} viewBox={"0 0 38 32"}></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconID={"linkedIn"} width={"32"} height={"32"} viewBox={"0 0 32 32"}></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconID={"gitHubBlack"} width={"32"} height={"32"} viewBox={"0 0 32 32"}></Icon>
                    </SocialLink>
                </SocialItem>
            </SocialList>
    );
};

const SocialList = styled.ul`
display: flex;
gap: 25px;
`
const SocialItem = styled.li``
const SocialLink = styled.a``