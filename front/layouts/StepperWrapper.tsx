import { Step, StepLabel, Stepper, Box } from "@mui/material";

interface StepWrapperProps {
    activeStep?: number
    children: React.ReactNode
    steps: string[]
}
const  StepWrapper: React.FC<StepWrapperProps> = ({activeStep = 1, children, steps}) =>{
    return <Box sx={{width: '100%', p: 2}}>
         <Stepper activeStep={activeStep}>
            {
                steps.map(el => <Step key={el}>
                    <StepLabel>{el}</StepLabel>
                    </Step>)
            }
            {children}
        </Stepper>
        </Box>
   
}

export default StepWrapper;