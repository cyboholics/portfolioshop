import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'
import DonateButton from './ThirdPartyButtons/DonateButton'

const pages = ['team', 'about-us']

const MenuAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }


    return (
        <AppBar position="fixed" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: "#ddb500" }}
                        >
                            Portfolioshop
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={page}>
                                        <Typography textAlign="center">
                                            {page.replace('-', ' ').toUpperCase()}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"https://github.com/Portfolio-Shop/portfolioshop"}>
                                    <Typography textAlign="center">SOURCE</Typography>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "#ddb500" }}
                    >
                        PORTFOLIOSHOP
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={page}>
                                    {page.replace('-', ' ')}
                                </Link>
                            </Button>
                        ))}
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <a style={{ color: 'inherit', textDecoration: 'inherit' }} href={"https://github.com/Portfolio-Shop/portfolioshop"}>
                                {"Source Code"}
                            </a>
                        </Button>
                    </Box>
                    <DonateButton buttonId={"appbar-button"}/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


export default MenuAppBar