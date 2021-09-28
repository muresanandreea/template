import React from "react";
import {Pages, FirstPage,SecondPage} from "./Homepage.style";
import {pagesLinks} from "../../constants/constants";

export const PageContent = () => {
    return (
        <Pages>
            <FirstPage href={pagesLinks.firstPage}/>
            <SecondPage href={pagesLinks.secondPage}/>
        </Pages>
    )
}