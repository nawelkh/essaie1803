import React from 'react'
import {Grid,Box,Hidden,Container,Card,CardContent,Typography} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Discussions from '../actualite/Discussions';
import NavBar from '../actualite/drawer';

const useStyles = makeStyles((theme) => ({

    listeGroupes:{
        marginTop:55,
        padding:'0 85px '


    },



}));



export default function Groupes() {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div>
              <Grid container spacing={3}>
             
             
              <Container maxWidth="lg" style={{padding:0 ,}} >

              <Grid item xs={8} sm={8} md={12} lg={12} className={classes.topimg} 
                        style={{ marginTop:150,marginRight:50,padding:'0 30px',marginLeft: 55 }}
                        > 
                        <Box display='flex' >
                            
                        <Box style={{paddingTop:40}}>
                                            <h3 className={classes.title}>UniSwap Members </h3>
                            <p style={{color:'white',marginTop:0}}>Check what your friends have been up to!</p>
                            </Box>
                            <Hidden only={['xs', 'sm']}>

                            <img ms={2} src={process.env.PUBLIC_URL + '/images/i2.png'}
                            style={{marginLeft:'auto',marginBottom:'auto'}}
                            /></Hidden>

                    </Box>
       
                   </Grid>
      

              <Grid item lg={1} >
                <NavBar/>
              </Grid>

              <Grid lg={12} className={classes.listeGroupes} >
                  
                  <Card>
                  <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                      Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                        Cras elementum ultrices diam. Maecenas ligula massa, varius a.
                      </Typography>
                  </CardContent>
                  </Card>


              </Grid>

              <Grid item  >

                <Hidden only={['xs','sm']}>
                <Discussions/>     
                </Hidden>
        
             </Grid>

              </Container>


              </Grid>
        </div>
    )
}
