"use client";

import { CircleLoader } from "react-spinners";

export default function Loading (){
    return <>
    
    <div className="flex h-screen justify-center items-center">
        
                <CircleLoader size={50} color="#ffdf20" />
        </div>    
    </>
}

