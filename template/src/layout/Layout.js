import React from 'react';
import {PageRouter} from "../router/PageRouter";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {BaseWrapper, ContentWrapper} from './Layout.style';

export const Layout = () => {
    return (
        <BaseWrapper>
            <Header/>
            <ContentWrapper>
                <PageRouter/>
            </ContentWrapper>
            <Footer/>
        </BaseWrapper>
    )
}