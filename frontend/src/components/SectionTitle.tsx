import React from 'react'

function SectionTitle({ title, text }: { title: string; text: string }) {
    return (
        <div className="space-y-3 w-[500px] text-center mb-6">
            <h1 className="text-2xl font-medium text-[#1F2937]">{title}</h1>
            <p className="text-[#4B5563] text-sm">{text}</p>
        </div>
    )
}

export default SectionTitle