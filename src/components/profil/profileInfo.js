import React from 'react';
import {Typography, Button,Divider,Avatar, CardContent,Card} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  
    profil:{
       

        backgroundColor: "#eaeaf0",
       marginTop:40,
        height:'100%',
       },
}));
const ProfileInfo = () => {
    const classes = useStyles();
            return (
                <Card className={classes.profil}>
                  <CardContent>
                  <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
                <Typography style={{ marginLeft: 95, fontWeight: "600" }}>
                  {" "}
                  Jenna Smith
                </Typography>
                <Typography>
                  {" "}
                  <span style={{ fontWeight: 600, marginLeft: 95, marginButtom:20 }}>
                    {" "}
                    200{" "}
                  </span>{" "}
                  followers{" "}
                </Typography>
                <Divider />
                <Button
                  style={{
                    backgroundImage:
                    "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                    color: "#ffff",
                    marginTop: 20,
                    marginButtom: 10,
                    marginRight: 10,
                    marginLeft: 35,
                    boxShadow: "1px 1px 1px #9E9E9E",
                  }}
                >
                  S'abonner
                </Button>
                <Button
                  style={{
                    backgroundImage:
                    "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                    color: "#ffff",
                    marginTop: 20,
                    marginButtom: 50,
                   
                    boxShadow: "1px 1px 1px #9E9E9E",
                  }}
                >
                  Contacter
                </Button>
    
                <Typography style={{ marginTop: 20 ,marginLeft:40,}}>
                  {" "}
                  <span style={{ fontWeight: 600 }}> Nom: </span>Jenna
                </Typography>
                <Typography style={{ marginTop: 20 ,marginLeft:40,}}>
                  <span style={{ fontWeight: 600 }}> Prénom : </span> Smith
                </Typography>
                <Typography style={{ marginTop: 20 ,marginLeft:40, }}>
                  {" "}
                  <span style={{ fontWeight: 600 }}> Age: </span>25
                </Typography>
                <Typography style={{ marginTop: 20 ,marginLeft:40, }}>
                  {" "}
                  <span style={{ fontWeight: 600 }}> Département:</span>{" "}
                  Informatique
                </Typography>
                <Typography style={{ marginTop: 20 ,marginLeft:40,}}>
                  {" "}
                  <span style={{ fontWeight: 600 }}> Spécialité:</span> ISI
                </Typography>
                <Typography style={{ marginTop: 20 ,marginLeft:40, }}>
                  {" "}
                  <span style={{ fontWeight: 600 }}> Niveau d'étude: </span> Master2
                </Typography>
                    
    
                </CardContent>
                </Card>
            )}
    
    export default ProfileInfo
    