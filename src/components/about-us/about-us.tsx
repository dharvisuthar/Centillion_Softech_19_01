import React from 'react';
import { NavigationPaths } from '../../enums/navigation-paths';
import { withRouter } from 'react-router-dom';
import * as skypeLogo from "../../images/IconSkype.png";
import * as grouppicLogo from "../../images/photo6.jpg";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";
import * as doctymeImage from "../../images/doctyme.png";
import * as labcantonImage from "../../images/labcanton.png";
import * as exultitImage from "../../images/exultit.png";
import * as fyuzeImage from "../../images/fyuzeapp.png";
import * as memoImage from "../../images/memomaker.png";
import * as ExultImage from "../../images/Exultitsolution.jpg";
import * as eventalogImage from "../../images/eventalog.png";
import * as etruckingImage from "../../images/etruckingsoftware.jpg";
import * as fitnessImage from "../../images/7fitness.jpg";
import * as eventalog1 from "../../images/eventalogone.jpg";
import * as eventalog2 from "../../images/eventalogtwo.jpg";
import * as eventalog3 from "../../images/eventalogthree.jpg";
import * as eventalog4 from "../../images/eventalogfour.jpg";
import * as eventalog5 from "../../images/eventalogfive.jpg";
import * as eventalog6 from "../../images/eventalogsix.jpg";
import * as eventalog7 from "../../images/eventalogseven.jpg";
import * as eventalog8 from "../../images/eventalogeight.jpg";
import * as eventalog9 from "../../images/eventalognine.jpg";
import { IconButton, Grid, Theme, Button, withStyles, CardMedia, createStyles } from "@material-ui/core";
import { companyName, compPhoneNumber } from '../../providers/comp-contact-provider';
import { FaExpandAlt } from 'react-icons/fa';
import Modal from "../layout-ui/model";
import Slider from 'react-slick';

/**
 * about us component
 */
const AboutUs = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    /**
  * return the elements for home
  */
    return (
        <div className="main-container-div">
            <div className="main_div">
                <div className="hide_div"></div>
                {/* about us first div */}
                <Grid container className="aboutus_first_container">

                    <Modal />
                    <Grid item xs={12} sm={12} lg={6} md={6} >
                        <h1 className="aboutus_first_h1">When you <span className="color-1e99d4">Hire us</span>, You Hire <span className="color-1e99d4">Quality and Excellence</span></h1>
                        <h3 className="aboutus_first_h3">No matter the Technology or Services</h3>
                        <p>By entrusting your faith and time in us, {companyName} makes sure your investment is in the right hands. Showing flexibility in our work and delivering results have been the key drivers of our growth.</p>
                        <p>Taking the innovative approach to transform your ideas into reality, you just have to relax and let our Professionals pave the path towards the realization of your ideas into reality!</p>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6}>
                        <CardMedia image={grouppicLogo as any} className="aboutus_first_cardMedia" />
                    </Grid >
                </Grid>

                <Grid container className="aboutus_expension_container">
                    <ExpansionPanel className="aboutus_expension_width">
                        <ExpansionPanelSummary
                            expandIcon={<FaExpandAlt className="color-white" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="aboutus_expensionsummary">
                            <Typography className="aboutus_expensionsummary_typography">Point of Contact</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Chintan Suthar</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensiondetails_typography"><IconButton>
                                        <CardMedia image={skypeLogo as any} className="aboutus_expensiondetails_typography_imge">
                                        </CardMedia>
                                    </IconButton>chintan.suthar90</Typography>
                                </Grid>

                            </Grid>

                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="aboutus_expension_width">
                        <ExpansionPanelSummary
                            expandIcon={<FaExpandAlt className="color-black" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className="aboutus_expensionsummary_typography_second">Blog</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="aboutus_expensiondetails_second">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensionsummary_grid_typography">TypeScript and React</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensionsummary_grid_typography"> TypeScript is quickly becoming a fan favorite of the JavaScript community, adding the age old concept of types to our beloved language. While its just recently became popular it has been around since 2012  but over the past two years its popularity has risen significantly. </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensionsummary_grid_typography"> React has also became a fan favorite in frontend community too. Out of the box, React comes pre-configured for Babel and while Facebook has its own type language, Flow, its not as popular as TypeScript and with adoption growing with TypeScript I want to talk about how to take a new or existing Babel project and convert it to TypeScript. </Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="aboutus_expension_width" >
                        <ExpansionPanelSummary
                            expandIcon={<FaExpandAlt className="color-white" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className="aboutus_expensionsummary">
                            <Typography className="aboutus_expensionsummary_typography">Life at Centillion Softech</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography>We provides flexible timing, decent pay and a healthy environment to work in {companyName}.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography>Our decisions and actions demonstrate Our Values – we believe in putting our Values into practice that creates long-term benefits for our customers and employees.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography>Diversity at {companyName} brings together clients, employees, and partners on a common global platform. We strongly believe that diversity is critical to innovation and it is the central part of the culture across {companyName}'s family.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography>We learn from both our successes and our failures. Our opportunities for growth and development help expand employee’s knowledge and skill levels. We pursue growth and learning as one of our core values.</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="aboutus_expension_width">
                        <ExpansionPanelSummary
                            expandIcon={<FaExpandAlt className="color-black" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className="aboutus_expensionsummary_typography_second">Case Studies</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="aboutus_expensiondetails_second">
                            <Grid container>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid" >
                                    <CardMedia image={niftyCartImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">Nifty Cart</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid">
                                    <CardMedia image={atxBoatsImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">ATX Surf Boats</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid">
                                    <CardMedia image={doctymeImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">Doctyme</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid" >
                                    <CardMedia image={labcantonImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">The Lab Canton</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid">
                                    <CardMedia image={ExultImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">Exult-it</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid">
                                    <CardMedia image={fyuzeImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">Fyuze App</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid" >
                                    <CardMedia image={eventalogImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">Eventalog</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid">
                                    <CardMedia image={memoImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">Memo Maker</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid">
                                    <CardMedia image={fitnessImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">7wfitness</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="casestudies_grid">
                                    <CardMedia image={etruckingImage as any} className="casestudies_cardMedia"></CardMedia>
                                    <h4 className="casestudies_a">Etrucking Software</h4>
                                </Grid>
                                <Grid item xs={12} sm={4} lg={4} md={4} className="casestudies_grid">
                                    <Slider className="margin-bottom-0" {...settings}>
                                        <div>  <CardMedia image={eventalog1 as any} className="image-mobile-perfect"> </CardMedia></div>
                                        <div><CardMedia image={eventalog2 as any} className="image-mobile-perfect"> </CardMedia></div>
                                        <div><CardMedia image={eventalog3 as any} className="image-mobile-perfect "> </CardMedia></div>
                                        <div><CardMedia image={eventalog4 as any} className="image-mobile-perfect"> </CardMedia></div>
                                        <div><CardMedia image={eventalog5 as any} className="image-mobile-perfect"> </CardMedia></div>
                                        <div><CardMedia image={eventalog6 as any} className="image-mobile-perfect"> </CardMedia></div>
                                        <div><CardMedia image={eventalog7 as any} className="image-mobile-perfect"> </CardMedia></div>
                                        <div><CardMedia image={eventalog8 as any} className="image-mobile-perfect"> </CardMedia></div>
                                        <div><CardMedia image={eventalog9 as any} className="image-mobile-perfect"> </CardMedia></div>
                                    </Slider>
                                    <h4 className="casestudies_a">Eventalog</h4>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                {/* about  second div */}
            </div>
        </div>
    )
}

export default withRouter(AboutUs);