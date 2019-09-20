import React, { useRef, useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { useInView } from 'react-intersection-observer'

// Common
import { H1, H4, H3, LI, Box, Flex, Span } from 'styles/ss-components'
import { boxCss } from 'styles/ss-utils'

const useClickOpen = () => {
    const galleryRef = useRef(null)
    const thumbClicked = useRef(false)

    const [isFullScreen, setFullScreen] = useState(false)

    const handleCloseEvent = e => {
        setTimeout(() => {
            if (isMobile) {
                return
            }
            if (isFullScreen) {
                if (!thumbClicked.current) {
                    galleryRef.current.exitFullScreen()
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
        }

        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.removeEventListener('mousedown', handleCloseEvent)
        }
    }, [isFullScreen])
    return { galleryRef, thumbClicked, isFullScreen, setFullScreen }
}

export const Gallery = ({ images, alt, className, ...props }) => {
    const { galleryRef, thumbClicked, isFullScreen, setFullScreen } = useClickOpen()

    const [_images, setImages] = useState(
        images.map(image => ({
            ...image,
            original: image.thumbnail,
            imageSet: [{ srcSet: image.thumbnail }],
        }))
    )

    useEffect(() => {
        setImages(images)
    }, [])
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
                ref={galleryRef}
                // onImageLoad={e =>
                // console.log('e.currentTarget.src = ', e.currentTarget.src)
                // }
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
                onClick={() => {
                    if (!isFullScreen) {
                        galleryRef.current.fullScreen()
                        setFullScreen(true)
                    }
                }}
                items={_images}
                {...props}
            />
        </Flex>
    )
}
