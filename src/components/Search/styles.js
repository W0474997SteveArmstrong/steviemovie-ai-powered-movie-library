import { styled } from '@mui/system';
import { IconButton, Toolbar } from '@mui/material';

const drawerWidth = '240px';

export const StyledDiv = styled('div')({
  display: 'flex',
  height: '100%',
});

export const StyledMain = styled('main')({
  flexGrow: 1,
  padding: '2em',
});

// Before
// export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   height: '80px',
//   marginLeft: '240px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   [theme.breakpoints.down('sm')]: {
//     flexWrap: 'wrap',
//   },
// }));

// After

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  marginLeft: '240px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    justifyContent: 'space-evenly',
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  // The styles are applied only to devices with screensize above small.
  // This button is therefore hidden on every device which is not a mobile device.
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

// Before
// export const StyledGroup = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   [theme.breakpoints.down('sm')]: {
//     flexWrap: 'wrap',
//   },
// }));

// After
export const StyledGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    '&:last-child': {
      marginLeft: 'auto',
    },
  },
  '&:first-of-type".': {
    marginRight: 'auto',
  },
}));

export const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const LinkButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    color: 'white !important',
    textDecoration: 'none',
  },
}));

export const NavDrawer = styled('div')(({ theme }) => ({
  // Applicable for everything that is not mobile.
  [theme.breakpoints.up('sm')]: {
    // stored in a variable because sidebar has constant width
    width: drawerWidth,
    flexShrink: 0,
  },

}));

export const DrawerPaper = styled('div')(({ theme }) => ({
  width: drawerWidth,
}));

export const SearchContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'Center',
    width: '100%',
  },
}));

export const StyledInput = styled('div')(({ theme }) => ({
  color: theme.palette.mode === 'light' && 'black',
  filter: theme.palette.mode === 'light' && 'invert(1)',
  [theme.breakpoints.down('sm')]: {
    marginTop: '-10px',
    marginBottom: '10px',
  },
}));
