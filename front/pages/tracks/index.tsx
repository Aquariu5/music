import { Card, Grid, Typography, Box } from "@mui/material";
import { Button } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import { ITrack } from "../../types/track";

const Tracks = () => {
    const router = useRouter();

    const tracks: ITrack[] = [
        {_id: '1', name: 'ziga', author: 'twoi', picture: 'http://localhost:5000/picture/133054a3-9620-41b2-819b-6270831ed77a.PNG', audio: 'http://localhost:5000/audio/69f930af-9b73-4f4e-a45e-0add18623a64.mp3', comments: []},
        {_id: '2', name: 'dom', author: 'dalshe', picture: 'http://localhost:5000/picture/133054a3-9620-41b2-819b-6270831ed77a.PNG', audio: 'http://localhost:5000/audio/69f930af-9b73-4f4e-a45e-0add18623a64.mp3', comments: []}
    ]

    return <MainLayout>
        <Grid container justifyContent={'center'}>
            <Card sx={{width: '80%', margin: '10px 20px'}}>
                <Box sx={{p: 2}}>
                    <Grid container justifyContent={'space-between'}>
                        <Typography variant={'h6'}>Список треков</Typography>
                        <Button onClick={_ => router.push('/tracks/create')}>Загрузить</Button>
                    </Grid>
                </Box>
                <TrackList tracks={tracks}/>
            </Card>
        </Grid>
    </MainLayout>
}

export default Tracks;
