import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const queAns = [
    {
        question: "Q: What happens during Freshers' Week?",
        Answer: 'A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    },

    {
        question: "Q: What is the transfer application process?",

        Answer: "A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."


    },

    {
        question: "Q: Why should I attend community college?",
        Answer: 'A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    },
]



const QuestionSection = () => {
    return (
        <>
            {/*main-container */}
            <Box
                sx={{
                    bgcolor: '#f2f5f9',
                    padding: '48px 12px',

                }}
            >
                {/* inner-container */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { md: "1fr 1fr", sx: '1fr' },
                        padding: '48px 12px'
                    }}
                >

                    {/* Left-side-Text-box */}
                    <Box data-aos='fade-right' data-aos-delay='200'
                        sx={{

                            padding: '0px 24px',
                            marginTop: '48px'
                        }}
                    >


                        <Typography
                            variant='h5'
                            color='primary'
                            mb={'8px'}
                            fontWeight={500}
                        >
                            Some Important FAQ's
                        </Typography>


                        <Typography
                            variant='h1'
                            color='black'
                            fontWeight={700}
                            fontSize={{ xs: '32px', sm: '44px', md: '56px' }}
                            mb={'48px'}
                        >
                            Common Ferquently Asked Questions
                        </Typography>

                        {queAns.map((text, index) => (


                            <Accordion key={index}
                                sx={{
                                    '&.Mui-expanded .MuiAccordionSummary-root': {
                                        bgcolor: '#015fc9',
                                        color: 'white',
                                    }
                                }}
                            >

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        bgcolor: '#f2f5f9',
                                        color: '#015fc9',
                                        borderRadius: '5px'



                                    }}
                                >
                                    <Typography>{text.question}</Typography>

                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography variant="body2" color="#787878">{text.Answer}</Typography>
                                </AccordionDetails>


                            </Accordion>

                        ))}


                    </Box>






                    {/* Right-side-img-box */}
                    <Box data-aos='fade-left' data-aos-delay='200'
                        sx={{

                            padding: '0px 24px',
                            marginTop: '48px'
                        }}
                    >


                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}
                        >
                            <img src="img\carousel-2.png" alt="QueAnsImg"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                }}
                            />

                        </Box>






                    </Box>







                </Box>

            </Box>

        </>
    )
}

export default QuestionSection