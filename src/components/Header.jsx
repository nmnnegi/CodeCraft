import { AppBar, Toolbar, styled, Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code'

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Logo = styled(Typography)`
    color: #f8f8f8;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    margin-left: 5px;
`;

const StyledIcon = styled(CodeIcon)`
    color: #0EBEFF;
    font-size: 1.6rem;
    margin-right: 8px;
`;

const ColorText = styled('span')`
    color: #0EBEFF;
`;

const Header = () => {
    return (
        <Container>
            <Toolbar>
                <Logo>
                    <StyledIcon />
                    Code<ColorText>Craft</ColorText>
                </Logo>
            </Toolbar>
        </Container>
    )
}

export default Header