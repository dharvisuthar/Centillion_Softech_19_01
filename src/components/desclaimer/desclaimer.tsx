import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, CardMedia, Typography } from "@material-ui/core";
import { companyName, compPhoneNumber } from '../../providers/comp-contact-provider';
import * as desclaimerLogo from "../../images/Disclaimer1.png";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { FaExpandAlt } from 'react-icons/fa';

/**
* Desclaimer component
 */
const Desclaimer = () => {

    /**
     * return the elements for PrivacyPolicy
     */
    return (
        <div className="sitemap-main-div">
            <div className="main_div">
                <div className="hide_div"></div>
                <Grid container className="width-100">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="contactus_firstdiv_imgGrid">
                        <CardMedia image={desclaimerLogo as any} className="contactus_firstdiv_grid_image"></CardMedia>
                    </Grid >
                </Grid>
                <Grid container className="desclaimer_seconddiv_padding width-100">
                    <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
                    <h3 className="p-privacy-policy colorb7c500-privacy-policy">Find us Right Now</h3>
                    <p className="p-privacy-policy">Best <span className="font-weight-600">{companyName}</span> is a Ahmedabad based IT company, Our core expertise lies in Software Development, Website Design & Development, Mobile App Development, E-commerce Website Solutions and Web Marketing Services. While this website may showcase client logos & projects, these materials are copyright to their respective owners and Best <span className="font-weight-600">{companyName}</span> does not suggest any ownership over these logos or project, implied or otherwise unless specifically mentioned.</p>
                    <h3 className="p-privacy-policy colorb7c500-privacy-policy">No Warranties</h3>
                    <p className="p-privacy-policy">This website is provided "as is" without any representations or warranties, express or implied. Best <span className="font-weight-600">{companyName}</span> makes no representations or warranties in relation to this website or the information and materials provided on this website. Without prejudice to the generality of the foregoing paragraph, Best <span className="font-weight-600">{companyName}</span> does not warrant that: this website will be constantly available, or available at all; or the information on this website is complete, true, accurate or non-misleading.</p>
                    <h3 className="p-privacy-policy colorb7c500-privacy-policy">Limitations of liability</h3>
                    <p className="p-privacy-policy">This website is provided "as is" without any representations or warranties, express or implied. Best <span className="font-weight-600">{companyName}</span> makes no representations or warranties in relation to this website or the information and materials provided on this website. Without prejudice to the generality of the foregoing paragraph, Best <span className="font-weight-600">{companyName}</span> does not warrant that: this website will be constantly available, or available at all; or the information on this website is complete, true, accurate or non-misleading.</p>
                    <h3 className="p-privacy-policy colorb7c500-privacy-policy">Reasonableness</h3>
                    <p className="p-privacy-policy">By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable. If you do not think they are reasonable, you must not use this website.</p>
                    <h3 className="p-privacy-policy colorb7c500-privacy-policy">Other Parties</h3>
                    <p className="p-privacy-policy">You accept that, as a limited liability entity, Best <span className="font-weight-600">{companyName}</span> has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against Best <span className="font-weight-600">{companyName}</span> officers or employees in respect of any losses you suffer in connection with the website. You agree that the limitations of warranties and liability set out in this website disclaimer will protect Best <span className="font-weight-600">{companyName}</span> officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as Best <span className="font-weight-600">{companyName}</span>.</p>
                </Grid>
                <Grid container className="aboutus_expension_container width-100">
                    <ExpansionPanel className="aboutus_expension_width">
                        <ExpansionPanelSummary
                            expandIcon={<FaExpandAlt className="color-white" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="aboutus_expensionsummary">
                            <Typography className="aboutus_expensionsummary_typography">Custom Software Developement</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Product Developement</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">SaaS Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">CRM Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">BI App Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Database Management Solutions</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Software Consulting</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Integration Solutions</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Big Data Solutions</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="aboutus_expension_width">
                        <ExpansionPanelSummary
                            expandIcon={<FaExpandAlt className="color-black" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className="aboutus_expensionsummary_typography_second">Mobile Application Developement</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="aboutus_expensiondetails_second">
                            <Grid container >
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensionsummary_grid_typography">Android Application Developement</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">iPhone Application Development</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">iPad Application Development</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">Windows Mobile App Development</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">Hybrid Mobile App Development</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">Enterprise Mobility Solutions</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">iPhone Games Development</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">iPad Games Development</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">iPad Social App Development</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">Android Games Development</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">iOS 7 Development</Typography>
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
                            <Typography className="aboutus_expensionsummary_typography">Web Desing & Developement</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">eCommerce Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Amazon Webstore Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Custom eCommerce Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Drupal UberCart Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">OpenCart Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">ZenCart Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Shopify Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Magento Extension Development</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Know More About Magento</Typography>
                                    <Typography className="aboutus_expensiondetails_grid_typograpgy">Redesign Magento Store</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className="aboutus_expension_width">
                        <ExpansionPanelSummary
                            expandIcon={<FaExpandAlt className="color-black" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className="aboutus_expensionsummary_typography_second">Support</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="aboutus_expensiondetails_second">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} lg={12} className="padding_5">
                                    <Typography className="aboutus_expensionsummary_grid_typography">Tech Support</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">Web Hosting</Typography>
                                    <Typography className="aboutus_expensionsummary_grid_typography">Domain Registration</Typography>
                                </Grid>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
            </div>
        </div>
    )
}

export default withRouter(Desclaimer);