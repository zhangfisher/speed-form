import { useRef,useEffect } from 'react';
import { isDev } from './utils';


export function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
} 

export function useUnmountedRef(){
    const unmountedRef = useRef(false);
    useEffect(() => {
      unmountedRef.current = false;
      return () => {
        unmountedRef.current = true;
      };
    }, []);
    return unmountedRef;
  };
  
export function useUnmount (fn: () => void)  {
    if (isDev()) {
      if (typeof(fn)!=='function') {
        console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
      }
    } 
    const fnRef = useLatest(fn);  
    useEffect(
      () => () => {
        fnRef.current();
      },
      [],
    );
  };