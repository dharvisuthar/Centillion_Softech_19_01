import React from 'react';
import "../index";
import { companyName, compPhoneNumber, compEmailAddress, compAddress } from '../../providers/comp-contact-provider';
import { NavigationPaths } from '../../enums/navigation-paths';
import { HashLink as Link } from 'react-router-hash-link';
import * as INLogo from "../../images/IndiaFlag.png";
import { AppBar, Toolbar, Grid, IconButton, CardMedia } from "@material-ui/core";
import * as facebookLogo from "../../images/facebook.png";
import * as  googleplusLogo from "../../images/google-plus.png";
import * as instagramLogo from "../../images/instagram.png";
import * as linkedinLogo from "../../images/linkedin.png";
import * as whatsappLogo from "../../images/whatsapp.png";
import * as skypeLogo from "../../images/skype.png";
import * as twitterLogo from "../../images/twitter.png";

import "../../style.css";
/**
 * footer bar component
 */
export const Footer = () => {

    /**
     * end -use for hover effect
     */
    return (
        <div className="bg-black">
            <AppBar position="static">
                <Toolbar className="footer_appbar">
                    <Grid container >
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <h3 className="footer_h3">India</h3>
                            <Grid container spacing={2} >
                                <Grid item xs={2} >
                                    <IconButton color="inherit" className="footer_iconbtn_grd" title="Address" ></IconButton>
                                </Grid>
                                <Grid item xs={10}>
                                    <p className="color_white">2nd Floor, Block N, S.G. Road,</p>
                                    <p className="color_white">Safal Mondeal Retail Park,</p>
                                    <p className="color_white">Bodakdev Near,</p>
                                    <p className="color_white">Rajpath Rangoli Rd,</p>
                                    <p className="color_white">Ahmedabad, Gujarat 380056</p>
                                </Grid>
                                <Grid item xs={12} className="footer_grd2">
                                    <IconButton> <CardMedia image={INLogo as any} className="contactus_firstdiv_image"></CardMedia> </IconButton>
                                    <a className="footer_grd2_a">{compPhoneNumber}</a>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                            <h3 className="footer_grd3_h3">Follow Us</h3>
                            <CardMedia image={facebookLogo as any} className="footer_grd3_img" />
                            <CardMedia image={skypeLogo as any} className="footer_grd3_img" />
                            <CardMedia image={whatsappLogo as any} className="footer_grd3_img" />
                            <CardMedia image={linkedinLogo as any} className="footer_grd3_img" />
                            <CardMedia image={googleplusLogo as any} className="footer_grd3_img" />
                            <CardMedia image={instagramLogo as any} className="footer_grd3_img" />
                            <CardMedia image={twitterLogo as any} className="footer_grd3_img" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} className="footer_grd4">
                            <span><Link to={"/" + NavigationPaths.Sitemap} className="a-navbar-header">Sitemap</Link></span>
                            <span className="footer_grd4_span"><Link to={"/" + NavigationPaths.PrivacyPolicy} className="a-navbar-header">Privacy Policy</Link></span>
                            <span className="footer_grd4_span"><Link to={"/" + NavigationPaths.Desclaimer} className="a-navbar-header">Disclaimer</Link></span>
                            <span className="footer_grd4_span"><Link to={"/" + NavigationPaths.Career} className="a-navbar-header">Careers</Link></span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} className="footer_grd5">
                            © 2019 {companyName}. All Rights Reserved.
                          </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

