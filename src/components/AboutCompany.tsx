import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const AboutCompany = () => {
    return (
        <>


            <Box
                sx={{
                    padding: '48px 12px',
                    bgcolor: '#f2f5f9',
                    mx: 'auto'
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: 4,
                        padding: "0px 12px"
                    }}
                >

                    {/* Left-Section */}
                    <Box data-aos='fade-down-right' data-aos-delay='200' sx={{ flex: 1, padding: { sm: '48px', xs: '24px' }, borderRadius: '10px', bgcolor: "white" }}>

                        <Typography variant="h6" color="primary" mb='8px'>
                            About Our Company
                        </Typography>
                        <Typography variant='h4' fontWeight="bold" mb='24px' sx={{ fontSize: { md: '56px', } }} >
                            High Range of Exploring Protection
                        </Typography>
                        <Typography variant="body1" color='#787878' mb={'16px'}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sunt debitis sint tempora.
                            Corporis consequuntur illo blanditiis voluptas aperiam quos aliquam totam aliquid rem explicabo.
                        </Typography>
                        <Typography variant="body1" color='#787878' mb={'8px'}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Beatae praesentium recusandae eligendi modi hic.
                        </Typography>




                        <List>
                            <ListItem disablePadding sx={{ padding: '8px 0px' }}>

                                <CheckIcon fontSize='medium' style={{ color: '#015fc9', marginRight: "16px", }} />
                                <ListItemText primary="We can save your money." />

                            </ListItem>

                            <ListItem disablePadding sx={{ padding: '8px 0px' }}>

                                <CheckIcon fontSize='medium' style={{ color: '#015fc9', marginRight: "16px", }} />
                                <ListItemText primary="Production or trading of good" />

                            </ListItem>

                            <ListItem disablePadding sx={{ padding: '8px 0px' }}>

                                <CheckIcon fontSize='medium' style={{ color: '#015fc9', marginRight: "16px", }} />
                                <ListItemText primary="Our life insurance is flexible" />

                            </ListItem>

                        </List>
                        <Button
                            variant="contained"
                            style={{ backgroundColor: '#015fc9', color: '#fff', marginTop: '16px', padding: "16px 48px", borderRadius: "30px" }}
                        >
                            More Information
                        </Button>


                    </Box>





                    {/* Right-Section */}
                    <Box data-aos='fade-down-left' data-aos-delay='200'
                        sx={{
                            flex: 1,
                            padding: { sm: '48px', xs: '24px' },
                            borderRadius: '10px',
                            bgcolor: "white",
                            display: 'grid',
                            gridTemplateRows: { sm: '1fr 1fr', xs: '1fr 3fr', },
                            gap: 4,

                        }}>

                        <Box data-aos='flip-left' data-aos-delay='500' sx={{
                            bgcolor: "#f2f5f9",
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <img
                                src='/img/about-1.png'
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}

                            />

                        </Box>

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "1fr 1fr",
                                },
                                gridTemplateRows: {
                                    xs: "repeat(4, auto)",
                                    sm: "repeat(2, auto)",
                                },
                                gap: 4,
                            }}
                        >

                            <Box bgcolor={'#f2f5f9'} borderRadius={'10px'} padding={'16px'}>

                                <Typography variant='h4' fontWeight={'bold'} color='primary'>129 +</Typography>
                                <Typography variant='h5' color='black'>Insurance Policies</Typography>

                            </Box>

                            <Box bgcolor={'#f2f5f9'} borderRadius={'10px'} padding={'16px'}>

                                <Typography variant='h4' fontWeight={'bold'} color='primary'>99 +</Typography>
                                <Typography variant='h5' color='black'>Awards WON</Typography>

                            </Box>

                            <Box bgcolor={'#f2f5f9'} borderRadius={'10px'} padding={'16px'}>

                                <Typography variant='h4' fontWeight={'bold'} color='primary'>556 +</Typography>
                                <Typography variant='h5' color='black'>Skilled Agents</Typography>

                            </Box>

                            <Box bgcolor={'#f2f5f9'} borderRadius={'10px'} padding={'16px'}>

                                <Typography variant='h4' fontWeight={'bold'} color='primary'>967 +</Typography>
                                <Typography variant='h5' color='black'>Team Members</Typography>

                            </Box>



                        </Box>




                    </Box>


                </Box>


            </Box >


        </>
    )
}

export default AboutCompany