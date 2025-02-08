import React from "react";
import { Box, Typography, Link, Grid } from '@mui/material';
import "./footer.css"

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
export default function RestaurantFooter(){
    return(

        <>
        <div id="footer">
            <div id="footerLeft">
               <p className="PfooterLeft">____________</p>
                <p >C O N T A C T</p>
                
                <p>5 Rue Dalou 75015 Paris</p>
                <p><span className="footerSpan">Call</span> +33 156 78 89 56</p>
                <p className="footerSpan">restonest@gmail.com</p>
              
            </div>
            <div id="footerCenter">
                <img src="Screenshot_11.png"></img>
                <p>Join our mailing list for updates</p>
                <p>Get news & offers events</p>
                <input style={{backgroundColor:'black',height:"50px",border:"2px solid orange"}} type="text" placeholder="Email"></input><button style={{backgroundColor:'orange',border:"0px" ,height:"50px"}}  >Subscribe</button>
                <p> &copy; Copyright<span className="footerSpan">.RestoNest</span>  2025 | Designed by <span className="footerSpan"> Sushmitha Shettigar </span> </p>

            </div>
            <div id="footerRight">
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>
                <LocalParkingIcon/>
            <p className="PfooterLeft">________________</p>                
            <p>WDRKING HOURS</p>
            <p className="PPfooterLeft">________________</p>   
                <p><span className="footerSpan">Mon-Fri</span>:7:00 am - 10.00 pm</p>
                <p><span className="footerSpan">sat</span>: 7:00 am - 6:00 pm </p>
                <p><span className="footerSpan">sun</span>: 8:00 am - 6:00 pm </p>
            </div>
        </div>
        
        
        </>
    )
}
