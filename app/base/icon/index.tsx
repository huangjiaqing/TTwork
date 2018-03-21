import React from 'react'
import icons from 'tb-icons/lib/styles/tb-icons.css'

interface Props {
  type: string,
  className?: string,
  style?: object,
  onClick?: (e) => any
}

/**
 * Teambition 图标
 * 
 * @param {*string} 图标类型 http://teambition.github.io/TB-Icons/v2/iconfonts/
 */
export default function Icon({ type, className, style, onClick }: Props) {
  const props = {
    type,
    className: `tb ${icons.icon} ${icons[type]} ${className || ''}`,
    style: style || {},
    onClick: onClick || function () {}
  }

  return <span {...props}/>
}