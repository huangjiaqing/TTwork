import React from 'react'

const style = {
  display: 'inline-block',
  width: '28px',
  height: '28px',
  backgroundColor: '#ccc',
  borderRadius: '50%'
}

interface Props {
  onClick?: () => any
}

export default function Avatar(props: Props) {
  let avatarProps = {
    style,
    onClick: props.onClick || function () {}
  }

  return (
    <span {...avatarProps}>
    </span>
  )
}