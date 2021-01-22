import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, CardMedia } from "@material-ui/core";
import * as  privacypolicyLogo from "../../images/privacy_policy.jpg";

/**
* Privacy Policy component
 */
const PrivacyPolicy = () => {

    /**
     * return the elements for PrivacyPolicy
     */
    return (
        <div className="sitemap-main-div">
            <div className="main_div">
                <div className="hide_div"></div>
                <Grid container className="width-100">
                    <Grid item xs={12} sm={12} md={12} lg={12} className="contactus_firstdiv_imgGrid">
                        <CardMedia image={privacypolicyLogo as any} className="contactus_firstdiv_grid_image"></CardMedia>
                    </Grid >
                </Grid>
                <Grid container spacing={3} className="footer_seconddiv_padding">
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <p className="colorb7c500-privacy-policy title-privacy-policy" >Privacy Policy</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9} className="col-privacy-policy">
                        <p className="p-privacy-policy">Centillion (“us”, “we”, or “our”) operates the <a href="https://www.Centillion.com" target="_blank">https://www.Centillion.com</a> website (hereinafter referred to as the “Service”). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. The Privacy Policy for Centillion has been created with the help of Terms Feed. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from <a href="https://www.Centillion.com" target="_blank">https://www.Centillion.com</a></p>
                        <p className="colorb7c500-privacy-policy heading-privacy-policy" >Definitions</p>
                        <p className="heading-privacy-policy">Service</p>
                        <p className="p-privacy-policy">Service is the <a href="https://www.Centillion.com" target="_blank">https://www.Centillion.com</a> website operated by Centillion</p>
                        <p className="heading-privacy-policy">Personal Data</p>
                        <p className="p-privacy-policy">Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
                        <p className="heading-privacy-policy">Usage Data</p>
                        <p className="p-privacy-policy">Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                        <p className="heading-privacy-policy">Cookies</p>
                        <p className="p-privacy-policy">Cookies are small files stored on your device (computer or mobile device).</p>
                        <p className="heading-privacy-policy">Information Collection and Use</p>
                        <p className="p-privacy-policy">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                        <p className="colorb7c500-privacy-policy heading-privacy-policy" >Types of Data Collected</p>
                        <p className="heading-privacy-policy">Personal Data</p>
                        <p className="p-privacy-policy">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally, identifiable information may include, but is not limited to:</p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">Email address</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">First name and last name</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">Phone number</li></ul></p>
                        <p className="colorb7c500-privacy-policy heading-privacy-policy" >Cookies and Usage Data</p>
                        <p className="heading-privacy-policy">Usage Data</p>
                        <p className="p-privacy-policy">We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                        <p className="heading-privacy-policy">Tracking & Cookies Data</p>
                        <p className="p-privacy-policy">We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
                        <p className="p-privacy-policy">Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyse our Service.</p>
                        <p className="p-privacy-policy">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                        <p className="heading-privacy-policy">Examples of Cookies we use:</p>
                        <p className="p-privacy-policy"><span className="font-weight-600">Session Cookies.</span> We use Session Cookies to operate our Service.</p>
                        <p className="p-privacy-policy"><span className="font-weight-600">Preference Cookies.</span> We use Preference Cookies to remember your preferences and various settings.</p>
                        <p className="p-privacy-policy"><span className="font-weight-600">Security Cookies.</span> We use Security Cookies for security purposes.</p>
                        <p className="heading-privacy-policy">Use of Data</p>
                        <p className="p-privacy-policy">Centillion uses the collected data for various purposes:</p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To provide and maintain the Service</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To notify you about changes to our Service</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To allow you to participate in interactive features of our Service when you choose to do so</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To provide customer care and support</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To provide analysis or valuable information so that we can improve the Service</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To monitor the usage of the Service</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To detect, prevent and address technical issues</li></ul></p>
                        <p className="heading-privacy-policy">Transfer Of Data</p>
                        <p className="p-privacy-policy">Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                        <p className="p-privacy-policy">If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there.</p>
                        <p className="p-privacy-policy">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                        <p className="p-privacy-policy">Centillion will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                        <p className="colorb7c500-privacy-policy heading-privacy-policy" >Disclosure Of Data</p>
                        <p className="heading-privacy-policy">Legal Requirements</p>
                        <p className="p-privacy-policy">Centillion may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To comply with a legal obligation</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To protect and defend the rights or property of Centillion</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To prevent or investigate possible wrongdoing in connection with the Service</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To protect the personal safety of users of the Service or the public</li></ul></p>
                        <p className="p-privacy-policy"><ul><li className="font-weight-600">To protect against legal liability</li></ul></p>
                        <p className="p-privacy-policy">As an European citizen, under GDPR, you have certain individual rights. You can learn more about these guides in the GDPR Guide.</p>
                        <p className="heading-privacy-policy">Security of Data</p>
                        <p className="p-privacy-policy">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                        <p className="heading-privacy-policy">Service Providers</p>
                        <p className="p-privacy-policy">We may employ third party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used</p>         
                        <p className="p-privacy-policy">These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>         
                        <p className="heading-privacy-policy">Links to Other Sites</p>
                        <p className="p-privacy-policy">Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p> 
                        <p className="p-privacy-policy">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>         
                        <p className="heading-privacy-policy">Children’s Privacy</p>
                        <p className="p-privacy-policy">Our Service does not address anyone under the age of 18 (“Children”).</p>   
                        <p className="p-privacy-policy">We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>         
                        <p className="heading-privacy-policy">Changes to This Privacy Policy</p>
                        <p className="p-privacy-policy">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the “effective date” at the top of this Privacy Policy.</p>   
                        <p className="p-privacy-policy">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>         
                        <p className="heading-privacy-policy">Contact Us</p></Grid>
                       </Grid>
            </div>
        </div>
    )
}

export default withRouter(PrivacyPolicy);