
import { Circles } from 'react-loader-spinner'


export type LoadingProps ={
    visible?:boolean
    size?: number
    color?:string
    tips?:string
} 
export const Loading:React.FC<LoadingProps> = (props)=>{
    const { size=32,visible=true,color,tips='loading...' } =props    
    return <span 
        title={tips}
        style={{
            display: visible ? 'inline-block' : 'none',
            cursor:"pointer",
            padding:"2px"
        }}>
        <Circles width={size} height={size} color={color}/>
    </span>
}
