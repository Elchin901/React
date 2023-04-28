import { Icon } from 'Icons'
import React from 'react'
import { Range, getTrackBackground } from "react-range"

export default function Player() {

    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;

    connst[values , setValues] = useState([])
    return (
        <div className='flex justify-between px-4 items-center h-full'>
            <div className='min-w-[11.25rem] w-[30%]'>
                sol
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-x-2'>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"shuffle"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"playerPrev"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-black bg-white rounded-full hover:scale-1.06'>
                        <Icon size={16} name={"play"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"playerNext"} />
                    </button>
                    <button className='w-8 h-8 flex justify-center items-center text-white text-opacity-50 hover:text-opacity-100'>
                        <Icon size={16} name={"repeat"} />
                    </button>
                </div>
                <div>
                <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
                </div>
            </div>
            <div className='min-w-[11.25rem] w-[30%] flex justify-end '>
                sag
            </div>
        </div>
    )
}
