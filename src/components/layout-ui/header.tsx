
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { NavigationPaths } from '../../enums/navigation-paths';
import { useMediaPredicate } from "react-media-hook";
import { FaBars, FaAngleRight, FaSearch } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import { AppBar, CardMedia, Grid } from "@material-ui/core";
import * as LogoImage from "../../images/CentillionLogo.svg";
import "../../style.css";

const Header = () => {

    const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");
    const lessThan1200 = useMediaPredicate("(max-width: 1199px)");

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <AppBar position="static" style={{ fontFamily: "Roboto", backgroundColor: "#b7c500", position: "fixed", top: "50px" }}>
            <div className="main-container-div-header">
                <Grid container spacing={2} className="width-100" >
                    <Grid item xs={12} sm={6} lg={8} md={5}>
                        {/* <span style={{ color: "rgb(0, 0, 0)", fontSize: isMobile ? 30 : 40}}>{companyName}</span> */}
                        <CardMedia image={LogoImage as any} className="comp-logo"></CardMedia>
                        {lessThan1200 && <FaBars className="header-fabbars-icon" onClick={toggleNav} />}
                    </Grid>
                    {biggerThan1200 && <Grid item xs={12} sm={6} lg={4} md={7} className="menubar-paddingtop">
                        <span><Link to={"/" + NavigationPaths.Home} className="a-navbar-header-menu">Home</Link></span>
                        <span className="footer_grd4_span"><Link to={"/" + NavigationPaths.PortFolio} className="a-navbar-header-menu">Portfolio</Link></span>
                        <span className="footer_grd4_span"><Link to={"/" + NavigationPaths.AboutUs} className="a-navbar-header-menu">About Us</Link></span>
                        <span className="footer_grd4_span"><Link to={"/" + NavigationPaths.ContactUs} className="a-navbar-header-menu">Contat Us</Link></span>
                    </Grid>}  {lessThan1200 && isNavVisible && (
                        <Grid item xs={12} sm={12} lg={12} md={12} className="header-fabbards-icon-list-mobile row-width-100" >
                            <p className="footer_grd4_span"><Link to={"/" + NavigationPaths.Home} className="a-navbar-header-menu">Home</Link></p>
                            <p className="footer_grd4_span"><Link to={"/" + NavigationPaths.PortFolio} className="a-navbar-header-menu">Portfolio</Link></p>
                            <p className="footer_grd4_span"><Link to={"/" + NavigationPaths.AboutUs} className="a-navbar-header-menu">About Us</Link></p>
                            <p className="footer_grd4_span"><Link to={"/" + NavigationPaths.ContactUs} className="a-navbar-header-menu">Contat Us</Link></p>
                        </Grid>
                    )}
                </Grid>
            </div>

        </AppBar>
    )
}

export default Header;