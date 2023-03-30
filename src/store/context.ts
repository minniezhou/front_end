import React from "react"
export type InandOutType = {
    In: string,
    Out: string,
    Error: string,
    ClearInandOut : ()=>void
    SetRequest: (arg: string) =>void, 
    SetResponse: (arg: string) =>void, 
    SetError: (arg: string) => void,
}

export const DefaultInOut = {
    In: "Sent...",
    Out: "Received...",
    Error: "Output shows here...",
    ClearInandOut: ()=>{},
    SetRequest : (arg:string)=>{},
    SetResponse: (arg:string)=>{},
    SetError: (arg:string)=>{},

}
export const InandOutCxt = React.createContext<InandOutType>(DefaultInOut) 
