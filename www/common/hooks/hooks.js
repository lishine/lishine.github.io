import React, { useState, useEffect } from 'react'
import get from 'lodash/fp/get'

export const useToggle = _state => {
    const [state, setState] = useState(_state)
    const toggleState = () => setState(!state)
    return [state, toggleState, setState]
}
