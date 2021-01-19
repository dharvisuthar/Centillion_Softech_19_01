import React from 'react';
import { NavigationPaths } from '../../enums/navigation-paths';
import { withRouter } from 'react-router-dom';
import { useMediaPredicate } from "react-media-hook";
import { HashLink as Link } from 'react-router-hash-link';
import * as atxBoatsImage from "../../images/atxboats.png";
import * as niftyCartImage from "../../images/niftycart.png";
import * as doctymeImage from "../../images/doctyme.png";
import * as labcantonImage from "../../images/labcanton.png";
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
import { IconButton, Grid,  withStyles, CardMedia, Typography } from "@material-ui/core";
import { FaPlus, FaDesktop, FaCode, FaUser, FaBusinessTime, FaAccessibleIcon, FaBuilding, FaArrowAltCircleRight } from 'react-icons/fa';
import { companyName, compPhoneNumber } from '../../providers/comp-contact-provider';
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
import * as landingoneLogo from "../../images/main-banner-1.jpg";
import Modal from "../layout-ui/model";
import Slider from 'react-slick';
/**
 * home component
 */
const Home = () => {
  const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");

  /**
 * slider -start
 */
  const width = '100%', height = '500px';
  const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`;
  const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
  const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  user-select: none;
  backgroundColor: rgba(74, 196, 243, 0.9);
  color: #2a2f35;
`;
  const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;  
  left: 48%;
  position: relative;    
  bottom: 30px;
  backgroundColor: #2a2f35;
  color: #2a2f35;
`;

  const CarouselUI = ({ position, total, handleClick, children }) => <Container>
    <Children>{children} </Children>
    {/* <Dots>
    {Array(...Array(total)).map((val, index) =>
      <Dot key={index} onClick={handleClick} data-position={index}>
        {index === position ? '● ' : '○ '}
      </Dot>
    )}
  </Dots> */}
  </Container>;
  const CarouselHeader = makeCarousel(CarouselUI);
  /**
   * slider - end
   */
  const useStyles = withStyles(theme => ({
    root: {
      '& > span': {
        margin: 2,
      },
    },
  }));

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

    <div className="constainer-HomeBar">

      <div className="main_div">
        <div className="hide_div"></div>
        <div className="bg-2a2f35">
          <Modal />
          <Grid container className="container-div-tab" >
            <CarouselHeader defaultWait={10000} >
              <Slide right>
                <div>
                  <Grid container className="carousel_main_grid">
                    <Grid container className="carousel_paper_grid">
                      <Grid item xs={12} sm={12} lg={12} md={12} >
                        <Grid item xs={12} sm={6} lg={6} md={6}>
                          <Typography className="carousel_paper_grid_typography">A Complete Creative Solutions Provider For Web, Mobile & Software.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} md={12} >
                          <CardMedia image={landingoneLogo as any} className="header_cardMedia"> </CardMedia>
                        </Grid>
                      </Grid >
                    </Grid>
                  </Grid>
                </div>
              </Slide>
              <Slide right>
                <div>
                  <Grid container className="carousel_main_grid">
                    <Grid container className="carousel_paper_grid">
                      <Grid item xs={12} sm={12} lg={12} md={12} >
                        <Grid item xs={12} sm={6} lg={6} md={6}>
                          <Typography className="carousel_paper_grid_typography">When you Hire us, You Hire Quality and Excellence.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} md={12} >
                          <CardMedia image={landingoneLogo as any} className="header_cardMedia"> </CardMedia>
                        </Grid>
                      </Grid >
                    </Grid>
                  </Grid>
                </div>
              </Slide>
            </CarouselHeader>
          </Grid>
          {/* Dashboard second div */}
          <Grid container className="grid-dashboard-second">
            <Grid item xs={12}>
              <h1 className="grid_dash_second_h1">Perfect Products are Reflection of Organised Efforts</h1>
              <hr className="hr_border"></hr>
              <h3 className="grid_dash_second_h3_home">Our rich portfolio justifies the fact that {companyName} functions as a World-Class Software Development Company.</h3>
            </Grid>
          </Grid>

          <Grid container spacing={2}  className="main-container-div padding-bottom-50">
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={niftyCartImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="https://niftycart.co/#/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">Nifty Cart</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={atxBoatsImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="http://atxboats-design.com/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">ATX Boat</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={doctymeImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="http://doctyme.com/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">Doctyme</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={labcantonImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="http://thelabcanton.com/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">The Lab Canton</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={ExultImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="http://exultitsolution.com/#/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">Exult-it</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={fyuzeImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="https://fyuze.app/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">Fyuze App</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={eventalogImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="https://www.eventalog.com/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">Eventalog</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={memoImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="https://memomaker.app/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">Memo Maker</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={fitnessImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="http://www.7wfitness.com/#/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">7wfitness</h3>
            </Grid>
            {/* <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
            <CardMedia image={ExultImage} className="image-perfect"> </CardMedia>
            <div className="image-perfect-div">              
              <a href="http://exultitsolution.com/#/" target="_blank"> <Add className="perfect-image-div" /> </a>
            </div>
            <h3 className="grid-dash-second-main-h2">Exult-IT Solutions</h3>
          </Grid> */}
            <Grid item xs={12} sm={12} lg={4} md={4} className="grid-dash-second-main-paper">
              <CardMedia image={etruckingImage as any} className="image-perfect"> </CardMedia>
              <div className="image-perfect-div">
                <a href="http://52.34.154.149:7000/#/" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">Etrucking Software</h3>
            </Grid>
            <Grid item xs={12} sm={12} lg={8} md={8} className="grid-dash-second-main-paper">
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
              <div className="image-perfect-div">
                <a href="" target="_blank"> <FaPlus className="perfect-image-div" /> </a>
              </div>
              <h3 className="grid-dash-second-main-h2">Eventalog</h3>
            </Grid>
          </Grid>
        </div>
        <div className="bg-b7c500-dash">
          <Grid >
            <Typography component="h1" className="grid-dash-third-typography" >Why Work with Centillion Softech?</Typography>
          </Grid>
          <div className="grid-dash-third-main">
            <Grid container className="main-container-div" >
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div className="min-height-415">
                  <IconButton className="why-work-image-div-btn" title="Computer" > <FaDesktop className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">Masterly experienced in technologies</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">Our clients have always trusted us without any second thought because we have more than a decade of experience in delivering various successful projects.</Typography>
                </div>
               <Link to={"/" + NavigationPaths.AboutUs} ><IconButton className="left-arrow-why-work-div"> <FaArrowAltCircleRight /></IconButton></Link> 
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div className="min-height-415">
                  <IconButton className="why-work-image-div-btn" title="Code" > <FaCode className="why-work-image-div " /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">Expertise on Multiple Platforms</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">{companyName} has elite development team which has proficient expertise on the cutting-edge technologies and tools.</Typography>
                </div>
                <Link to={"/" + NavigationPaths.AboutUs} ><IconButton className="left-arrow-why-work-div"> <FaArrowAltCircleRight /></IconButton></Link> 
               </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div className="min-height-415">
                  <IconButton className="why-work-image-div-btn" title="Build" > <FaBuilding className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">Best Project Management Tool</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">To maintain the top notch services we have hands of experience on best project management tools available in the market.</Typography>
                </div>
                <Link to={"/" + NavigationPaths.AboutUs} ><IconButton className="left-arrow-why-work-div"> <FaArrowAltCircleRight /></IconButton></Link> 
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div className="min-height-415">
                  <IconButton className="why-work-image-div-btn" title="AccessTime" > <FaAccessibleIcon className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">24×7 Availability</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">We know that our client's time is valuable and so we strive for them to make use of their time in the most efficient manner.</Typography>
                </div>
                <Link to={"/" + NavigationPaths.AboutUs} ><IconButton className="left-arrow-why-work-div"> <FaArrowAltCircleRight /></IconButton></Link> 
               </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div className="min-height-415">
                  <IconButton className="why-work-image-div-btn" title="Business"> <FaBusinessTime className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">Longterm Business Relationship</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">We strive to be your trusted long term partner and leave no stone unturned to achieve the trustworthy relationship where our client can rely on us as a trusted IT company.</Typography>
                </div>
                <Link to={"/" + NavigationPaths.AboutUs} ><IconButton className="left-arrow-why-work-div"> <FaArrowAltCircleRight /></IconButton></Link> 
               </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4} className="why-work-main-div">
                <div className="min-height-415">
                  <IconButton className="why-work-image-div-btn" title="SupervisorAccount" > <FaUser className="why-work-image-div" /> </IconButton>
                  <Typography component="h3" className="grid-dash-flippy-front-title">We are serving best to our happy clients</Typography>
                  <hr className="why-work-border-dashboard"></hr>
                  <Typography component="h4" className="grid-dash-flippy-front-h4">{companyName} is growing exponentially in its global outreach as well as quality work in all directions.</Typography>
                </div>
                <Link to={"/" + NavigationPaths.AboutUs} ><IconButton className="left-arrow-why-work-div"> <FaArrowAltCircleRight /></IconButton></Link> 
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>

  )
}

export default withRouter(Home);