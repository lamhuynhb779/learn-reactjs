import {forwardRef, useImperativeHandle, useRef} from 'react';
import video1 from './videos/video1.mp4';

function Video(props, forwardedRef) {

    const videoRef = useRef();

    useImperativeHandle(forwardedRef, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }))

    return (
        <video ref={videoRef} src={video1} width={280} />
    )
}

export default forwardRef(Video);