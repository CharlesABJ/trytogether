import Image from 'next/image';
import React from 'react';

interface TestimonyProps {
    dataTestimony: {
        avatar: string;
        content: string;
        author: string;
    }
}
function Testimony({ dataTestimony }: TestimonyProps) {
    return (
        <div className="Testimony">
            <div className="avatar">
                <Image
                    src={dataTestimony.avatar}
                    alt={`${dataTestimony.author} avatar`}
                    width={60}
                    height={60}
                />
            </div>
            <div className="content">
                <div className="testimony-content">
                    « {dataTestimony.content} »
                </div>
                <div className="testimony-author">
                    {dataTestimony.author}
                </div>
            </div>
        </div>
    );
}

export default Testimony;