import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"

const TopBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorsMode = useContext(ColorModeContext)

    return (
        <Box 
            display="flex" 
            justifyContent="flex-end" 
            p={2}
        >
            <IconButton onClick={colorsMode.toggleColorMode}>
                {
                    theme.palette.mode === "dark" ? (
                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
                    )
                }
            </IconButton>
        </Box>
    )
}

export default TopBar