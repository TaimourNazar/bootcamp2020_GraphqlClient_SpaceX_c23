import React from 'react';
import {LaunchesQuery} from '../../generated/graphql';

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

export interface Props extends OwnProps {
    data: LaunchesQuery;
}

const Launch: React.FC<Props>=({data,handleIdChange})=>{
    return(
        <div className="Launches">
            <h3>All Space X Launches</h3>
            <ol className='LaunchesOL'>
                {!!data.launches && data.launches.map(
                    (launch, i)=>!!launch && (
                        <li key={i} className='launchesItem' onClick={() => handleIdChange(launch.flight_number!)}>
                            {launch.mission_name} - {launch.launch_year} -({JSON.stringify(launch.launch_success)})
                        </li>
                    )
                )}
            </ol>
        </div>
    )
}

export default Launch;