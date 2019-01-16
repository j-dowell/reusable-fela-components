import React from 'react'
import { createComponentWithProxy } from 'react-fela'

const defaultStylesList = attributes => ({
    backgroundColor: attributes.backgroundColor,
    color: attributes.color,
})

const ThemedComponent = props => defaultStylesList(props.styles)

export default createComponentWithProxy(ThemedComponent, 'div')
