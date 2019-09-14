import React, { useRef, useState, useEffect } from 'react'
import { H1, H4, H3, LI, Box, Flex } from 'styles/ss-components'
// import dynamic from 'next/dynamic'
import { ArcherContainer, ArcherElement } from 'react-archer'
// import LineTo from 'react-lineto'
import { isMobile } from 'react-device-detect'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'

import { boxCss } from 'styles/ss-utils'

const _Gallery = ({ images, className, ...props }) => {
    const ref = useRef(null)
    const thumbClicked = useRef(false)

    const [isFullScreen, setFullScreen] = useState(false)

    const handleCloseEvent = e => {
        setTimeout(() => {
            if (isMobile) {
                return
            }
            if (isFullScreen) {
                if (!thumbClicked.current) {
                    ref.current.exitFullScreen()
                    setFullScreen(false)
                }
            }
            if (thumbClicked.current) {
                thumbClicked.current = false
            }
        }, 150)
    }
    const handleEsc = e => {
        if (e.keyCode === 27) {
            if (isFullScreen) {
                setFullScreen(false)
            }
        }
    }

    useEffect(() => {
        if (isMobile) {
            return
        }
        if (isFullScreen) {
            document.addEventListener('keydown', handleEsc)
            document.addEventListener('mousedown', handleCloseEvent)
            document.addEventListener('touchstart', handleCloseEvent)
        }

        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.removeEventListener('mousedown', handleCloseEvent)
            document.removeEventListener('touchstart', handleCloseEvent)
        }
    }, [isFullScreen])

    return (
        <Flex
            className={className}
            css={boxCss.css({
                '.fullscreen .image-gallery-slide.center': {
                    display: 'flex',
                    bg: 'black !important',
                },
                '.fullscreen .image-gallery-image': {
                    mx: 'auto',
                    maxWidth: '1024px',
                },
            })}
        >
            <ImageGallery
                ref={ref}
                showFullscreenButton={false}
                showPlayButton={false}
                showBullets={false}
                showNav={false}
                useBrowserFullscreen={isMobile}
                onThumbnailClick={e => {
                    if (isMobile) {
                        return
                    }
                    if (isFullScreen) {
                        thumbClicked.current = true
                    }
                }}
                onClick={e => {
                    if (!isFullScreen) {
                        ref.current.fullScreen()
                        setFullScreen(true)
                    }
                }}
                items={images.map(url => ({
                    original: url,
                    thumbnail: url,
                }))}
                {...props}
            />
        </Flex>
    )
}

export const Gallery = props => (
    <_Gallery {...props} css={boxCss.css({ bg: 'lightgrey', p: 1, cursor: 'pointer' })} />
)

// const LineTo = dynamic(() => import('react-lineto').then(r => r), { ssr: false })

export const ProjectTitle = props => (
    <H3 fontWeight="400" borderBottom="1px solid currentColor" {...props} />
)

export const SubRemark = props => (
    <H4 fontStyle="italic" fontSize="18px" color="var(--onwhite-menu)" {...props} />
)

export const DoesTitle = props => (
    <H4 textAlign="start" mt={1} mb={1} fontWeight="400" {...props} />
)
export const DoesItem = props => <LI textAlign="start" mb="4px" {...props} />

// const Feature = styled(Box)(
//     boxCss.css({ border: '1px solid var(--onwhite-border)', p: 1 })
// )
