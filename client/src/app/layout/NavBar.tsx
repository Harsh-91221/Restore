import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]
const rigtLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]
const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': { color: 'grey.400' },
    '&.active': { color: '#baecf9' }
}
type props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}
export default function NavBar({ toggleDarkMode, darkMode }: props) {
    return (
        <AppBar position='fixed'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography component={NavLink} sx={navStyles} to={'/'} variant="h6">
                        GlideGear
                    </Typography>
                    <IconButton onClick={toggleDarkMode}>
                        {darkMode ? <DarkMode /> : <LightMode sx={{ color: 'yellow' }} />}
                    </IconButton>
                </Box>
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) =>
                        <ListItem component={NavLink} to={path} key={path}
                            sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    )}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton size="large" sx={{ color: 'inherit' }}>
                        <Badge badgeContent='4' color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rigtLinks.map(({ title, path }) =>
                            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        )}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}