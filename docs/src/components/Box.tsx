
import React from "react"

export type ColsProps ={
    cols?:number
} & React.PropsWithChildren
export const Box:React.FC<ColsProps> = (props)=>{
    const { cols=2 } =props
    return (<div className="box" style={{
      border:"1px solid #eee",
      margin:"8px",
      padding:'8px',
      display: 'flex',
      justifyContent:"space-between",
      flexDirection:"row"
    }}>
        {
          new Array(cols).fill(0).map((v,index)=>{
            return <div style={{
              flexGrow:1,
              padding:'8px',
            }} key={index}>
                {Array.isArray(props.children) ?  props.children[index] : null}
            </div>
          })
        }
    </div>)
}


