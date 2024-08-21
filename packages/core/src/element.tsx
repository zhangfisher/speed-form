/**
 * 
 * 动态创建元素
 * 
 *  <Element<HTMLDivElement> tag="div" {...props}>
 *      
 *  </Element>
 * 
 * 
 */

import React from 'react'
import { ReactElement, ReactNode, HTMLProps,forwardRef, CSSProperties } from 'react';

interface ElementProps<T extends keyof JSX.IntrinsicElements = 'div'> {
  tag?: keyof JSX.IntrinsicElements;
  className?:string
  style?:CSSProperties
  children?: ReactNode;  
  props?: HTMLProps<JSX.IntrinsicElements[T]>;
}

export const Element = forwardRef(<T extends keyof JSX.IntrinsicElements='div'>({
  tag='div',
  children,
  className,
  style,
  props,
}: ElementProps<T> ,ref: React.Ref<HTMLElement>): ReactElement =>{
  return  React.createElement(tag, { ...props, className,style,ref }, children);
})

 
 