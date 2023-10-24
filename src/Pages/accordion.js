import React, { useState } from 'react'

function Accordion() {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const data = [
        { id: 1, title: "First", description: "This is the description for first title" },
        { id: 2, title: "Second", description: "This is the description for second title" },
        { id: 3, title: "Third", description: "This is the description for third title" },
        { id: 4, title: "Fourth", description: "This is the description for fourth title" }
    ]

    const handleClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }

    }
    return (
        <>
            {data.map((item, index) => {
                const isExpanded = expandedIndex === index;
                return (
                    <div key={item.id}>
                        <div onClick={() => { handleClick(index) }} className='border p-1 text-xl bg-gray-200'>
                            {item.title}
                        </div>
                        {isExpanded && <div className='p-3'>
                            {item.description}
                        </div>}
                    </div>
                )
            })}

        </>
    )
}

export default Accordion
