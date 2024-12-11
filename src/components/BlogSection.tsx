import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";





const cardData = [
    { imgSrc: "img/blog-1.png" },
    { imgSrc: "img/blog-2.png" },
    { imgSrc: "img/blog-3.png" },
]


const BlogSection = () => {
    return (
        <>

            <Box
                sx={{
                    padding: '48px 12px',
                    bgcolor: 'white',
                    mx: 'auto',


                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>


                <Box
                    sx={{
                        padding: '48px 12px',

                    }}
                >


                    <Box textAlign={'center'} maxWidth={'800px'} mx={'auto'} pb={'48px'}>


                        <Typography
                            variant='h5'
                            color='primary'
                            mb={'8px'}
                            fontWeight={500}
                        >
                            From Blog
                        </Typography>

                        <Typography
                            variant='h1'
                            color='black'
                            fontWeight={700}
                            fontSize={{ xs: '32px', sm: '44px', md: '56px' }}
                            mb={'24px'}
                        >
                            News and Updates
                        </Typography>

                        <Typography
                            variant='body1'
                            color='#787878'
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </Typography>


                    </Box>


                    {/*Card-Section*/}

                    <Box
                        display={'grid'}
                        gap={2}
                        gridTemplateColumns={{
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr',
                            lg: '1fr 1fr 1fr',
                            xl: '1fr 1fr 1fr',
                        }}
                        mx={'auto'}

                    >


                        {cardData.map((item, index) => (
                            <Card key={index}
                                sx={{
                                    mt: '24px',
                                    bgcolor: "white",
                                    borderRadius: '10px',
                                    boxShadow: 'none',
                                    transition: '0.3 ease-in-out',

                                    '&:hover': {


                                        '& .imgBox::before': {
                                            top: 0,
                                        },

                                        '& .textBox': {
                                            bgcolor: 'white'
                                        }


                                    }

                                }}
                            >



                                <CardContent>


                                    <Box className='imgBox'
                                        sx={{
                                            bgcolor: "white",
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderTopLeftRadius: '10px',
                                            borderTopRightRadius: '10px',

                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '-100%',
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                bgcolor: '#015fc933',
                                                borderRadius: '10px 10px 0px 0px',
                                                zIndex: 1,
                                                transition: 'top 0.5s ease'


                                            },

                                        }}
                                    >
                                        <img
                                            src={item.imgSrc}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "contain",
                                                objectPosition: "center",
                                            }}
                                        />

                                        <Box className='businessTag'
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                bgcolor: '#015fc9',
                                                color: 'white',
                                                borderTopLeftRadius: '10px',
                                                padding: '8px 24px',
                                                display: 'flex',
                                                alignContent: 'center',
                                                justifyContent: 'center',
                                                boxSizing: 'border-box',
                                                zIndex: 11
                                            }}

                                        >
                                            <Typography>Business</Typography>

                                        </Box>


                                    </Box>

                                    <Box className='textBox'
                                        sx={{
                                            padding: '24px',
                                            bgcolor: '#f2f5f9',
                                            borderBottomLeftRadius: '10px',
                                            borderBottomRightRadius: '10px',

                                        }}
                                    >
                                        {/* flex-box for icon*/}

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignContent: 'center',
                                                justifyContent: 'space-between',
                                                mb: '16px'
                                            }}
                                        >

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <PersonIcon sx={{ color: '#015fc9', fontSize: '15px' }} />
                                                <Typography variant="body2" color="#787878" fontSize={'10px'}>Martin.C</Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <CalendarMonthIcon sx={{ color: '#015fc9', fontSize: '15px' }} />
                                                <Typography variant="body2" color="#787878" fontSize={'10px'}>29 Aug. 2025</Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <CommentIcon sx={{ color: '#015fc9', fontSize: '15px' }} />
                                                <Typography variant="body2" color="#787878" fontSize={'10px'}>6 Comments</Typography>
                                            </Box>

                                        </Box>

                                        <Typography variant="h6" mb={'16px'}
                                            sx={{
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: '#015fc9'
                                                },
                                            }}
                                        >
                                            Leverage agile frameworks to provide
                                        </Typography>

                                        <Typography variant='body1' mb={'16px'} color="#787878">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.
                                        </Typography>

                                        <Button
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{
                                                color: 'black',
                                                fontWeight: 600,

                                                '&:hover': {
                                                    color: '#015fc9'
                                                }
                                            }}
                                        >
                                            Read More
                                        </Button>



                                    </Box>


                                </CardContent>



                            </Card>
                        ))}





                    </Box>

                </Box>

            </Box>

        </>
    )
}

export default BlogSection