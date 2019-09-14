import React from 'react'
import get from 'lodash/fp/get'

import { Form, P, Box, Flex, Span, Image, H3, Button } from 'styles/ss-components'

import { RouteLink } from 'common/RouteLink'
import { boxCss } from 'styles/ss-utils'

export const Footer = props => {
    return (
        <Box
            bg="secondary"
            position="absolute"
            bottom={0}
            className="grid-container padding-container"
            maxWidth={[null, null, '100%']}
            {...props}
        />
    )
}
