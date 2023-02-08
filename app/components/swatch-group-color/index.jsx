/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box, HStack, useStyleConfig} from '@chakra-ui/react'
import {noop} from '../../utils/utils'

/**
 * SwatchGroup allows you to create a list of swatches
 * Each Swatch is a link with will direct to a href passed to them
 */
const SwatchGroupColor = (props) => {
    const {displayName, children, value, label = '', variant = 'square', onChange = noop} = props
    const styles = useStyleConfig('SwatchGroupColor')
    return (
        <Flex {...styles.swatchGroup} role="radiogroup">
            <Flex {...styles.swatchesWrapper}>
                {React.Children.map(children, (child) => {
                    const childValue = child.props.value
                    if (variant == 'circle') {
                        return React.cloneElement(child, {
                            selected: childValue === value,
                            key: childValue,
                            value,
                            variant,
                            onChange
                        })
                    }
                })}
            </Flex>
        </Flex>
    )
}

SwatchGroupColor.displayName = 'SwatchGroupColor'

SwatchGroupColor.propTypes = {
    /**
     * The attribute name of the swatch group. E.g color, size
     */
    label: PropTypes.string,
    /**
     * The selected Swatch value.
     */
    value: PropTypes.string,
    /**
     * The display value of the selected option
     */
    displayName: PropTypes.string,
    /**
     * The Swatch options to choose between
     */
    children: PropTypes.array,
    /**
     * The shape of the swatches
     */
    variant: PropTypes.oneOf(['square', 'circle']),
    /**
     * This function is called when a new option is selected
     */
    onChange: PropTypes.func
}

export default SwatchGroupColor