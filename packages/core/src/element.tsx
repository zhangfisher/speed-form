/**
 * 
 *  <Element<HTMLDivElement> type="div {...props}>
 *      
 *  </Element>
 * 
 * 
 */


import React, { ReactElement, ReactNode, HTMLProps,forwardRef, CSSProperties } from 'react';

interface ElementProps<T extends keyof JSX.IntrinsicElements = 'div'> {
  type?: keyof JSX.IntrinsicElements;
  className?:string
  style?:CSSProperties
  children?: ReactNode;  
  props?: HTMLProps<JSX.IntrinsicElements[T]>;
}

export const Element = forwardRef(<T extends keyof JSX.IntrinsicElements='div'>({
  type='div',
  children,
  className,
  style,
  props,
}: ElementProps<T> ,ref: React.Ref<HTMLElement>): ReactElement =>{
  return  React.createElement(type, { ...props, className,style,ref }, children);
})

 
 