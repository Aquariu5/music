import MainLayout from "../layouts/MainLayout"
import { ITrack } from "../types/track"
import TrackItem from "./TrackItem"
import {Grid, IconButton, Typography } from "@mui/material"
import { useState } from "react"

interface TrackListProps {
    tracks: ITrack[]
}
const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return <Grid container flexDirection={'column'} sx={{mt: 2}} spacing={2}>
            {
                 tracks.map(track => <TrackItem key={track._id} track={track}/>)
            }
            </Grid>

}

export default TrackList