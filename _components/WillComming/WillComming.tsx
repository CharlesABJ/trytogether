import React from 'react';
import RemainingDuration from '../RemainingDuration/RemainingDuration';


interface WillCommingProps {
    dataWillComming: {
        title_a: string;
        title_b: string;
        description: string;

    }

}
function WillComming({ dataWillComming }: WillCommingProps) {

    return (
        <>
            <div className="WillComming">

                <h1>
                    <span>{dataWillComming.title_a}</span>
                    {dataWillComming.title_b}
                </h1>
                <div className="description">
                    {dataWillComming.description}
                </div>
            </div>

            <RemainingDuration />

        </>
    );
}

export default WillComming;