import React, { useRef, useState, useEffect } from 'react'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import styled from '@emotion/styled'

// Common
import { H1, H4, H3, LI, Box, Flex, Span, UL } from 'styles/ss-components'

export const ProjectTitle = props => (
    <H3 pt={3} mb={1} fontWeight="500" borderBottom="1px solid currentColor" {...props} />
)

export const SubProjectTitle = props => <H4 pt={3} mb={1} fontWeight="500" {...props} />

export const SubRemark = props => <Span fontStyle="italic" fontWeight="300" {...props} />
export const SubLink = props => <Flex {...props} />

export const DoesWrapper = styled(Box)()
export const DoesList = styled(UL)()
export const DoesTitle = props => (
    <H4 textAlign="start" mt={1} mb="4px" fontWeight="500" {...props} />
)

export const DoesItem = props => (
    <LI
        textAlign="start"
        mb="4px"
        {...{
            dot: (
                <Span
                    display="inline-block"
                    transform="translateY(-1px)"
                    fontWeight="600"
                    color="#444444"
                    fontSize={24}
                >
                    ·
                </Span>
            ),
            ...props,
        }}
    />
)

export const FeatureWrapper = styled(Box)()
export const FeatureSpan = styled(Span)()
