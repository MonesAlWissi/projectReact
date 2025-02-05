import React from "react";
import { Box, Typography, Link, Grid } from '@mui/material';
import "./footer.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function RestaurantFooter(){
    return(

        <>
        <div id="footer">
            <div id="footerLeft">
               <p className="PfooterLeft">____________</p>
                <p >C O N T A C T</p>
                <AcUnitIcon/>
                <p>5 Rue Dalou 75015 Paris</p>
                <p><span className="footerSpan">Call</span> +33 156 78 89 56</p>
                <p className="footerSpan">restonest@gmail.com</p>
              
            </div>
            <div id="footerCenter">
                <img src="Screenshot_11.png"></img>
                <p>Join our mailing list for updates</p>
                <p>Get news & offers events</p>
                <input style={{backgroundColor:'black',height:"100px",border:"2px solid orange"}} type="text" placeholder="Email"></input><button style={{backgroundColor:'orange',border:"0px" ,height:"100px"}}  >Subscribe</button>
                <p> &copy; Copyright<span className="footerSpan">.RestoNest</span>  2025 | Designed by <span className="footerSpan"> Sushmitha Shettigar </span> </p>

            </div>
            <div id="footerRight">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
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
// import React from 'react';
// import { Box, Typography, Link, Grid } from '@mui/material';

// function RestaurantFooter() {
//   return (
//     <Box
//       sx={{
//         backgroundColor: 'black',
//         color: 'white',
//         padding: '40px 0',
//         marginTop: 'auto',
//       }}
//     >
//       <Grid container spacing={4} justifyContent="center">
//         {/* العمود الأول: معلومات الاتصال */}
//         <Grid item xs={12} md={3}>
//           <Typography variant="h6" gutterBottom>
         
//             <p>CONTACT</p>
           
//           </Typography>
//           <Typography variant="body2">5 Rue Dalou 75015 Paris</Typography>
//           <Typography variant="body2"> Call +33 156 78 89 56</Typography>
//           <Typography variant="body2"> restonest@gmail.com</Typography>
//         </Grid>

//         {/* العمود الثاني: روابط الحسابات الاجتماعية */}
//         <Grid item xs={12} md={3}>
//           <Typography variant="h6" gutterBottom>
//             تابعنا
//           </Typography>
//           <Link href="https://www.facebook.com/restaurant" color="inherit" target="_blank">
//             <Typography variant="body2" gutterBottom>
//               فيسبوك
//             </Typography>
//           </Link>
//           <Link href="https://www.instagram.com/restaurant" color="inherit" target="_blank">
//             <Typography variant="body2" gutterBottom>
//               إنستغرام
//             </Typography>
//           </Link>
//           <Link href="https://www.twitter.com/restaurant" color="inherit" target="_blank">
//             <Typography variant="body2" gutterBottom>
//               تويتر
//             </Typography>
//           </Link>
//         </Grid>

//         {/* العمود الثالث: ساعات العمل */}
//         <Grid item xs={12} md={3}>
//           <Typography variant="h6" gutterBottom>
//             ساعات العمل
//           </Typography>
//           <Typography variant="body2">السبت - الخميس: 10:00 صباحًا - 10:00 مساءً</Typography>
//           <Typography variant="body2">الجمعة: 12:00 ظهرًا - 10:00 مساءً</Typography>
//         </Grid>
//       </Grid>

//       <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
//         <Typography variant="body2">&copy; Copyright .RestoNest 2025 | Designed by Sushmitha Shettigar</Typography>
//       </Box>
//     </Box>
//   );
// }

// export default RestaurantFooter;
