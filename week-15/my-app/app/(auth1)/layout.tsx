import React from "react";

export default function ({
    children,
  }:{
    children: React.ReactNode;
  }){
    return <div className="h">
        <div className="flex justify-center">
            <div className="mt-4 mr-10 ml-10 rounded-lg pl-10 pr-10 pt-4 pb-4 bg-gray-100 text-center w-auto">
                50% off on all products
            </div>
        </div>
        {children}
    </div>
}