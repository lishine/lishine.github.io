import React from 'react'
import { Flex, NavLink, SvgIcon, Box } from 'styles/ss-components'

// Common
import { RouteLink } from 'common/RouteLink'
import { boxCss } from 'styles/ss-utils'

// Local
import { Menu } from './Menu'

export const Header = ({ mobileHeaderHeight }) => {
    return (
        <Box className="grid-container">
            <Menu mobileHeaderHeight={mobileHeaderHeight} />
        </Box>
    )
}
