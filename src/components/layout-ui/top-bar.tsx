import React from 'react';
import { useMediaPredicate } from "react-media-hook";
import * as skypeLogo from "../../images/skype.png";
import * as whatsappLogo from "../../images/whatsapp.png";
import * as INLogo from "../../images/IndiaFlag.png";
import { compPhoneNumber } from "../../providers/comp-contact-provider";
import { AppBar, IconButton, Grid, Toolbar, CardMedia } from "@material-ui/core";
import "../../style.css";
/**
 * top bar component
 */
const TopBar = () => {

    const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");

    return (
        <header >
            <AppBar position="static" style={{ fontFamily: "Roboto", position: "fixed", height: "50px", backgroundColor: "#2a2f35" }}>
                <div className="main-container-div-header">
                    <Toolbar className="topbar-toolbar">
                        <Grid container spacing={2} className="padding-bottom-13">
                            <Grid xs={12} sm={12} lg={10} md={9}>
                                <IconButton className="topbar-iconbtn">
                                    <CardMedia image={INLogo as any} className="contactus-firstdiv-image" />
                                </IconButton>
                                <a className="marginleft-5">{compPhoneNumber}</a>
                                <IconButton className="topbar-iconbtn">
                                    <a href="skype:chintan.suthar90?chat">
                                        <CardMedia image={skypeLogo as any} className="contactus-logo" /></a>
                                </IconButton>
                                <a className="marginleft-5">Chintan Suthar</a>
                                <IconButton className="topbar-iconbtn">
                                    <a href="//api.whatsapp.com/send?phone=8401053246" target="_blank">
                                        <CardMedia image={whatsappLogo as any} className="contactus-logo" /></a>
                                </IconButton>
                                {biggerThan1200 && <a className="marginleft-5">Chintan Suthar</a>}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </div>
            </AppBar>
        </header>
    )
}

export default TopBar;