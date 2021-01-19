import React from 'react';
import { withRouter } from "react-router-dom";
import { MDBContainer } from 'mdbreact';
import TopBarContainer from './top-bar-container';
import HeaderContainer from './header-container';
import FooterContainer from './footer-container';
import MainContentContainer from './main-content-container';

/**
 * layout ui
 */
const layoutUI = () => {

    /**
     * return layout component elements
     */
    return (
        <MDBContainer fluid>
            <TopBarContainer />
            <HeaderContainer />
            <MainContentContainer />
            <FooterContainer />
        </MDBContainer>
    )
}

export default withRouter(layoutUI);