import { defineConfig } from 'tsup'
// import copy from "esbuild-copy-files-plugin";


export default defineConfig([
    {
        entry: [
            'src/index.ts'
        ],
        outDir: 'dist/slim',
        format: ['esm','cjs'],
        dts: true,
        splitting: true,
        sourcemap: true,
        clean: true,
        treeshake:true,  
        minify: true,
        noExternal:['flex-tools']
    },    
    {
        entry: [
            'src/index.ts'
        ],
        outDir: 'dist',
        format: ['esm','cjs'],
        dts: true,
        splitting: true,
        sourcemap: true,
        clean: true,
        treeshake:true,  
        minify: true,
        noExternal:['helux','flex-tools']
    }
])


        // esbuildPlugins:[
        //     // @ts-ignore
        //     copy({
        //         source:['package.json','README.md','LICENSE'],
        //         target:"dist/"
        //     })
        // ] 