import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Grid, CardMedia, FormGroup, Paper } from "@material-ui/core";
import * as careerLogo from "../../images/career.jpg";
import * as infrastructureLogo from "../../images/infrastructure.png";
import * as environmentLogo from "../../images/environment.png";
import * as exposureLogo from "../../images/exposure.png";
import * as cultureLogo from "../../images/culture.png";

/**
* Career component
 */
const Career = () => {

    /**
     * return the elements for Career
     */
    return (
        <div className="main_div">
            <div className="hide_div"></div>
            <Grid container spacing={2} className="width-100">
                <Grid item xs={12} sm={12} md={12} lg={12} className="contactus_firstdiv_imgGrid">
                    <CardMedia image={careerLogo as any} className="contactus_firstdiv_grid_image"></CardMedia>
                </Grid >
            </Grid>
            <Grid container spacing={2} className="main-container-div">
                <Grid item xs={12}>
                    <h3 className="grid_dash_second_h3_career">WE BELIEVE IN BUILDING A TEAM OF ENGINEERS AND NOT JUST DEVELOPERS, AND THEN HELP THEM DO THEIR BEST BY REMOVING ANY BARRIER THAT COMES BETWEEN THEM AND THEIR WORK!</h3>
                    <hr className="hr_border"></hr>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={3}>
                    <Paper className="career_grid_dash_second_main_paper">
                        <FormGroup>
                            <CardMedia image={infrastructureLogo as any} className="career_icon_perfect"> </CardMedia>
                        </FormGroup>

                        <h2 className="grid_Dash_second_main_h2">INFRASTRUCTURE</h2>
                        <p className="grid_Dash_second_main_p">State-of-the-art engineering facility with high performance devices and connectivity.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={3}>
                    <Paper className="career_grid_dash_second_main_paper">
                        <FormGroup>
                            <CardMedia image={environmentLogo as any} className="career_icon_perfect"> </CardMedia>
                        </FormGroup>

                        <h2 className="grid_Dash_second_main_h2">ENVIRONMENT</h2>
                        <p className="grid_Dash_second_main_p">Productivity is function of interest and passion.
Grow your professional career without compromising your technical focus & interests.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={3}>
                    <Paper className="career_grid_dash_second_main_paper">
                        <FormGroup>
                            <CardMedia image={exposureLogo as any} className="career_icon_perfect"> </CardMedia>
                        </FormGroup>
                        <h2 className="grid_Dash_second_main_h2">EXPOSURE</h2>
                        <p className="grid_Dash_second_main_p">Delve into latest technologies, challenging solutions, onsite deliveries & working on interesting assignments.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={3}>
                    <Paper className="career_grid_dash_second_main_paper">
                        <FormGroup>
                            <CardMedia image={cultureLogo as any} className="career_icon_perfect"> </CardMedia>
                        </FormGroup>

                        <h2 className="grid_Dash_second_main_h2">CULTURE</h2>
                        <p className="grid_Dash_second_main_p">In our culture the smartest idea wins, not the strongest personality.</p>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container>
                {/* <h1 className={classes.grid_dash_second_h1}>Open Positions.</h1>
                    <hr className={classes.hr_border}></hr> */}
            </Grid>
            <Grid container className="main-container-div margin-top-70">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <h2>Let's Network.</h2>
                    <Paper>
                        <FormGroup>
                            <Grid container>
                                <Grid item xs={6} className="carrer-seconddiv-formgrp-grid">
                                    <input className="career-input-text" placeholder="Your name"></input>
                                </Grid>
                                <Grid item xs={6} className="carrer-seconddiv-formgrp-grid1">
                                    <input className="career-input-text" placeholder="Your e-mail"></input>
                                </Grid>
                                <Grid item xs={6} className="carrer-seconddiv-formgrp-grid">
                                    <input className="career-input-text" placeholder="Your phone number"></input>
                                </Grid>
                                <Grid item xs={6} className="carrer-seconddiv-formgrp-grid1">
                                    <select className="career-select-drp">
                                        <option value="Year of Experience">Year of Experience</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </Grid>
                                <Grid item xs={12} className="carrer-seconddiv-formgrp-grid">
                                    <div className="career-upload-btn-wrapper">
                                        <button className="btnfileSelect">Upload a file</button>
                                        <input type="file" name="myfile" className="inputblock" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} className="carrer-seconddiv-formgrp-grid">
                                    <textarea className="career-textarea" placeholder="Youe comments"></textarea>
                                </Grid>
                                <Grid item xs={12} className="carrer-seconddiv-formgrp-grid text-align-center">
                                    <Button color="inherit" className="career-seconddiv-formgrp-grid2-btn">
                                        Submit
                                             </Button>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>

                </Grid>
            </Grid>
        </div >

    )
}

export default withRouter(Career);