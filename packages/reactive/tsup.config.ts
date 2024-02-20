import { defineConfig } from 'tsup'
// import copy from "esbuild-copy-files-plugin";


export default defineConfig([
    {
        entry: [
            'src/index.ts'
        ],
        outDir: 'dist/shared',
        format: ['esm','cjs'],
        dts: true,
        splitting: true,
        sourcemap: true,
        clean: true,
        treeshake:true,  
        minify: true,
        noExternal:['@helux/utils','flex-tools']
    },    
    {
        entry: [
            'src/index.ts'
        ],
        outDir: 'dist/standalone',
        format: ['esm','cjs'],
        dts: true,
        splitting: true,
        sourcemap: true,
        clean: true,
        treeshake:true,  
        minify: true,
        noExternal:['helux','@helux/utils','flex-tools']
    }
])


        // external:['helux','@helux/utils'],
        // esbuildPlugins:[
        //     // @ts-ignore
        //     copy({
        //         source:['package.json','README.md','LICENSE'],
        //         target:"dist/"
        //     })
        // ] 