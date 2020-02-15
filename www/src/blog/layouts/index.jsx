// General packages
import React from 'react'

// Common
import { Flex, H1 } from 'styles/ss-components'

export default frontMatter => {
    return ({ children: content }) => {
        return (
            <Flex
                flexDirection="column"
                alignItems={['center', 'flex-start']}
                mt={5}
                pl={5}
                className="grid-container padding-container"
            >
                <H1 mb={2}>{frontMatter.title}</H1>
                {content}
            </Flex>
        )
    }
}
