import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const pages = ['Home', 'Products', 'Blog', 'contact us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <div className='bg-[#f9f3f0]'>
                <div className='px-32 max-xl:px-10'>
                    <div className='flex justify-between text-[#777] text-sm pt-3 pb-3'>
                        <div>
                            <Link href="/">AR</Link>
                            <Link href="/" className='ms-5'>USD</Link>
                        </div>
                        <div>
                            <Link href="/">Join Us</Link>
                            <Link href="/" className='ms-5'>Sign In</Link>
                        </div>
                    </div>
                    <div className='pb-8'>
                        <AppBar position="sticky" sx={{
                            backgroundColor: '#ffffff',
                            color: "black",
                            transition: 'background-color 0.3s ease-in-out',
                            boxShadow: 'none',
                            borderRadius: "10px"
                        }}>
                            <Container maxWidth="xl">
                                <Toolbar disableGutters>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        href="#app-bar-with-responsive-menu"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Image src="/../logo.webp" width={130} height={50} />
                                    </Typography>

                                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleOpenNavMenu}
                                            color="inherit"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorElNav}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={Boolean(anchorElNav)}
                                            onClose={handleCloseNavMenu}
                                            sx={{
                                                display: { xs: 'block', md: 'none' },
                                            }}
                                        >
                                            {pages.map((page) => (
                                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                    <Link href="/" className='text-black font-medium' sx={{ textTransform: "capitalize" }}>{page}</Link>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        component="a"
                                        href="#app-bar-with-responsive-menu"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'flex', md: 'none' },
                                            flexGrow: 1,
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Image src="/../logo.webp" width={130} height={50} />
                                    </Typography>
                                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                        {pages.map((page) => (
                                            <Button
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'black', display: 'block', textTransform: "capitalize" }}
                                            >
                                                {page}
                                            </Button>
                                        ))}
                                    </Box>

                                    <Box sx={{ flexGrow: 0 }}>
                                        <Tooltip title="Open settings" className='text-[#777]'>
                                            <Link href="/"><SearchIcon /></Link>
                                            <Link href="/" className='ms-5'><FavoriteBorderIcon /></Link>
                                            <Link href="/" className='ms-5'><ShoppingCartOutlinedIcon /></Link>
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className='ms-5'>
                                                <PersonOutlineOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElUser}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElUser)}
                                            onClose={handleCloseUserMenu}
                                        >
                                            {settings.map((setting) => (
                                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                    <Link href="/" sx={{ textTransform: "capitalize" }} className='font-medium capitalize'>{setting}</Link>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Box>
                                </Toolbar>
                            </Container>
                        </AppBar>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
