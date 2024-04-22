import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import BarChart from './Chart/BarChart';
import TopProductSale from './Data/TopProductSale';
import Sidemenu from './Sidemenu';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Overview() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
   
      <Drawer 
      
      variant="permanent"  open={open}>
         <div className="logo flex p-5">
            <h1 className="text-xl font-bold">Narz Shop</h1>
         </div>
        <Divider />
        <Sidemenu />
        
        
      </Drawer>
        <section className="h-screen w-screen bg-blue-100/25">
          <div className="content text-3xl">
                <div className="p-3 grid gap-2 grid-cols-4">
                  <div className="p-5 bg-white rounded-md shadow-md text-center bg-white">
                    <div className="detail">
                      <p className="font-bold">Total Sales</p>
                      <p className="mt-2 text-blue-500">$1,450</p>
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-md shadow-md text-center bg-white">
                    <div className="detail">
                      <p className="font-bold">Total Product Sales</p>
                      <p className="mt-2 text-blue-500">20</p>
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-md shadow-md text-center bg-white">
                    <div className="detail">
                      <p className="font-bold">New Customer</p>
                      <p className="mt-2 text-blue-500">+ 10</p>
                    </div>
                  </div>
                  <div className="p-5 bg-white rounded-md shadow-md text-center bg-white">
                    <div className="detail">
                      <p className="font-bold">Growth Rates/Month</p>
                      <p className="mt-2 text-blue-500">15%</p>
                    </div>
                  </div>

                  
                </div>
                <div className="p-3 grid gap-2 grid-cols-2">
                  
                  <div className="p-5 bg-white rounded-md shadow-md text-center bg-white">
                  <BarChart />
                  </div>
                  <div className="p-5 bg-white rounded-md shadow-md text-center bg-white">
                  
                    <TopProductSale />
                  </div>
                  

                  
                </div>

                  
              
          </div>
        </section>
    </Box>
    </>
  );
}