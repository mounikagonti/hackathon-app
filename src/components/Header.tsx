import {FC, memo} from 'react'
import {AppBar, Toolbar, Box} from '@mui/material'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'

const StyledAppBar = styled(AppBar)`
  background: #ffffff;
`

const Logo = styled.img`
  width: 87px;
  height: 38.11px;
  margin-right: 10px;
`

const Header: FC = memo(() => {
  return (
    <StyledAppBar position='static' elevation={0}>
      <Toolbar>
        <Box display='flex' alignItems='center'>
          <Link to='/'>
            <Logo src='/logo.svg' alt='DPHI Logo' />
          </Link>
        </Box>
      </Toolbar>
    </StyledAppBar>
  )
})

export default Header
