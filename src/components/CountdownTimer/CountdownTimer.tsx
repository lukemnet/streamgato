import React from 'react';
import {
  PositionX,
  PositionY,
  FlexPosition,
  FontWeight,
  FontStyle,
} from 'types';
import Timer from 'react-compound-timer';
import convertToMiliseconds from 'helpers/convertToMiliseconds/convertToMiliseconds';
import addLeadingZeros from 'helpers/addLeadingZeros/addLeadingZeros';
import './CountdownTimer.scss';

interface CountdownTimerParams {
  h: number;
  m: number;
  s: number;
  lz: boolean;
  bg: string;
  col: string;
  w: string;
  px: PositionX;
  py: PositionY;
  ta: PositionX;
  ff: string;
  fz: number;
  fw: FontWeight;
  fs: FontStyle;
  ls: number;
  pt: number;
  pb: number;
  pl: number;
  pr: number;
  cs: string;
};

interface CountdownTimerProps {
  params: Partial<CountdownTimerParams>;
}

interface FlexPositions {
  [key: string]: FlexPosition;
};

const CountdownTimer = ({ params }: CountdownTimerProps) => {
  const {
    h,
    m,
    s,
    bg,
    col,
    w,
    px,
    py,
    ta,
    ff,
    fz,
    fw,
    fs,
    ls,
    pt,
    pb,
    pl,
    pr,
    cs,
  } = params;

  const flexPositionX = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  } as FlexPositions;

  const flexPositionY = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  } as FlexPositions;

  const stylesheetUrl = cs
    ? `https://${cs.replace(/^http(s)?:\/\//,'')}`
    : undefined;

  const wrapperStyles = {
    justifyContent: px ? flexPositionX[px as string] : 'center',
    alignItems: py ? flexPositionY[py as string] : 'center',
  };

  const widgetStyles = {
    backgroundColor: bg || 'transparent',
    color: col || 'black',
    width: w ? `${w}px` : 'auto',
    textAlign: ta || 'center',
    fontFamily: ff ? ff : 'Arial',
    fontWeight: fw ? fw : 'normal',
    fontSize: fz ? fz : 'medium',
    fontStyle: fs ? fs : 'normal',
    letterSpacing: ls ? `${ls}px` : 'normal',
    paddingTop: pt ? `${pt}px` : 0,
    paddingBottom: pb ? `${pb}px` : 0,
    paddingLeft: pl ? `${pl}px` : 0,
    paddingRight: pr ? `${pr}px` : 0,
  };

  const initialTime = convertToMiliseconds({ h, m, s });

  return (
    <>
      {cs && (
        <link
          rel='stylesheet'
          href={stylesheetUrl as string} />
      )}
      <div
        className='widgetWrapper'
        style={wrapperStyles}
      >
        <div
          className='countdownTimer'
          style={widgetStyles}
        >
          <Timer
            initialTime={initialTime}
            lastUnit='h'
            direction='backward'
            formatValue={addLeadingZeros}
          >
            {() => (
              <>
                <span className='hours'>
                  <Timer.Hours />
                </span>
                <span className='separator' />
                <span className='minutes'>
                  <Timer.Minutes />
                </span>
                <span className='separator' />
                <span className='seconds'>
                  <Timer.Seconds />
                </span>
              </>
            )}
          </Timer>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
