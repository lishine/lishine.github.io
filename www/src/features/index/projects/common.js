import React, { useRef, useState } from 'react'
import { H1, H4, H3 } from 'styles/ss-components'
// import dynamic from 'next/dynamic'
import { ArcherContainer, ArcherElement } from 'react-archer'
// import LineTo from 'react-lineto'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { boxCss } from 'styles/ss-utils'

const _Gallery = ({ images, className, ...props }) => {
    const ref = useRef(null)
    const [isFullScreen, setFullScreen] = useState(false)
    return (
        <ImageGallery
            ref={ref}
            additionalClass={className}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={false}
            showNav={false}
            useBrowserFullscreen={false}
            onClick={() => {
                if (isFullScreen) {
                    ref.current.exitFullScreen()
                    setFullScreen(false)
                } else {
                    ref.current.fullScreen()
                    setFullScreen(true)
                }
            }}
            showThumbnails={false}
            items={images.map(url => ({
                original: url,
                thumbnail: url,
            }))}
            {...props}
        />
    )
}
export const Gallery = props => (
    <_Gallery {...props} css={boxCss.css({ bg: 'lightgrey', p: 1, cursor: 'pointer' })} />
)

// const LineTo = dynamic(() => import('react-lineto').then(r => r), { ssr: false })

export const ProjectTitle = props => (
    <H3 borderBottom="1px solid currentColor" {...props} />
)

export const SubRemark = props => (
    <H4 fontSize="20px" color="var(--onwhite-menu)" {...props} />
)

// const Feature = styled(Box)(
//     boxCss.css({ border: '1px solid var(--onwhite-border)', p: 1 })
// )
