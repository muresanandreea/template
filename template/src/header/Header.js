import React from 'react';
import {ButtonText, ButtonWrapper, HeaderDesktopContent, HeaderWrapper} from './Header.style'
import {pagesLinks} from "../constants/constants";

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderDesktopContent>
                <ButtonWrapper href={pagesLinks.homepage}><ButtonText>Home</ButtonText></ButtonWrapper>
                <ButtonWrapper href={pagesLinks.firstPage}><ButtonText>First page</ButtonText></ButtonWrapper>
                <ButtonWrapper href={pagesLinks.secondPage}><ButtonText>Second page</ButtonText></ButtonWrapper>
            </HeaderDesktopContent>
        </HeaderWrapper>
    )
}