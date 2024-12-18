import { ArrowDropDown, Email, Facebook, Instagram, Language, LinkedIn, LocationOn, X } from '@mui/icons-material'
import { AppBar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { ScrollContext } from './ScrollContext';

const TopBar = () => {





    const languages = ["English", "Hindi", "Arabic", "Spanish", "French"];

    const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null); // Anchor for menu
    const [selectedLanguage, setSelectedLanguage] = useState("English"); // State for selected language

    // Open the language menu
    const handleLanguageClick = (event: any) => {
        setLanguageMenuAnchor(event.currentTarget);
    };

    // Close the language menu
    const handleLanguageClose = () => {
        setLanguageMenuAnchor(null);
    };

    // Handle language selection
    const handleLanguageSelect = (language: any) => {
        setSelectedLanguage(language); // Update selected language
        handleLanguageClose(); // Close the menu
    };





    const scrolled = useContext(ScrollContext);




    return (
        <>


            <AppBar
                sx={{
                    boxShadow: 'none',
                    position: 'fixed',
                    transform: scrolled ? "translateY(-100%)" : "translateY(0)",
                    transition: "transform 0.3s ease-in-out",
                }}>
                <Box
                    sx={{
                        backgroundColor: '#f2f5f9',
                        padding: '0px 24px',

                        // display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',


                        display: {
                            xs: "none",
                            sm: "flex",
                            md: "flex",
                            lg: "flex",
                        }


                    }}

                >


                    {/*Left-section*/}
                    <Box
                        display={'flex'}
                        alignItems={'center'}

                    >

                        <IconButton sx={{ padding: '5px' }}>
                            <LocationOn color='primary' fontSize='small' />
                        </IconButton>

                        <Typography color='#6c757d' fontSize={'14px'}>Find A Location</Typography>


                        <Typography color='primary' marginLeft={2} marginRight={2}>|</Typography>



                        <IconButton >
                            <Email color="primary" fontSize='small' />
                        </IconButton>
                        <Typography color='#6c757d' fontSize={'14px'}>example@gmail.com</Typography>

                    </Box>





                    {/*Right-section*/}
                    <Box display={'flex'} alignItems={'center'} >

                        <IconButton>
                            <Facebook color="primary" fontSize='small' />
                        </IconButton>

                        <IconButton>
                            <X color="primary" fontSize='small' />
                        </IconButton>

                        <IconButton>
                            <Instagram color="primary" fontSize='small' />
                        </IconButton>

                        <IconButton>
                            <LinkedIn color="primary" fontSize='small' />
                        </IconButton>


                        <Typography color='primary' marginLeft={2} marginRight={2}>|</Typography>

                        <Box display={'flex'} alignItems={'center'} gap={'8px'}>


                            <Language color="primary" fontSize='small' />



                            <Typography color='black'>{selectedLanguage}</Typography>

                            <IconButton onClick={handleLanguageClick} color='primary'>
                                <ArrowDropDown></ArrowDropDown>
                            </IconButton>

                        </Box>

                        <Menu
                            sx={{
                                "& .MuiPaper-root":
                                {
                                    borderBottomLeftRadius: '20px',
                                    borderBottomRightRadius: '20px',
                                    bgcolor: "#f2f5f9"

                                }
                            }}

                            anchorEl={languageMenuAnchor}
                            open={Boolean(languageMenuAnchor)}
                            onClose={handleLanguageClose}
                        >

                            {languages.map((language) => (


                                <MenuItem
                                    key={language}
                                    onClick={() => handleLanguageSelect(language)}
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#015fc9", // Custom hover background color
                                            color: "white", // Custom hover text color
                                        },

                                        width: "200px",
                                        textAlign: "center"
                                    }}>
                                    {language}

                                </MenuItem>
                            )

                            )}





                        </Menu>




                    </Box>
                </Box>

            </AppBar>

        </>
    )
}

export default TopBar