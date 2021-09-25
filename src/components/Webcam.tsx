import '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-converter';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

export const Camera: React.FC = () => {
    const modelName: string = 'cocoSsd';
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
    const webcam = useRef<Webcam>(null);
    const canvas = useRef<HTMLCanvasElement>(null);
    const [url, setUrl] = useState<string | null>(null);
    const capture = useCallback(() => {
        const imageSrc = webcam.current?.getScreenshot();
        const date = new Date();
        if (imageSrc) {
            setUrl(imageSrc);
            let img = new Image;
            img.src = imageSrc;
            if (modelName === 'mobilenet') {
                mobilenet.load().then(model => {
                    console.log('model loaded');
                    model.classify(img).then(predictions => {
                        console.log('predictions: ', predictions);
                    })
                });
            } else if (modelName === 'cocoSsd') {
                cocoSsd.load().then(model => {
                    console.log('model loaded');
                    model.detect(img).then(predictions => {
                        console.log('predictions: ', predictions);
                        if (canvas.current) {
                            canvas.current.width = img.naturalWidth;
                            canvas.current.height= img.naturalHeight;
                            const ctx = canvas.current.getContext('2d');
                            ctx?.drawImage(img, 0, 0);
                            let count = 0;
                            predictions.forEach((prediction) => {
                                if (prediction.class === 'person' && prediction.score >= 0.5) {
                                    count++;
                                    const bbox = prediction.bbox;
                                    ctx?.strokeRect(bbox[0], bbox[1], bbox[2], bbox[3]);
                                }
                            });
                            ctx?.fillText(
                                date.getFullYear()+'/'
                                +(date.getMonth()+1)+'/'
                                +date.getDate()+' '
                                +date.getHours()+':'
                                +date.getMinutes()+':'
                                +date.getSeconds()
                                +' count: '+count, 100, 100
                            );
                            console.log(count);
                        }
                    })
                })
            }
        }
    }, [webcam]);


    const runDetect = async () => {
        if (webcam.current) {
            const webcamCurrent = webcam.current as any;
            console.log(webcamCurrent.video.readyState);
            if (webcamCurrent.video.readyState === 4) {
                const video = webcamCurrent.video;
                console.log('model load start')
                mobilenet.load().then(model => {
                    console.log('loaded')
                    model.classify(video).then(predictions => {
                        console.log('Predictions: ', predictions);
                    })
                });
                console.log(video);
            }
        }
    }

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
                    <div>
                        <Webcam
                            audio={false}
                            width={540}
                            height={360}
                            ref={webcam}
                            screenshotFormat='image/jpeg'
                        />
                    </div>
                    <button onClick={capture}>capture</button>
                </>
            )}
            {url && (
                <>
                    <div>
                        <button onClick={() => {setUrl(null)}}>delete</button>
                    </div>
                    {/*
                    <div>
                        <img src={url} alt='Screenshot'/>
                    </div>
                    */}
                    <canvas 
                        ref={canvas}
                    />
                        {/*
                        style={{
                            position: 'absolute',
                            margin: 'auto',
                            textAlign: 'center',
                            top: 100,
                            left: 0,
                            right: 0,
                            zIndex: 9
                        }}
                        */}
                </>
            )}
        </div>
    );
}