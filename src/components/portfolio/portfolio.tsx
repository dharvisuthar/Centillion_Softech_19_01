import React from 'react';
import { NavigationPaths } from '../../enums/navigation-paths';
import { withRouter } from 'react-router-dom';
import * as  privacypolicyLogo from "../../images/privacy_policy.jpg";
import { IconButton, Theme, Grid, Paper, FormGroup, withStyles, Select, MenuItem, Button, CardMedia } from "@material-ui/core";
import { companyName, compPhoneNumber } from '../../providers/comp-contact-provider';
import * as reactLogo from "../../images/reactnew.png";
import * as csharpLogo from "../../images/csharp.jpg";
import * as angularLogo from "../../images/angular.jpg";
import * as typscriptLogo from "../../images/typescript.png";
import * as vbdotnetLogo from "../../images/vbdotnet.png";
import * as phpLogo from "../../images/phpone.jpg";
import * as MssqlLogo from "../../images/MSSQLServer.png";
import * as mongodbLogo from "../../images/mongo_db.png";
import * as portfolioLogo from "../../images/portfolio.jpg";
import * as blockchainLogo from "../../images/blockchain-tracker.jpg";
import * as excelLogo from "../../images/excel.png";
import * as javaLogo from "../../images/java.png";
import * as awsLogo from "../../images/awswebservice.png";
import * as androidLogo from "../../images/android.png";
import * as iosLogo from "../../images/ios.png";
import * as crystalLogo from "../../images/CrystalReports.png";
import * as tableauLogo from "../../images/tableau.png";
import * as telerikLogo from "../../images/telerik.png";
import * as VueLogo from "../../images/vue.png";
import * as lavarelLogo from "../../images/lavarelo.png";
import * as knockoutLogo from "../../images/knockoutjs.jpg";
import * as paythonLogo from "../../images/paython.png";
import * as mobileappLogo from "../../images/pngtreemobileapp.png";
import * as windowsLogo from "../../images/windows_logos.png";
import * as nodejsLogo from "../../images/nodejs.png";
import * as html5Logo from "../../images/html5.png";
import * as css3Logo from "../../images/css3.png";
import * as mvs5Logo from "../../images/mvc5.jpg";
import * as coreLogo from "../../images/core.png";
import * as linuxLogo from "../../images/linux.png";
import * as odooLogo from "../../images/odoo.png";
import * as nopecommerceLogo from "../../images/nopecommerce.jpg";
import * as graphicsLogo from "../../images/graphics.jpg";
import * as paypalLogo from "../../images/paypal.png";
import * as stripeLogo from "../../images/stripe.png";
import * as braintreeLogo from "../../images/braintree.png";
import Modal from "../layout-ui/model";

/**
 * portfolio component
 */
const PortFolio = () => {
    /**
  * return the elements for home
  */
    return (
        <div className="main_div">
            <div className="hide_div"></div>
            {/* portfolio first div */}
            <Grid>
                <Grid item xs={12} className="header_cardMedia_portfolio" >
                    <CardMedia image={portfolioLogo as any} className="portfolio_header_image"></CardMedia>
                    <h1 className="header_title_on_image">PORTFOLIO</h1>
                    <p className="header_title_on_image_p">We make every effort to turn your idea into reality that changes user perspective. Have a look at our Portfolio</p>
                </Grid >
            </Grid>
            {/* portfolio second div */}
            <Grid container className=" ">
                <Modal />
                <Grid item xs={12} sm={12} lg={6} md={6} className="portfolio-mobile-first">
                    <h1 className="portfolio_mobile-first-h1">Mobile App <span className="color-1e99d4">Development</span></h1>
                    <hr className="why-work-border"></hr>
                    <h3 className="portfolio-mobile-first-h3">We create amazing experiences for mobile devices. Whether it's native app development across iOS & Android or cross-platform development with tools such as Phonegap, Flutter, React Native we have a proven track record across a range of mobile & tablet technologies.</h3>
                    <button className="portfolio-mobile-button"> Know More </button>
                </Grid>
                <Grid item xs={12} sm={12} lg={6} md={6} >
                    <CardMedia image={mobileappLogo as any} className="portfolio_mobile_cardMedia"> </CardMedia>
                </Grid>
            </Grid>
            <Grid container color="default" className="bg-portfolio-second" >
                <Grid item xs={12} sm={12} lg={12} md={12} className="portfolio-mobile-second">
                    <FormGroup>
                        <span className="portfolio-mobile-second-span">A Complete Creative Solutions Provider For Web, Mobile & Software</span>
                        <hr className="portfolio-mobile-second-hr" ></hr>
                        <p className="portfolio-mobile-second-p">{companyName} is an offshore development outsourcing IT company. Incepted in the year 2019, {companyName} is doing an astonishing work on the ground of IT fraternity. We have the global presence in India, USA with a team of 10+ in-house talents. Our commitment and belief to achieve the best is making us the most demandable company globally. We believe in stepping into client’s shoe for building their product in more awesome ways. Our experts are talented enough to convey the best solutions. We assure clients to bring their unique thoughts in the marketplace with more intuitive manner. We believe in maintaining punctuality and quality is our key area to deliver splendid work.</p>
                    </FormGroup>
                </Grid>
            </Grid>
            {/* portfolio third div */}
            <Grid container spacing={2} className="portfolio_mobile_third_container">
                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Paper>
                        <FormGroup >
                            <CardMedia image={reactLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">React</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={csharpLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">C#</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={angularLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Angular js</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={typscriptLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">TypeScript</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={vbdotnetLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">VB.Net</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={phpLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Php</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={MssqlLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">SQL Server</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={mongodbLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Mongo Db</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={blockchainLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Block chain technology</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={excelLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Excel Automation</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={javaLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Java</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={awsLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">AWS services</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={androidLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Android</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={iosLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">IOS</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={crystalLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Crystal Reports</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={tableauLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Tableau</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={telerikLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Telerik controls</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={VueLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Vue js</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={lavarelLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Lavarel js</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={knockoutLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Knockout js</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={paythonLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Paython</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={windowsLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Windows</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={nodejsLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Node.js</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={html5Logo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">HTML 5</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={css3Logo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">CSS 3</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={mvs5Logo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Asp.net MVC 5</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={coreLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Asp.net Core</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={linuxLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Linux Server</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={odooLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Odoo</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={nopecommerceLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Nope Commerce</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={graphicsLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Graphic Design</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={paypalLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Paypal</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={stripeLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Stripe</h3>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="portfolio_mobile_third_grid">
                    <Paper>
                        <FormGroup>
                            <CardMedia image={braintreeLogo as any} className="portfolio_mobile_third_cardMedia"></CardMedia>
                        </FormGroup>
                    </Paper>
                    <h3 className="portfolio_mobile_third_h3">Braintree</h3>
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(PortFolio);