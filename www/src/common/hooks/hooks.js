import React, { useState, useEffect } from 'react'

export const useToggle = _state => {
    const [state, setState] = useState(_state)
    const toggleState = () => setState(!state)
    return [state, toggleState, setState]
}
