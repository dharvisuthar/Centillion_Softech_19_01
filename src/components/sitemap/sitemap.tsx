import React from 'react';
import { NavigationPaths } from '../../enums/navigation-paths';
import { withRouter } from 'react-router-dom';
import { Grid, CardMedia } from "@material-ui/core";
import * as sitemapLogo from "../../images/sitemap.jpg";
import { HashLink as Link } from 'react-router-hash-link';

/**
* SiteMap component
 */
const SiteMap = () => {

    /**
     * return the elements for sitemap
     */
    return (
        <div className="sitemap-main-div">
            <div className="main_div">
                <div className="hide_div"></div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} className="contactus_firstdiv_imgGrid">
                        <CardMedia image={sitemapLogo as any} className="contactus_firstdiv_grid_image"></CardMedia>
                    </Grid >
                </Grid>
                <Grid container spacing={2} className="footer_seconddiv_padding">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="border-bt-sitemap">
                        <p className="sitemap_heading">Pages</p>
                        <Grid container className="btm-space-sitemap">
                            <Grid item xs={12} sm={12} md={3} lg={3}> <Link to={"/" + NavigationPaths.Home} className="sitemap-btns">Home</Link></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><Link to={"/" + NavigationPaths.PortFolio} className="sitemap-btns">PortFolio</Link></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><Link to={"/" + NavigationPaths.AboutUs} className="sitemap-btns">About Us</Link></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><Link to={"/" + NavigationPaths.ContactUs} className="sitemap-btns">Contact Us</Link></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}> <Link to={"/" + NavigationPaths.Sitemap} className="sitemap-btns">Sitemap</Link></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><Link to={"/" + NavigationPaths.PrivacyPolicy} className="sitemap-btns">Privacy Policy</Link></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><Link to={"/" + NavigationPaths.Desclaimer} className="sitemap-btns">Desclaimer</Link></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><Link to={"/" + NavigationPaths.Career} className="sitemap-btns">Careers</Link></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} className="border-bt-sitemap">
                        <p className="sitemap_heading">Technology</p>
                        <Grid container className="btm-space-sitemap">
                            <Grid item xs={12} sm={12} md={3} lg={3}> <span className="sitemap-btns">React</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">C#</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Angular js</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">TypeScript</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">VB.Net</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Php</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">SQL Server</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Mongo Db</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Block chain technology</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Excel Automation</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Java</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">AWS services</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Android</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">IOS</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Crystal Reports</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Tableau</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Telerik controls</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Vue js</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Lavarel js</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Knockout js</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Paython</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Windows</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Node.js</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">HTML 5</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">CSS 3</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Asp.net MVC 5</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Asp.net Core</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Linux Server</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Odoo</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Nope Commerce</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Graphic Design</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Paypal</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Stripe</span></Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}><span className="sitemap-btns">Braintree</span></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} className="border-bt-sitemap">
                        <p className="sitemap_heading">Hire Developers</p>
                        <Grid container className="btm-space-sitemap">
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default withRouter(SiteMap);