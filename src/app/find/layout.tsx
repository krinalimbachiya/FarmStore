import React from "react";

export default function FindLayput({children}: {children: React.ReactNode}) {
    return <div className="min-h-screen bg-slate-50">
        {children}
    </div>
}