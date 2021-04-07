import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Grid } from '@material-ui/core';import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import OutdoorGrillOutlinedIcon from '@material-ui/icons/OutdoorGrillOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import TapAndPlayOutlinedIcon from '@material-ui/icons/TapAndPlayOutlined';
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '115%',
    maxWidth: 225,
    backgroundColor: theme.palette.background.paper,
  },
}));


const Mdata={
  one:{
  data:"Trunkey Solution",
  url:"https://cdn11.bigcommerce.com/s-ufhcuzfxw9/images/stencil/1280x1280/products/13252/12670/AM-KTPHYS__87827.1573683384.jpg?c=2"
},
two:{
  data:"Lab Eqipments",
  url:"https://indianschool.bh/images/facilities/science-lab/3.jpg"
},
three:{
  data:"Lab Furniture",
  url:"https://www.srisankaraschools.org/seniorsecondary/wp-content/uploads/2016/07/physics_lab.jpg"
},
four:{
  data:"Lab packages",
  url:"https://images-na.ssl-images-amazon.com/images/I/A1TaOlFHYwL._AC_SL1500_.jpg"
},
five:{
  data:"Practical Vedio",
  url:"https://static.businessworld.in/article/article_extra_large_image/1471865102_FWK12g_online-learning-470.jpg"
},
six:{
  data:"Online Practical",
  url:"https://www.thelanguagecloud-edu.com/wp-content/uploads/2020/06/online-learning-img-5-480x298.jpg"
}
  
  
}



export default function SelectedListItem() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState('');

  console.log(selectedIndex);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (

    <>
      <Grid container spacing={0}><Grid item xs={2}>
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItem
          button
          selected={selectedIndex === 'one'}
          onClick={(event) => handleListItemClick(event, 'one')}
        >

          <ListItemIcon>
            <HourglassEmptyIcon />
          </ListItemIcon>
          <ListItemText primary="Turnkey Solution" />
          
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 'two'}
          onClick={(event) => handleListItemClick(event, 'two')}
        >
          <ListItemIcon>
            <OutdoorGrillOutlinedIcon  />
          </ListItemIcon>
          <ListItemText primary="Lab Equipments" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex ==='three'}
          onClick={(event) => handleListItemClick(event, 'three')}
        >
          <ListItemIcon>
            <SingleBedIcon/>
          </ListItemIcon>
          <ListItemText primary="Lab Furniture" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 'four'}
          onClick={(event) => handleListItemClick(event, 'four')}
        >
          <ListItemIcon>
            <MoveToInboxOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Lab Packages" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 'five'}
          onClick={(event) => handleListItemClick(event,'five')}
        >
          <ListItemIcon>
            <TapAndPlayOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Practical Vedio" />
        </ListItem>


        <ListItem
          button
          selected={selectedIndex === 'six'}
          onClick={(event) => handleListItemClick(event,'six')}
        >
          <ListItemIcon>
            <PlayCircleFilledWhiteOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Hide" />
        </ListItem>

        <ListItem
          button
        
         
        >
          <ListItemIcon>
            
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>

        <ListItem
          button
        
        
        >
          <ListItemIcon>
           
          </ListItemIcon>
          <ListItemText primary="" />
        </ListItem>
        


      </List>
      
    </div>
    </Grid>


  
    <Grid item xs={2}>
      <SubMenubar index={selectedIndex}/>
    </Grid>

    <Grid item xs={4} >
            <Image index={selectedIndex}/>
    </Grid>



        </Grid>
      </>
  );
}


function SubMenubar(props) {
    const classes = useStyles();
    const [current, setcurrent] = React.useState('');
  
  

   

    if(props.index=== 'one'||props.index=== 'two'||props.index=== 'three'||props.index=== 'four'||props.index=== 'five'){
     

       
    return (

       
       
  
      
      <div className={classes.root} style={{backgroundColor:'lightgray'}}>
        
        <List component="nav" aria-label="main mailbox folders">
  
          <ListItem button > <ListItemText primary="Physics Lab" />{props.index}</ListItem>
            <ListItem  button >  <ListItemText primary="Physics Lab" />{props.index}</ListItem>
            <ListItem  button >  <ListItemText primary="Physics Lab" />{props.index}</ListItem>
            <ListItem  button  >  <ListItemText primary="Physics Lab" />{props.index}</ListItem>
            <ListItem  button >  <ListItemText primary="Physics Lab" />{props.index}</ListItem>
            <ListItem  button >  <ListItemText primary="Physics Lab" />{props.index}</ListItem>
           
  
        </List>
        
        
      </div>
     
      
    );

    }
    else{

      return <h1></h1>
    }
   
  }

  
  
 function Image( props) {

  if(props.index==='one'){
   
      return (
          <div>
     <Card  style={{width:'322px',height:"305px",borderRadius:'0%',opacity:'0.8'}}>

             
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="305"
          width="322"
          image={Mdata.one.url}
          title="Contemplative Reptile"
        />
       <p style={{ position:"absolute",  top:" 50%",  left:" 50%",  transform: "translate(-50%, -50%)", 
       color:"white" ,backgroundColor:"#999793"}}>
         {Mdata.one.data}</p>
      </CardActionArea>
      
    </Card>
          </div>
      )


  }


  if(props.index==='two'){
   
    return (
        <div>
   <Card  style={{width:'322px',height:"305px",borderRadius:'0%',opacity:'0.8'}}>

           
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="305"
        width="322"
        image={Mdata.two.url}
        title="Contemplative Reptile"
      />
     <p style={{ position:"absolute",  top:" 50%",  left:" 50%",  transform: "translate(-50%, -50%)", color:"white",backgroundColor:"#999793"}}>
       {Mdata.two.data}</p>
    </CardActionArea>
    
  </Card>
        </div>
    )


}

if(props.index==='three'){
   
  return (
      <div>
 <Card  style={{width:'322px',height:"305px",borderRadius:'0%',opacity:'0.8'}}>

         
  <CardActionArea>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="305"
      width="322"
      image={Mdata.three.url}
      title="Contemplative Reptile"
    />
   <p style={{ position:"absolute",  top:" 50%",  left:" 50%",  transform: "translate(-50%, -50%)", color:"white",backgroundColor:"#999793"}}>
     {Mdata.three.data}</p>
  </CardActionArea>
  
</Card>
      </div>
  )


}

if(props.index==='four'){
   
  return (
      <div>
 <Card  style={{width:'322px',height:"305px",borderRadius:'0%',opacity:'0.8'}}>

         
  <CardActionArea>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="305"
      width="322"
      image={Mdata.four.url}
      title="Contemplative Reptile"
    />
   <p style={{ position:"absolute",  top:" 50%",  left:" 50%",  transform: "translate(-50%, -50%)", color:"white",backgroundColor:"#999793"}}>
     {Mdata.four.data}</p>
  </CardActionArea>
  
</Card>
      </div>
  )


}

if(props.index==='five'){
   
  return (
      <div>
 <Card  style={{width:'322px',height:"305px",borderRadius:'0%',opacity:'0.8'}}>

         
  <CardActionArea>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="305"
      width="322"
      image={Mdata.five.url}
      title="Contemplative Reptile"
    />
   <p style={{ position:"absolute",  top:" 50%",  left:" 50%",  transform: "translate(-50%, -50%)", color:"white",backgroundColor:"#999793"}}>
     {Mdata.five.data}</p>
  </CardActionArea>
  
</Card>
      </div>
  )


}



else{
  return <h1></h1>
}

  }
  
  
  

