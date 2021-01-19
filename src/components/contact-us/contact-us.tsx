import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Paper, FormGroup, Button, CardMedia } from "@material-ui/core";
import * as ConatctUSLogo from "../../images/contact-us.jpg";
import * as ContactcallLogo from "../../images/contactus-col.jpg";
import Modal from "../layout-ui/model";

/**
 * contact us component
 */
const ContactUs = () => {

    /**
  * return the elements for home
  */
    return (
        <div className="main_div">
            <div className="hide_div"></div>
            {/* contact us first div */}
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} className="contactus_firstdiv_imgGrid-header">
                    <CardMedia image={ConatctUSLogo as any} className="contactus_firstdiv_grid_image"></CardMedia>
                </Grid >
            </Grid>
            {/* contact us second div */}
            <Grid container spacing={2} className="margin-0 width-100">
                <Modal />
                <Grid item xs={12} sm={12} md={6} lg={6} className="height-500 padding-0 margin-0">
                    <Paper className="contact-sec-div">
                        <FormGroup>
                            <Grid container>

                                <Grid item xs={6} className="carrer-seconddiv-formgrp-grid">
                                    <input placeholder="Your Name" className="contactus_seconddiv_formgrp_input"></input>
                                </Grid>
                                <Grid item xs={6} className="carrer-seconddiv-formgrp-grid1">
                                    <input placeholder="Your Email" className="contactus_seconddiv_formgrp_input"></input>
                                </Grid>
                                <Grid item xs={6} className="carrer-seconddiv-formgrp-grid">
                                    <input placeholder="Company" className="contactus_seconddiv_formgrp_input"></input>
                                </Grid>
                                <Grid item xs={6} className="carrer-seconddiv-formgrp-grid1">
                                    <input placeholder="Phone Number" className="contactus_seconddiv_formgrp_input"></input>
                                </Grid>
                                <Grid item xs={12} className="contactus_seconddiv_formgrp_grid_100">
                                    <select className="contactus_seconddiv_formgrp_select" >
                                        <option value="Select Your budget">Select Your budget</option>
                                        <option value="Less than 10000 USD">Less than 10000 USD</option>
                                        <option value="10000USD - 20000 USD">10000USD - 20000 USD</option>
                                        <option value="20000 USD - 30000 USD">20000 USD - 30000 USD</option>
                                        <option value="30000 USD - 40000 USD">30000 USD - 40000 USD</option>
                                        <option value="Greater than 40000 USD">Greater than 40000 USD</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12} className="contactus_seconddiv_formgrp_grid_100">
                                    <textarea placeholder="Share your thoughts on your project" className="contactus_firstdiv_textarea"></textarea>
                                </Grid>
                                <Grid item xs={12} className="contactus_seconddiv_formgrp_grid2">
                                    <Button color="inherit" className="contactus-seconddiv-formgrp-grid2-btn">
                                        Send us your inquiry
                                             </Button>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="height-500 height-325 padding-0 margin-0">
                    <h2 className="contactus-seconddiv-color">You have an idea or project we can help with?</h2>
                    <CardMedia image={ContactcallLogo as any} className="contact-col-div-img"></CardMedia>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} className="height-500 padding-0 margin-0">
                    <iframe className="map-style" src="https://maps.google.com/maps?q=2nd Floor, Block N, S.G. Road, Safal Mondeal Retail Park, Bodakdev Near, Rajpath Rangoli Rd, Ahmedabad, Gujarat 380056&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(ContactUs);