import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => <Container sx={{ width: 900 }}>
    <Typography variant="h3" component='h1' marginTop={3}>
        Explore th World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
            src='https://thumbs.dreamstime.com/z/las-vegas-welcome-sign-nevada-usa-to-dusk-149286875.jpg'
            alt=""
            height={325}
            width={500}
        />
        <ImageCollage />
    </Box>
    <Box>
        <Typography variant="h6" component='h4' marginTop={3}>
            About this ticket
        </Typography>
        <Typography variant="paragraph" component='p' marginTop={3}>
        Prices were available within the past 7 days and start at $27 for one-way flights and $54 for round trip, 
        for the period specified. Prices and availability are subject to change. Additional terms apply.
        </Typography>
    </Box>
    <Box marginBottom={10}>
        <Typography variant="h6" component='h4' marginTop={3} marginBottom={2}>
            Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
</Container>

export default Tour;