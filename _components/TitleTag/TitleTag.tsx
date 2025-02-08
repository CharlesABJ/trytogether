import React from 'react';
interface TitleTagProps {
    dataTitleTag: {
        title: string;
    }
}
function TitleTag({ dataTitleTag }: TitleTagProps) {
    return (
        <h1 className='TitleTag'>{dataTitleTag.title}</h1>
    );
}

export default TitleTag;