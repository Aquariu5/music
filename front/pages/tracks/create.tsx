import { Card, Grid, Typography, Box, Stepper } from "@mui/material";
import { Button } from "@mui/material";
import TrackCreate from "../../components/CreatePage";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {

    
    return <MainLayout>
        <Grid container justifyContent={'center'}>
            <TrackCreate/>
        </Grid>
    </MainLayout>
    
}

export default Create;