import React from "react"
export type InandOutType = {
    In: string,
    Out: string,
    ClearInandOut : ()=>void
    SetRequest: (arg: string) =>void, 
    SetResponse: (arg: string) =>void, 
}

export const DefaultInOut = {
    In: "Sent...",
    Out: "Received...",
    ClearInandOut: ()=>{},
    SetRequest : (arg:string)=>{},
    SetResponse: (arg:string)=>{}
}
export const InandOutCxt = React.createContext<InandOutType>(DefaultInOut) 
