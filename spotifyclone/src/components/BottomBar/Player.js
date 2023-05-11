import {Icon} from "Icons";
import {useAudio, useFullscreen, useToggle} from 'react-use';
import {secondsToTime} from "utils";
import CustomRange from "components/CustomRange";
import {useEffect, useMemo, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setControls, setPlaying, setSidebar} from "stores/player";


export default function Player() {

    const fsRef = useRef()
    const [show, toggle] = useToggle(false);

    const dispatch = useDispatch()
    const {current, sidebar} = useSelector(state => state.player)

    const [audio, state, controls, ref] = useAudio({
        src: current?.src
    });

    useEffect(() => {
        controls.play()
    }, [current])

    useEffect(() => {
        dispatch(setPlaying(state.playing))
    }, [state.playing])

    useEffect(() => {
        dispatch(setControls(controls))
    }, [])

    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted)
            return 'volumeMuted'
        if (state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if (state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        return 'volumeFull'
    }, [state.volume, state.muted])


    return (
        <div className='flex justify-between px-4 items-center h-full'>
            <div className='min-w-[11.25rem] w-[30%]'>
                {current && (
                    <div className='flex items-center'>
                        <div className='flex items-center'>
                            {!sidebar && (
                                <div className='w-14 h-14 mr-3 flex-shrink-0'>
                                    onClick={()=>dispatch(setSidebar(true))}
                                    <img src={current.image} alt='' />
                                    <button className='w-6 h-6 bg-black rotate-90 rounded-full absolute top-1 right-1 opacity-80 flex items-center justify-center'>
                                        <Icon size={16} name={"arrowLeft"} />
                                    </button>
                                </div>
                            )}

                            <div>
                                <h6 className='text-sm line-clamp-1 '>{current.title}</h6>

                            </div>
                        </div>
                        <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                            <Icon size={16} name={"heart"} />
                        </button>
                        <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                            <Icon size={16} name={"pictureInPicture "} />
                        </button>
                    </div>
                )}
            </div>
            <div className='max-w-[45.125] w-[40%] flex flex-col items-center'>
                <div className='flex items-center gap-x-2'>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"shuffle"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"playerPrev"} />
                    </button>
                    <button
                        onClick={controls[state?.playing ? 'pause' : 'play']}
                        className='w-8 h-8 flex justify-center items-center text-black bg-white rounded-full hover:scale-1.06'>
                        <Icon size={16} name={state?.playing ? 'pause' : 'play'} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"playerNext"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"repeat"} />
                    </button>
                </div>
                <div className='w-full flex items-center mt-1.5 gap-x-2'>
                    {audio}
                    <div className='text-[0.688rem] text-white text-opacity-70'>
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className='text-[0.688rem] text-white text-opacity-70'>
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className='min-w-[11.25rem] w-[30%] flex justify-end items-center '>
                <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                    <Icon size={16} name={"lyrics"} />
                </button>
                <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                    <Icon size={16} name={"queue"} />
                </button>
                <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                    <Icon size={16} name={"device"} />
                </button>
                <button onClick={controls[state.muted ? 'unmute' : 'mute']}
                    className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                    <Icon size={16} name={volumeIcon} />
                </button>
                <div className='w-[5.813rem] max-w-full'>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={1}
                        value={state.muted ? 0 : state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
                <button 
                onClick={toggle}
                className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                    <Icon size={16} name={"fullScreen"} />
                </button>
            </div>
        </div>
    )
}
