import React from 'react';
import {Grid,Container,Box,Hidden} from '@material-ui/core';
import NavBar from '../actualite/drawer';
import Discussions from '../actualite/Discussions'
import ProfileInfo from './profileInfo';
import Couverture from './couverture.js'


function Profil (){
    return (
        <div >

           <Grid container spacing={2}>

           <Container maxWidth="lg"  style={{padding:0 ,}} >

           <Grid  lg={1} >
            <NavBar/>
            </Grid>
            <Box display='flex'>

            <Grid lg={4} xl={4} md={3} sm={3} xs={4}
            style={{ marginTop:78, justifyItems: "center", marginLeft:75,height:'86vh', backgroundColor: "#eaeaf0",
            borderRadius: 3,boxShadow: "1px 1px 1px #9E9E9E",}} >
                  <ProfileInfo/>
             </Grid>


           
                 <Grid   lg={8} xl={10} md={6} sm={5} xs={4}
              style={{ marginTop:78, marginLeft:30, backgroundColor: "red",
              borderRadius: 3,boxShadow: "1px 1px 1px #9E9E9E",}}>
              <Couverture/>
                 </Grid>
          
                    <Grid item  >
                    <Hidden only={['xs','sm']}>
                    <Discussions/>     
                    </Hidden>
      
           </Grid>
                 </Box>
           </Container>
           </Grid>




        </div>

    )
}export default Profil;