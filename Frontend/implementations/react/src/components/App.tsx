// Copyright Epic Games, Inc. All Rights Reserved.

import React, { useCallback, useRef } from 'react';
import { PixelStreamingWrapper } from './PixelStreamingWrapper';
import { InteractiveManager } from '../streamManager/InteractiveManager';

export const App = () => {


    const refs = useRef(null)

    const onClick =  useCallback(() => {
        console.log('1231231', 1231231,refs, refs?.current?.value)
        
        InteractiveManager.currentStream.emitUIInteraction({name: "this is first message from react"})
        
    }, [])

    return (
        <div
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <input ref={refs} value={"11231"}></input>
            <button onClick={onClick}></button>
            <PixelStreamingWrapper
                initialSettings={{
                    AutoPlayVideo: true,
                    AutoConnect: true,
                    ss: 'ws://localhost:80',
                    StartVideoMuted: true,
                    HoveringMouse: true
                }}
            />
        </div>
    );
};
