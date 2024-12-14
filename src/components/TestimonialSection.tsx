
import { Box, Card, CardContent, Rating, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';

const cardData = [
    { imgSrc: 'img/testimonial-1.jpg', rating: 5 },
    { imgSrc: 'img/testimonial-2.jpg', rating: 4 },
    { imgSrc: 'img/testimonial-3.jpg', rating: 3 },
]


const TestimonialSection = () => {


    const settings = {
        Infinity: true,
        speed: 700,
        swipe: true,

        autoplay: true,
        autoplaySpeed: 2000,

        arrows: true,

        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },

            {
                breakpoint: 1440,
                settings: { slidesToShow: 2 },
            },

            {
                breakpoint: 2560,
                settings: { slidesToShow: 3 },
            },
        ],

    }



    return (
        <>


            <Box
                sx={{
                    padding: '48px 12px',
                    bgcolor: 'white',
                    mx: 'auto',
                }}>


                <Box
                    sx={{
                        padding: '0px 12px',

                    }}
                >


                    <Box data-aos='zoom-in-up' data-aos-delay='200'
                        textAlign={'center'} maxWidth={'800px'} mx={'auto'} pb={'48px'} mb={'48px'}>


                        <Typography
                            variant='h5'
                            color='primary'
                            mb={'8px'}
                            fontWeight={500}
                        >
                            Testimonial
                        </Typography>

                        <Typography
                            variant='h1'
                            color='black'
                            fontWeight={700}
                            fontSize={{ xs: '32px', sm: '44px', md: '56px' }}
                            mb={'24px'}
                        >
                            What Our Customers Are Saying
                        </Typography>

                        <Typography
                            variant='body1'
                            color='#787878'
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </Typography>


                    </Box>









                    <Box
                        width={'100%'}

                    >


                        <Slider {...settings}>


                            {/*Card-Section */}

                            {cardData.map((item, index) => (
                                <Box data-aos='zoom-in-down' data-aos-delay='200'
                                    sx={{
                                        width: {
                                            lg: '635.5px',
                                            md: '455.5px',
                                            xs: '335.5px',
                                        },


                                    }}
                                >


                                    <Card key={index}
                                        sx={{
                                            boxShadow: 'none',
                                            bgcolor: 'white',


                                        }}
                                    >

                                        <CardContent >

                                            <Box
                                                sx={{
                                                    borderRadius: '10px',
                                                    bgcolor: '#f2f5f9',
                                                    display: 'grid',
                                                    gridTemplateColumns: {
                                                        xs: '1fr 2fr',
                                                        xl: '1fr 3fr',
                                                    }
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        borderRadius: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <img className="image"
                                                        src={item.imgSrc}
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            objectPosition: "center",
                                                        }}
                                                    />
                                                </Box>


                                                <Box
                                                    sx={{
                                                        padding: '24px'
                                                    }}
                                                >

                                                    <Typography variant='h5' color='#16243d'>Client Name</Typography>
                                                    <Typography variant='body1' color='#787878' mb='16px'>Profession</Typography>

                                                    <Rating sx={{ color: '#015fc9', mb: '16px' }} name='read-only' value={item.rating}></Rating> {/*Rating from client */}

                                                    <Typography variant='body1' color='#787878'>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam,
                                                    </Typography>





                                                </Box>


                                            </Box>



                                        </CardContent>



                                    </Card>



                                </Box>
                            ))}

                        </Slider>


                    </Box>

















                </Box>

            </Box >


        </>
    )
}

export default TestimonialSection



const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <Box data-aos='fade-left'
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '-58px',
                left: '30px',
                cursor: 'pointer',
                zIndex: 1,
                padding: '5px 30px',
                borderRadius: '30px',
                bgcolor: '#015fc9',
                color: 'white',
                transition: '0.5s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                '&:hover': {
                    bgcolor: '#16243d'
                }

            }}
        >

            <ArrowBackIcon />


        </Box>
    )
}

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <Box data-aos='fade-right'
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: '-58px',
                right: '30px',
                cursor: 'pointer',
                zIndex: 1,
                padding: '5px 30px',
                borderRadius: '30px',
                bgcolor: '#015fc9',
                color: 'white',
                transition: '0.5s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                '&:hover': {
                    bgcolor: '#16243d'
                }

            }}
        >

            <ArrowForwardIcon />


        </Box>
    )
}