/**
 * 
 *  简单的在Loading组件中使用了ThreeCircles组件
 * 
 * 
 * 源码来自：https://github.com/mhnpd/react-loader-spinner
 * 
 */


import React from 'react'
import { styled } from "flexstyled"

const DEFAULT_COLOR = '#4fa94d'
 type Style = {
    [key: string]: string
  }
const SvgWrapper = styled.div({
  display: props => props.$visible ? 'flex' : 'none'
})


export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg'
type Props = {
  wrapperStyle?: Style
  visible?: boolean
  wrapperClass?: string
  height?: string | number
  width?: string | number
  color?: string
  outerCircleColor?: string
  innerCircleColor?: string
  middleCircleColor?: string
  ariaLabel?: string
}
const DEFAULT_WAI_ARIA_ATTRIBUTE = {
    'aria-busy': true,
    role: 'progressbar',
  }
/**
 * @description contains three circles rotating in opposite direction
 * outer circle, middle circle and inner circle color can be set from props.
 */
export const ThreeCircles: React.FunctionComponent<Props> = ({
  wrapperStyle = {},
  visible = true,
  wrapperClass = '',
  height = 100,
  width = 100,
  color = DEFAULT_COLOR,
  ariaLabel = 'three-circles-loading',
  outerCircleColor,
  innerCircleColor,
  middleCircleColor,
}): React.ReactElement => {
  return (
    <SvgWrapper
      style={wrapperStyle}
      $visible={visible}
      className={wrapperClass}
      data-testid="three-circles-wrapper"
      aria-label={ariaLabel}
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <svg
        version="1.1"
        height={`${height}`}
        width={`${width}`}
        xmlns={SVG_NAMESPACE}
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
        data-testid="three-circles-svg"
      >
        <path
          fill={outerCircleColor || color} /** outer circle */
          d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="2s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
        <path
          fill={middleCircleColor || color} /** Middle circle */
          d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="-360 50 50"
            repeatCount="indefinite"
          />
        </path>
        <path
          fill={innerCircleColor || color} /** Inner circle */
          d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="2s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </SvgWrapper>
  )
}

export type LoadingProps ={
    visible?:boolean
    size?: number
    color?:string
    tips?:string
} 

export const Loading:React.FC<LoadingProps> = (props)=>{
    const { size=20,visible=true,color,tips='loading...' } =props    
    return <span 
        title={tips}
        style={{
            display: visible ? 'inline-block' : 'none',
            cursor:"pointer",
            padding:"2px"
        }}>
        <ThreeCircles width={size} height={size} color={color}/>
    </span>
}