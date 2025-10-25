import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const SocialNetworkIcon = () => {
    return (
        <SocialList>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconID={"telegram"} width={"32"} height={"32"}></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconID={"linkedIn"} width={"32"} height={"32"}></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon iconID={"gitHubBlack"} width={"32"} height={"32"}></Icon>
                    </SocialLink>
                </SocialItem>
            </SocialList>
        </SocialList>
    );
};

const SocialList = styled.ul`
display: flex;`
const SocialItem = styled.li``
const SocialLink = styled.a``