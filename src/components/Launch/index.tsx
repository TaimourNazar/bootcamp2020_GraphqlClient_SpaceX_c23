import React from 'react';
import {useLaunchesQuery} from '../../generated/graphql';
import Launch from './Launch';
//import OwnProps from './Launch';
import Props from './Launch';

const LaunchContainer=()=>{
    const {data,error,loading}=useLaunchesQuery();

    if(loading){
        return <div>Data is Loading</div>
    }
    if(error || !data){
        return <div>There was an error</div>
    }

    return <Launch data={data} {...Props}/>
}

export default LaunchContainer;