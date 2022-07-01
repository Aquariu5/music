import { Container } from "@mui/material";
import { useState } from "react";
import NativeNavbar from "../components/NativeNavbar";


interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return  (<>
        <NativeNavbar/>
            <Container>
            {children}
            </Container>
    </>);
}

export default MainLayout;