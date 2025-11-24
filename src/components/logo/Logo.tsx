import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <PortfolioLogo href="https://xx-y-xx.github.io/daniil-karpov-portfolio/">
            <Icon iconID={'logo'} width={"182"} height={"42"} viewBox={"0 0 188 48"}/>
        </PortfolioLogo>
    );
};

const PortfolioLogo = styled.a``