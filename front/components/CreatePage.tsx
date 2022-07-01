import { Button, Grid, TextField, Card } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout'
import StepWrapper from '../layouts/StepperWrapper'

const TrackCreate = () => {
  const steps = ['ziga', 'twoi', 'dom'];
  const [active, setActive] = useState<number>(1);
  return (
      <Container>
        <StepWrapper steps={steps} activeStep={active}>{}</StepWrapper>
        <Card sx={{p: 2}}>
            <Grid container flexDirection={'column'} sx={{height: '80vh'}} spacing={2}>
                <Grid item>
                    <TextField fullWidth placeholder='Введите название трека'></TextField>
                </Grid>
                <Grid item>
                    <TextField fullWidth placeholder='Введите имя автора'></TextField>
                </Grid>
            </Grid>
            <Grid container justifyContent={'space-between'}>
                <Grid item>
                    <Button onClick={_ => setActive(prev => prev - 1)}>Назад</Button>
                </Grid>
                <Grid item>
                    <Button onClick={_ => setActive(prev => prev + 1)}>Далее</Button>
                </Grid>
            </Grid>
        </Card>
       
      </Container>  
        
  )
}

export default TrackCreate