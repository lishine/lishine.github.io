import React, { useRef, useState, useEffect } from 'react'
import 'react-image-gallery/styles/scss/image-gallery.scss'

// Common
import { H1, H4, H3, LI, Box, Flex, Span } from 'styles/ss-components'

export const ProjectTitle = props => (
    <H3 pt={3} mb={1} fontWeight="500" borderBottom="1px solid currentColor" {...props} />
)

export const SubRemark = props => <Span fontStyle="italic" fontWeight="300" {...props} />
export const SubLink = props => <Flex {...props} />

export const DoesTitle = props => (
    <H4 textAlign="start" mt={1} fontWeight="500" {...props} />
)
export const DoesItem = props => <LI textAlign="start" mb="4px" {...props} />
