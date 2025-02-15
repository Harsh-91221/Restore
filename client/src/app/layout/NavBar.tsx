import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}
export default function NavBar({toggleDarkMode, darkMode}:props) {
  return (
    <AppBar position='fixed'>
        <Toolbar>
            <Typography variant="h6">
                GlideGear
            </Typography>
            <IconButton onClick={toggleDarkMode}>
                {darkMode ? <DarkMode/>: <LightMode sx={{color:'yellow'}}/>}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}