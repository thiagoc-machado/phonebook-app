import * as React from 'react';

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href={'/'} className='text-light'>
              <i className='fa fa-mobile text-light p-1'/>
              Phone<b>Book</b>
            </Link>
          </Typography>
          <Link href={'/login'}>
            <Button variant='contained' color='success'>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import React from 'react';
// import { Link } from 'react-router-dom';

// let NavBar = () => {
//   return (
//     <React.Fragment>
//       <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
//         <div className='container'>
//           <div className=' navbar-blk'>
//             <Link to={'/'} className='navbar-brand'>
//               <i className='fa fa-mobile text-warning' /> Phone <span className='text-warnig'><b>Book</b>
//               </span>
//               <div class='d-grid gap-2'>
//                 <button class='btn btn-primary me-md-2' type='button'>
//                   Button
//                 </button>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </React.Fragment>
//   );
// };
