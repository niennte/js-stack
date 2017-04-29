// @flow

import React from 'react'

// Flow type alias - defining Props type before annotating component's destructured props with it

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) =>
  <button
    onClick={handleClick}
    className="btn btn-primary"
    role="button"
  >{label}</button>


export default Button

