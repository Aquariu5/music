import MainLayout from "../../layouts/MainLayout"
import { useRouter } from "next/router"
import { Button, Typography, Grid, Card, TextField } from "@mui/material";
import { Box } from "@mui/system";

const TrackPage = () => {
    const router = useRouter();
    const track = {_id: '1', name: 'ziga', author: 'twoi', picture: 'http://localhost:5000/picture/133054a3-9620-41b2-819b-6270831ed77a.PNG', listens: 0, audio: 'http://localhost:5000/audio/69f930af-9b73-4f4e-a45e-0add18623a64.mp3', comments: []};

    console.log(router.query.id);
    return <MainLayout>
            <Card sx={{p: 4, m: 2}}>
                <Grid container flexDirection={'column'} spacing={2}>
                    <Grid item  md={2}>
                            <Button onClick={_ => router.push('/tracks')}>К списку</Button>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item md={2}>
                                <img width={150}  src={track.picture}/>
                            </Grid>
                            <Grid item md={10}>
                                <Grid container flexDirection={'column'}>
                                    <Grid item>
                                        <Typography variant={'body1'} color={'GrayText'}>Исполнитель - {track.author}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'h4'}>Название трека - {track.name}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'subtitle1'}>Прослушиваний - {track.listens}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container flexDirection={'column'} spacing={2}>
                            <Grid item md={12}>
                                <TextField fullWidth placeholder="Ваше имя"></TextField>
                            </Grid>
                            <Grid item md={12}>
                                <TextField fullWidth placeholder="Ваше комментарий"></TextField>
                            </Grid>
                            <Grid item md={12} sx={{ml: 'auto'}}>
                                <Button>Отправить</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </MainLayout>
}

export default TrackPage