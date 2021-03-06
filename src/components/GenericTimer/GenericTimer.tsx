import React  from 'react';
import Timer from 'react-compound-timer';
import FontProvider from 'components/FontProvider/FontProvider';
import convertToMiliseconds from 'helpers/convertToMiliseconds/convertToMiliseconds';
import addLeadingZeros from 'helpers/addLeadingZeros/addLeadingZeros';
import {
  PositionX,
  PositionY,
  FlexPosition,
  FontWeight,
  FontStyle,
  BorderStyle,
  TimerRef,
} from 'types';
import './GenericTimer.scss';

export interface GenericTimerParams {
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
  btz: number;
  bts: BorderStyle;
  btc: string;
  bbz: number;
  bbs: BorderStyle;
  bbc: string;
  blz: number;
  bls: BorderStyle;
  blc: string;
  brz: number;
  brs: BorderStyle;
  brc: string;
  rtl: number;
  rtr: number;
  rbl: number;
  rbr: number;
};

export interface GenericTimerProps {
  params: Partial<GenericTimerParams>;
  direction: 'forward' | 'backward';
}

interface FlexPositions {
  [key: string]: FlexPosition;
};

const GenericTimer =
  React.forwardRef(({ params, direction }: GenericTimerProps, ref) => {
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
      btz,
      bts,
      btc,
      bbz,
      bbs,
      bbc,
      blz,
      bls,
      blc,
      brz,
      brs,
      brc,
      rtl,
      rtr,
      rbl,
      rbr,
    } = params || {};

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
      backgroundColor: bg ? decodeURIComponent(bg) : 'transparent',
      color: col ? decodeURIComponent(col) : 'black',
      width: w ? `${w}px` : 'auto',
      textAlign: ta || 'center',
      fontFamily: ff ? ff : 'Arial',
      fontWeight: fw ? fw : 'normal',
      fontSize: fz ? `${fz}px` : 'medium',
      fontStyle: fs ? fs : 'normal',
      letterSpacing: ls ? `${ls}px` : 'normal',
      paddingTop: pt ? `${pt}px` : 0,
      paddingBottom: pb ? `${pb}px` : 0,
      paddingLeft: pl ? `${pl}px` : 0,
      paddingRight: pr ? `${pr}px` : 0,
      borderTopWidth: btz ? `${btz}px` : 0,
      borderTopStyle: bts || 'none',
      borderTopColor: btc ? decodeURIComponent(btc) : 'transparent',
      borderBottomWidth: bbz ? `${bbz}px`: 0,
      borderBottomStyle: bbs || 'none',
      borderBottomColor: bbc ? decodeURIComponent(bbc) : 'transparent',
      borderLeftWidth: blz ? `${blz}px` : 0,
      borderLeftStyle: bls || 'none',
      borderLeftColor: blc ? decodeURIComponent(blc) : 'transparent',
      borderRightWidth: brz ? `${brz}px` : 0,
      borderRightStyle: brs || 'none',
      borderRightColor: brc ? decodeURIComponent(brc) : 'transparent',
      borderTopLeftRadius: rtl ? `${rtl}px` : 0,
      borderTopRightRadius: rtr ? `${rtl}px` : 0,
      borderBottomLeftRadius: rbl ? `${rtl}px` : 0,
      borderBottomRightRadius: rbr ? `${rtl}px` : 0,
    };

    const initialTime = convertToMiliseconds({ h, m, s });

    return (
      <>
        {cs && (
          <link
            rel='stylesheet'
            href={stylesheetUrl}
          />
        )}
        <FontProvider name={ff}>
          <div
            className='widgetWrapper'
            style={wrapperStyles}
          >
            <div
              className='genericTimer'
              style={widgetStyles}
            >
              <Timer
                {...direction === 'backward' && { initialTime }}
                lastUnit='h'
                direction={direction}
                formatValue={addLeadingZeros}
                timeToUpdate={998.9}
                ref={ref as TimerRef}
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
        </FontProvider>
      </>
    );
  });

export default GenericTimer;
