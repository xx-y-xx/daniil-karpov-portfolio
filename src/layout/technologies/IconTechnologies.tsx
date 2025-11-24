import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper.tsx";

export const IconTechnologies = () => {
    return (
        <WrapIcon justify={'center'}>
            <Icon iconID={"gitHubWhite"} width={"100"} height={"100"}></Icon>
            <Icon iconID={"react"} width={"100"} height={"100"} viewBox={"0 0 120 120"}></Icon>
            <Icon iconID={"figma"} width={"100"} height={"100"}></Icon>
        </WrapIcon>

    );
};
const WrapIcon = styled(FlexWrapper)`
gap: 50px;`