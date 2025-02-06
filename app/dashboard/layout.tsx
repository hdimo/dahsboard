import React from "react"
import SideNav from "../ui/dashboard/sidenav"


type Node = {
    children: React.ReactNode
}

export default function Layout({children}: Node) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flew-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    )
};
