import React, { useRef, useState, useEffect } from 'react'
import { H1, H4, H3, LI, Box, Flex, Span } from 'styles/ss-components'
import { isMobile } from 'react-device-detect'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { boxCss } from 'styles/ss-utils'

export const altPrefix = 'React projects by Pavel Ravits | '

export const ProjectTitle = props => (
    <H3 pt={3} mb={1} fontWeight="500" borderBottom="1px solid currentColor" {...props} />
)

export const SubRemark = props => (
    <Span fontStyle="italic" fontWeight="300" fontSize="19px" {...props} />
)
export const SubLink = props => <Flex {...props} />

export const DoesTitle = props => (
    <H4 textAlign="start" mt={1} fontWeight="500" {...props} />
)
export const DoesItem = props => <LI textAlign="start" mb="4px" {...props} />

export const Gallery = ({ images, className, ...props }) => {
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
            // document.addEventListener('touchstart', handleCloseEvent)
        }

        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.removeEventListener('mousedown', handleCloseEvent)
            // document.removeEventListener('touchstart', handleCloseEvent)
        }
    }, [isFullScreen])

    return (
        <Flex
            className={className}
            css={boxCss.css({
                bg: '#EEEEEE',
                cursor: 'pointer',
                boxShadow: '0 0 38px 12px rgba(0, 0, 0, .15)',
                '.thumb': {
                    boxShadow: '0 0 28px 4px rgba(0, 0, 0, .1)',
                },
                '.image-gallery': {
                    width: '100%',
                },
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
                items={images.map(({ url, alt }) => {
                    const _alt = `${altPrefix}${alt}`
                    return {
                        original: url,
                        thumbnail: url,
                        thumbnailClass: 'thumb',
                        originalAlt: _alt,
                        thumbnailAlt: _alt,
                    }
                })}
                {...props}
            />
        </Flex>
    )
}
