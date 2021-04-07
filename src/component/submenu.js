import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
}));

const data={
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
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >

          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Turnkey Solution" />
          
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Lab Equipments" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Lab Furniture" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Lab Packages" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Practical Vedio" />
        </ListItem>


        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Online Practical" />
        </ListItem>
        


      </List>
      
    </div>
  );
}