import React, { useRef, useState, useEffect } from 'react'
import { H1, H4, H3, LI, Box, Flex } from 'styles/ss-components'
// import dynamic from 'next/dynamic'
import { ArcherContainer, ArcherElement } from 'react-archer'
// import LineTo from 'react-lineto'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { boxCss } from 'styles/ss-utils'

const _Gallery = ({ images, className, ...props }) => {
    const ref1 = useRef(null)
    const ref = useRef(null)
    const thumbClicked = useRef(false)

    const [isFullScreen, setFullScreen] = useState(false)

    const handleCloseEvent = e => {
        setTimeout(() => {
            console.log('event')
            if (isFullScreen) {
                console.log('1')
                console.log('thumbClicked.current', thumbClicked.current)
                console.log('2')
                // console.log('handling event', e)
                // if (ref1 && ref1.current && isFullScreen && !ref1.current.contains(e.target)) {
                if (!thumbClicked.current) {
                    console.log('3')
                    ref.current.exitFullScreen()
                    setFullScreen(false)
                }
            }
            if (thumbClicked.current) {
                thumbClicked.current = false
            }
        }, 250)
    }

    useEffect(() => {
        if (isFullScreen) {
            document.addEventListener('mousedown', handleCloseEvent)
            document.addEventListener('touchstart', handleCloseEvent)
        }

        return () => {
            document.removeEventListener('mousedown', handleCloseEvent)
            document.removeEventListener('touchstart', handleCloseEvent)
        }
    }, [isFullScreen])

    return (
        <Flex ref={ref1}>
            <ImageGallery
                ref={ref}
                additionalClass={className}
                showFullscreenButton={false}
                showPlayButton={false}
                showBullets={false}
                showNav={false}
                useBrowserFullscreen={false}
                onThumbnailClick={e => {
                    console.log('Thumbnail click')
                    if (isFullScreen) {
                        console.log('4')
                        thumbClicked.current = true
                    }
                    //  else {
                    // e.stopPropagation()
                    // e.preventDefault()
                    // }
                }}
                onClick={e => {
                    console.log('gallery click')
                    if (!isFullScreen) {
                        // ref.current.exitFullScreen()
                        // setFullScreen(false)
                        // } else {
                        ref.current.fullScreen()
                        setFullScreen(true)
                    }
                    //  else {
                    // e.stopPropagation()
                    // e.preventDefault()
                    // }
                }}
                showThumbnails={false}
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
