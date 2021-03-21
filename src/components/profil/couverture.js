import React from 'react';
import {Paper,Card,IconButton,Box, CardContent} from '@material-ui/core';
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {makeStyles} from '@material-ui/styles';
//import image1 from './SideDrawer/image1.jpg';

const useStyles = makeStyles(() => ({
    paper: {
       
        marginRight: 9,
        width: "100%",
        borderRadius: 3,
        marginBottom: 2,
        height:"35vh",
        marginTop: -2,
        backgroundColor: "#eaeaf0",
        backgroundImage: `url()`,
      },
      input:{
        display: "none",

      }


}));
const PhotoCouverture = () => {
const classes = useStyles();
        return (
            <>
             
            <Card className={classes.paper} >
                <CardContent>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      style={{ marginLeft: 380, marginTop: 90 }}
                    >
                      <PhotoCamera/>
                    </IconButton>
                  </label>
                  </CardContent>
                </Card>
                
                </>
        )
}
        export default PhotoCouverture