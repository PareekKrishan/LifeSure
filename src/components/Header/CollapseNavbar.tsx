import { AppBar, Box, Button, IconButton, Menu, MenuItem, Slide, TextField, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useContext, useState } from 'react'
import { Search } from '@mui/icons-material';
import { ScrollContext } from './ScrollContext';











const CollapseNavbar = () => {

    const links = ['Home', 'About', 'Services', 'Blog', 'Contact']
    const menu = ['Our Features', 'Our Team', 'Testimonial', 'FAQs', '404 Page']

    //page menu 
    const [pageMenu, setPageMenu] = useState(null);

    const handleMenuClick = (event: any) => {
        setPageMenu(event.currentTarget);
    };

    const handleMenuClose = () => {
        setPageMenu(null);
    };


    //navbar open on click menu button
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)

        if (!isNavOpen) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'auto'
        }


    }




    // Access the scroll state from context
    const scrolled = useContext(ScrollContext);





    // Search page 
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleOpenSearch = () => {
        setIsSearchOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const handleCloseSearch = () => {
        setIsSearchOpen(false);
        document.body.style.overflow = 'auto'; // Enable scrolling
    };





    return (
        <>

            <Box data-aos='fade-left' sx={{

                display: {
                    xs: "flex",
                    sm: "flex",
                    md: "none",
                    lg: "none",
                }
            }}>



                <AppBar position="fixed"
                    sx={{

                        bgcolor: 'white',
                        boxShadow: 'none',
                        top: scrolled ? 0 : { sm: '40px' },// Dynamically move to the top
                        transition: "top 0.3s ease-in-out", // Smooth animation

                    }}>
                    <Toolbar variant="regular" sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>


                        <IconButton>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#015FC9" className="bi bi-slack" viewBox="0 0 16 16">
                                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111.756 8.43 1.68 8.43h1.682zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682zm6.749 1.682c0-.926.755-1.682 1.68-1.682S16 4.964 16 5.889s-.756 1.681-1.68 1.681h-1.681zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68s.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681z" />
                            </svg>
                            <Typography variant='h5' color='primary' ml={"15px"} >LifeSure</Typography>
                        </IconButton>



                        <IconButton edge="start" aria-label="menu" sx={{ color: '#015FC9' }} onClick={toggleNav}>
                            <MenuIcon sx={{ fontSize: '35px', color: '#015FC9' }} />
                        </IconButton>

                    </Toolbar>
                </AppBar>


            </Box>











            {/* nav-bar */}

            <Slide
                direction="down"
                in={isNavOpen}
                mountOnEnter
                unmountOnExit
                easing="ease-in-out"
                timeout={500}
            >

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: "30px 0px",
                        bgcolor: 'white',


                        position: 'fixed',
                        top: '0',
                        left: '0',
                        zIndex: 1000,
                        overflowY: 'auto',
                        width: "100%",

                        height: '100vh'

                    }}>



                    <Box
                        flexGrow={1}
                        sx={{

                            borderRadius: '20px',
                            bgcolor: '#f2f5f9',
                            display: 'flex',
                            alignItems: "center",
                            flexDirection: 'column',
                            padding: '20px',
                            marginTop: { sm: '140px', xs: '0px' },
                            marginBottom: '40px',
                            marginLeft: '20px',
                            marginRight: '20px'




                        }}>


                        {links.map((link) => (
                            <Button
                                key={link}
                                sx={{
                                    color: '#6c757d', padding: { sm: '20px 0px', xs: '10px 0px' },
                                    '&:hover': {
                                        color: '#015fc9'
                                    }
                                }}
                            >
                                {link}
                            </Button>
                        )
                        )}


                        <Button
                            endIcon={<KeyboardArrowDownIcon />}
                            sx={{ color: '#6c757d', padding: { sm: '20px 0px', xs: '10px 0px' }, '&:hover': { color: '#015fc9' } }}
                            onClick={handleMenuClick}

                        >
                            pages
                        </Button>


                        <Menu
                            anchorEl={pageMenu}
                            open={Boolean(pageMenu)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',

                            }}

                            sx={{
                                "& .MuiPaper-root":
                                {

                                    borderRadius: '10px',
                                    bgcolor: "#f2f5f9"

                                }
                            }}
                        >

                            {menu.map((item) => (
                                <MenuItem onClick={handleMenuClose} key={item}
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#015fc9",
                                            color: "white",
                                        },

                                        width: "200px",
                                        margin: '4px 0px'
                                    }}
                                >{item}</MenuItem>
                            )
                            )}


                        </Menu>


                        <Box display={'flex'} gap={3} alignItems={'center'} justifyContent={'center'} mt={3} mb={3}>


                            <IconButton onClick={handleOpenSearch}
                                sx={{
                                    backgroundColor: '#015fc9',
                                    color: 'white',
                                    height: '30px',
                                    width: '30px',
                                    borderRadius: '50%',
                                    padding: "20px",

                                    "&:hover": {
                                        backgroundColor: '#16243d'

                                    }
                                }}
                            >
                                <Search sx={{ color: "white" }} />
                            </IconButton>


                            <Button variant='contained' sx={{ borderRadius: '20px', "&:hover": { bgcolor: '#16243d' } }}>Get a Quote</Button>




                        </Box>


                    </Box>



                </Box>
            </Slide >








            {/* Search-page */}



            <Slide direction='down' in={isSearchOpen} mountOnEnter unmountOnExit  >

                <Box zIndex={1111}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: '#015fc9'
                    }}


                >




                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        padding={{ sm: '16px', xs: '10px' }}
                        bgcolor={'white'}
                        color={'black'}
                        width={'100%'}
                    >

                        <Typography variant='h5' color='black' fontSize={{ xs: '12px', sm: '24px' }}>Search by Keybord</Typography>

                        <Button variant='outlined' onClick={handleCloseSearch} sx={{ marginRight: '40px', color: 'black' }} >
                            <CloseIcon />
                        </Button>



                    </Box>



                    <Box
                        sx={{

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: "100%",
                            gap: '0'

                        }}

                    >

                        <TextField
                            variant="outlined"
                            placeholder="keywords"

                            sx={{
                                backgroundColor: 'white',

                                width: '70%',
                                borderRadius: '5px 0px 0px 5px',
                                '&:hover': { outline: 'none', border: 'none' },
                                border: 'none',
                                outline: 'none'





                            }}
                        />
                        <Button variant='contained' sx={{ bgcolor: '#f2f5f9', color: '#6c757d', border: 'none', outline: 'none', borderRadius: '0px 5px 5px 0px ', height: '56px', boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}><SearchIcon /></Button>



                    </Box>

                </Box>


            </Slide>



        </>
    )
}




export default CollapseNavbar