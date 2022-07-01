import MainLayout from "../layouts/MainLayout"
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import { ITrack } from "../types/track"
import {Image, PlayArrow, StopCircle, StopCircleTwoTone} from "@mui/icons-material"
import { Box } from "@mui/system"
import React, { useReducer, useState } from "react"
import { useRouter } from "next/router"

interface TrackProps {
    track: ITrack
}

const TrackItem: React.FC<TrackProps> = ({track}) => {

    // return <Grid container>
    //     <PlayArrow/>
    //     <Image src={track.picture}/>
    //     <Grid container flexDirection={'column'}>
    //         <Typography>{track.name}</Typography>
    //         <Typography>{track.author\\}</Typography>
    //     </Grid>
    // </Grid>

    const router = useRouter();
    const [active, setActive] = useState(false);

    const selectTrack = (e: React.ChangeEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setActive(prev => !prev);
    }

    return (
        <Grid item>
            <Card sx={{border: '1px solid gray'}} onClick={_ => router.push(`/tracks/${track._id}`)}>
                <CardContent>
                    <Grid container>
                        <Grid item md={1}>
                            <IconButton onClick={(e: React.ChangeEvent<HTMLButtonElement>) => selectTrack(e)}>
                                {
                                    active ?
                                    <StopCircleTwoTone/>
                                    :
                                    <PlayArrow/>
                                }

                            </IconButton>
                        </Grid>

                        <Grid item md={1}>
                            <CardMedia
                                component={'img'}
                                sx={{width: 55}}
                                image={track.picture}
                                alt={'Обложка музыки'}
                            >
                            </CardMedia>
                        </Grid>

                        <Grid item md={8}>
                            <Grid container flexDirection={'column'}>
                                <Typography variant={'subtitle1'}>{track.name}</Typography>
                                <Typography variant={'subtitle2'} color='GrayText'>{track.author}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={2} alignSelf={'flex-end'}>
                            <Box>
                                { active && <Typography variant="subtitle2" textAlign={'right'}>02:53</Typography>}
                            </Box>
                            
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        </Grid>
        
    )
            
    
    
}

export default TrackItem