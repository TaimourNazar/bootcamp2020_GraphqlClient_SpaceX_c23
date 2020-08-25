import React from 'react';
import {useLaunchInfoQuery} from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';

interface Props{
    infoId: number;
}

const LaunchDetailsContainer=({ infoId }: Props)=>{
    const {data,error,loading,refetch}=useLaunchInfoQuery({variables:{id:String(infoId)}});
    
    React.useEffect(() => {
        refetch();
      }, [infoId]);

    if(loading){
        return <div>Data is Loading</div>
    }
    
    if(error){
        return <div>There was an error</div>
    }

    if(!data){
        return <div>Make sure you have selected a mission to view details</div>
    }

    return <LaunchDetails data={data}/>
}

export default LaunchDetailsContainer;