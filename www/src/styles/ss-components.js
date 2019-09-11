// NODE_MODULES
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'

// Local
import { boxParamsArray } from './ss-utils'
import { Loading } from './components'

export const Box = styled('div', { shouldForwardProp })(boxParamsArray)

// ... Rest is based on Box

export const Grid = styled(Box)()
Grid.defaultProps = {
    display: 'grid',
}

export const Form = styled(Box)()
Form.defaultProps = {
    as: 'form',
}

export const Flex = styled(Box)()
Flex.defaultProps = {
    display: 'flex',
}

export const Span = styled(Box)()
Span.defaultProps = {
    as: 'span',
}

export const Svg = styled(Box)()
Svg.defaultProps = {
    as: 'span',
}

export const SvgIcon = styled(Box)()
SvgIcon.defaultProps = {
    as: 'span',
    display: 'inline-block',
    transform: 'translateY(-1px)',
}

export const H1 = styled(Box)()
H1.defaultProps = {
    as: 'h1',
    dark: true,
}

export const H2 = styled(Box)()
H2.defaultProps = {
    as: 'h2',
    dark: true,
}

export const H3 = styled(Box)()
H3.defaultProps = {
    as: 'h3',
    dark: true,
}

export const H4 = styled(Box)()
H4.defaultProps = {
    as: 'h4',
    dark: true,
}
H4.propTypes = {}
H4.propTypes.notmobile = PropTypes.bool

export const H5 = styled(Box)()
H5.defaultProps = {
    as: 'h5',
}

export const H6 = styled(Box)()
H6.defaultProps = {
    as: 'h6',
}

export const P = styled(Box)()
P.defaultProps = {
    as: 'p',
}

export const Button = ({ children, loading, ...props }) => (
    <Box {...props} position="relative">
        {loading && <Loading />}
        {!loading && children}
    </Box>
)

Button.defaultProps = {
    as: 'button',
    type: 'button',
}

export const Section = styled(Box)()
Section.defaultProps = {
    as: 'section',
}
export const OL = styled(Box)()
OL.defaultProps = {
    as: 'ol',
}
export const DT = styled(Box)()
DT.defaultProps = {
    as: 'dt',
}
export const DD = styled(Box)()
DD.defaultProps = {
    as: 'dd',
}
export const DL = styled(Box)()
DL.defaultProps = {
    as: 'dl',
}

export const Image = styled(Box)()
Image.defaultProps = {
    as: 'img',
}

export const UL = styled(Box)`
    list-style: none;
    position: relative;
    padding: 0;
`
UL.defaultProps = {
    as: 'ul',
    mis: '12px',
}

// export const LI = styled(Box)`
//     &:before {
//         position: absolute;
//         content: ${props => props.content};
//         color: black;
//         left: 0;
//     }
// `
// LI.defaultProps = {
//     as: 'li',
//     textIndent: true,
//     pis: '1em',
//     content: '•',
// }

export const LI = styled(({ dot, ...props }) => (
    <Box {...props}>
        <Span position="absolute" left={0}>
            {dot}
        </Span>
        {props.children}
    </Box>
))()

LI.defaultProps = {
    as: 'li',
    textIndent: '1em',
    pis: '1em',
    dot: '•',
}

export const Card = styled(Box)()

export const NavLink = ({ onClick, loading, href, children, ...props }) => {
    const _onClick = e => {
        console.log('onClick', onClick)
        if (onClick) {
            e.preventDefault()
            e.stopPropagation()
            onClick()
        }
    }
    return (
        <Box onClick={_onClick} href={href} {...props}>
            {loading && <Loading />}
            {(!loading && children) || href}
        </Box>
    )
}

NavLink.defaultProps = {
    as: 'a',
    href: '',
    display: 'inline-block',
}
