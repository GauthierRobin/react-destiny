import { useState } from "react"
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import Item from "../../components/NavItem"
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';

const SideBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const { collapseSidebar, collapsed } = useProSidebar()
    const [selected, setSelected] = useState("Acceuil")

    return (
        <Sidebar backgroundColor={colors.primary[400]}>
            <Menu
                menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                    // only apply styles on first level elements of the tree
                        if (level === 0)
                        return {
                            backgroundColor: active ? colors.grey[500] : "transparent",
                            "&:hover": {
                                backgroundColor: "transparent",
                            }
                        }
                    },
                }}
            >
                <Box display="flex" flexDirection="column" alignItems="flex-end">
                    <IconButton onClick={() => collapseSidebar()}>
                        {
                            collapsed ? (
                                <KeyboardDoubleArrowRightRoundedIcon />
                            ) : (
                                <KeyboardDoubleArrowLeftRoundedIcon />
                            )
                        }
                    </IconButton>
                </Box>

                <Item title="Acceuil" to="/" selected={selected} setSelected={setSelected} icon={<HomeOutlinedIcon />}/>

                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: 2 }}
                >
                    Armures
                </Typography>

                <Item title="Armures builds" to="/ArmorBuilder" selected={selected} setSelected={setSelected} icon={<ShieldOutlinedIcon />}/>

            </Menu>
        </Sidebar>
    )
}

export default SideBar