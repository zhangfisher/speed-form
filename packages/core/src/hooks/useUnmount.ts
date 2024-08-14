import { useEffect } from "react";
import { isDev } from "../utils";
import { useLatest } from "./useLatest";

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