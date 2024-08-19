import { defineConfig } from '@rslib/core';

 

export default defineConfig({
  lib: [
    { 
      format: 'esm', 
      dts:{
        bundle:true,
      },   
      output: {
        minify: true,        
        distPath: {
          root: './dist/esm',
        },
      },
    },
    { 
      format: 'cjs',
      dts:{
        bundle:true,
      },   
      output: {
        minify: true,
        distPath: {
          root: './dist/cjs',
        },
      },
    },
  ],
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  output: {
    target: 'node',
  },
});