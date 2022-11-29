import { Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme"
import { MenuItem } from "react-pro-sidebar"
import { Link } from "react-router-dom"

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <MenuItem 
            routerLink={<Link to={to} />}
            rootStyles={{
                color: colors.grey[100],
                "&:hover": {
                    color: colors.blueAccent[500],
                }
            }}
            icon={icon}
            active={selected === title}
            onClick={() => setSelected(title)}
        > 
            <Typography variant="h5" >{title}</Typography>
        </MenuItem>
    )
}

export default Item