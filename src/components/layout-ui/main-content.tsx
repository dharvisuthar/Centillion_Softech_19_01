import React, { Suspense, lazy } from 'react';
import { withRouter } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { MDBProgress } from "mdbreact";
import { NavigationPaths } from '../../enums/navigation-paths';

const Home = lazy(() => import("../home/home-container"));
const Aboutus = lazy(() => import("../about-us/about-us-container"));
const Contactus = lazy(() => import("../contact-us/contact-us-container"));
const PortFolio = lazy(() => import("../portfolio/portfolio-container"));
const Career = lazy(() => import("../career/career-container"));
const PrivacyPolicy = lazy(() => import("../privacy-policy/privacy-policy-container"));
const Desclaimer = lazy(() => import("../desclaimer/desclaimer-container"));
const Sitemap = lazy(() => import("../sitemap/sitemap-container"));
const MainContent = () => {

    /**
     * load components
     * 
     */
    const loadComponents = () => {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path={"/" + NavigationPaths.Home} component={Home} />
                    <Route exact path={"/" + NavigationPaths.AboutUs} component={Aboutus} />
                    <Route exact path={"/" + NavigationPaths.ContactUs} component={Contactus} />
                    <Route exact path={"/" + NavigationPaths.PortFolio} component={PortFolio} />
                    <Route exact path={"/" + NavigationPaths.Career} component={Career} />
                    <Route exact path={"/" + NavigationPaths.PrivacyPolicy} component={PrivacyPolicy} />
                    <Route exact path={"/" + NavigationPaths.Desclaimer} component={Desclaimer} />
                    <Route exact path={"/" + NavigationPaths.Sitemap} component={Sitemap} />
                </Switch>
            </Router>
        )
    }

    /**
     * return the main component
     */
    return (
        <Suspense fallback={<MDBProgress />}>
            {
                loadComponents()
            }
        </Suspense>
    )
}

export default withRouter(MainContent);