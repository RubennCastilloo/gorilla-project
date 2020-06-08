import React from 'react';
import { Player } from 'video-react';

const Stream = () => {
    return(
        <>
        <h1>Live Canal 28</h1>
            <Player>
                <source src="http://tvchih.duckdns.org/television/2020/05/26/canal28_28_1_/canal28_28_1_1590500383_11.mp4" />
            </Player>
        </>
        
    );
}

export default Stream;