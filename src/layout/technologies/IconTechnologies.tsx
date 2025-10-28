import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";

export const IconTechnologies = () => {
    return (
        <IconTechnologiesList>
            <SocialItem>
                    <Icon iconID={"gitHubWhite"} width={"100"} height={"100"}></Icon>
            </SocialItem>
            <SocialItem>
                    <Icon iconID={"react"} width={"100"} height={"100"}></Icon>
            </SocialItem>
            <SocialItem>
                    <Icon iconID={"figma"} width={"100"} height={"100"}></Icon>
            </SocialItem>
        </IconTechnologiesList>
    );
};

const IconTechnologiesList = styled.ul`
display: flex;
    gap: 30px;
`
const SocialItem = styled.li``