import React, { useEffect } from 'react'
import { Box } from 'styles/ss-components'
import { css } from '@emotion/core'

export const Container = ({ children, ...props }) => (
    <Box display="grid" {...props}>
        <Box />
        <Box>{children}</Box>
        <Box />
    </Box>
)
export const TextContainer = props => (
    <Container
        gridTemplateColumns={[
            '0fr 1fr 0fr',
            '1fr 10fr 1fr',
            '2fr 8fr 2fr',
            '2fr 6fr 4fr',
        ]}
        px={['var(--padding-container)', 'var(--padding-container)', null, null]}
        {...props}
    />
)

const loadingCss = css`
    transform: scale(0.65) translate(0px, -13px);
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    div {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 32px 32px;
    }
    div:after {
        content: ' ';
        display: block;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #fff;
        margin: -3px 0 0 -3px;
    }
    div:nth-of-type(1) {
        animation-delay: -0.036s;
    }
    div:nth-of-type(1):after {
        top: 50px;
        left: 50px;
    }
    div:nth-of-type(2) {
        animation-delay: -0.072s;
    }
    div:nth-of-type(2):after {
        top: 54px;
        left: 45px;
    }
    div:nth-of-type(3) {
        animation-delay: -0.108s;
    }
    div:nth-of-type(3):after {
        top: 57px;
        left: 39px;
    }
    div:nth-of-type(4) {
        animation-delay: -0.144s;
    }
    div:nth-of-type(4):after {
        top: 58px;
        left: 32px;
    }
    div:nth-of-type(5) {
        animation-delay: -0.18s;
    }
    div:nth-of-type(5):after {
        top: 57px;
        left: 25px;
    }
    div:nth-of-type(6) {
        animation-delay: -0.216s;
    }
    div:nth-of-type(6):after {
        top: 54px;
        left: 19px;
    }
    div:nth-of-type(7) {
        animation-delay: -0.252s;
    }
    div:nth-of-type(7):after {
        top: 50px;
        left: 14px;
    }
    div:nth-of-type(8) {
        animation-delay: -0.288s;
    }
    div:nth-of-type(8):after {
        top: 45px;
        left: 10px;
    }
    @keyframes lds-roller {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const Loading = () => (
    <div css={loadingCss}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
)
