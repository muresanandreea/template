import React from "react";
import {PageContent} from "./PageContent";
import {HomepageWrapper} from "./Homepage.style";
import {LogoComponent} from "../../logo/LogoComponent";

export const Homepage = () => {
    return (
        <HomepageWrapper>
            <LogoComponent/>
            <PageContent/>
        </HomepageWrapper>
    )
}