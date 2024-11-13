import {BeatLoader }  from "react-spinners"
const override ={
    display : 'block',
    margin:'100px auto'
}
export default function Sspinner({ loading }){
  return (
    <BeatLoader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={20}
    
    /> 
    
  )
}


