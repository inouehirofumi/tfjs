import React, { useState, useRef, useEffect } from 'react';
import '@tensorflow/tfjs-backend-cpu';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import Webcam from 'react-webcam';


export const Detector: React.FC = () => {
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const [background, setBackground] = useState<boolean>(true);
    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const runDetect = async () => {
       const model = await cocoSsd.load();
       console.log('model loaded.')
       setInterval(() => {
           detect(model);
       }, 10);
       detect(model);
    }

    const detect = async (model: any) => {
        if (webcamRef.current && canvasRef.current) {
            console.log('webcam and canvas are ready.');
            const webcamCurrent = webcamRef.current as any;
            if (webcamCurrent.video.readyState === 4) {
                console.log('webcam current ready state is 4.');
                const video = webcamCurrent.video;
                const videoWidth = webcamCurrent.video.videoWidth;
                const videoHeight = webcamCurrent.video.videoHeight;
                canvasRef.current.width = videoWidth;
                canvasRef.current.height = videoHeight;

                console.log('detect start.');
                const predictions = await model.detect(video);
                console.log('detect end.');
                if (predictions.length) {
                    console.log(predictions);
                }

                console.log('draw.')
                let count = 0;
                const ctx = canvasRef.current.getContext('2d');
                ctx?.clearRect(0, 0, videoWidth, videoHeight);
                predictions.forEach((prediction: any) => {
                    if (prediction.class === 'person' && prediction.score >= 0.5) {
                        count++;
                        const bbox = prediction.bbox;
                        ctx?.strokeRect(bbox[0], bbox[1], bbox[2], bbox[3]);
                    }
                })
                const date = new Date();
                ctx?.fillText(
                    date.getFullYear()+'/'
                    +(date.getMonth()+1)+'/'
                    +date.getDate()+' '
                    +date.getHours()+':'
                    +date.getMinutes()+':'
                    +date.getSeconds()
                    +' count: '+count, 0, 10
                );
            }
        }
    }

    useEffect(() => {
        runDetect();
    }, []);

    return (
        <div>
            {isCaptureEnable || (
                <button onClick={() => setCaptureEnable(true)}>start</button>
            )}
            {isCaptureEnable && (
                <>
                    <div>
                        <button onClick={() => setCaptureEnable(false)}>end</button>
                    </div>
                    {background || (
                        <>
                            <button onClick={() => setBackground(true)}>background on</button>
                            <Webcam 
                                audio={false} 
                                ref={webcamRef} 
                                style={{
                                    position: 'absolute',
                                    margin: 'auto',
                                    textAlign: 'center',
                                    top: 100,
                                    left: 0,
                                    right: 0,
                                    zIndex: 9,
                                    width: 640,
                                    height: 480,
                                    visibility: 'hidden',
                                }}
                            />
                        </>
                    )}
                    {background && (
                        <>
                            <button onClick={() => setBackground(false)}>background off</button>
                            <Webcam 
                                audio={false} 
                                ref={webcamRef} 
                                style={{
                                    position: 'absolute',
                                    margin: 'auto',
                                    textAlign: 'center',
                                    top: 100,
                                    left: 0,
                                    right: 0,
                                    zIndex: 9,
                                    width: 640,
                                    height: 480,
                                }}
                            />
                        </>
                    )}
                    <canvas 
                        ref={canvasRef}
                        style={{
                            position: 'absolute',
                            margin: 'auto',
                            textAlign: 'center',
                            top: 100,
                            left: 0,
                            right: 0,
                            zIndex: 9,
                            width: 640,
                            height: 480,
                            border: '1px solid',
                        }}

                    />
                </>
            )}
        </div>
    );
}

