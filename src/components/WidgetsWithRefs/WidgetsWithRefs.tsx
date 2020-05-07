import React, { forwardRef } from 'react';
import CountdownTimer from 'components/CountdownTimer/CountdownTimer';
// import StreamTimer from 'components/StreamTimer/StreamTimer';
// import SocialMediaWidget from 'components/SocialMediaWidget/SocialMediaWidget';
// import LastFmRecentSong from 'components/LastFmRecentSong/LastFmRecentSong';
import { WidgetAlias, ShorthandValues } from 'types';

interface WidgetListObject {
  [key: string]: any;
}

interface WidgetPreviewProps {
  alias: WidgetAlias;
  params: ShorthandValues;
}

const WidgetsWithRefs = forwardRef(({ params }: WidgetPreviewProps, ref) => (
  <CountdownTimer
    params={params}
    ref={ref}
  />
));

// const WidgetsWithRefs = ({ alias, params }: WidgetPreviewProps) => {
//   const widgets = {
//     ct: forwardRef((props: any, ref: any) => (
//       <CountdownTimer
//         params={params}
//         ref={ref}
//         {...props}
//       />
//     )),
//     st: forwardRef((props: any, ref: any) => (
//       <StreamTimer
//         params={params}
//         ref={ref}
//         {...props}
//       />
//     )),
//     sm: forwardRef((props: any, ref: any) => (
//       <SocialMediaWidget
//         params={params}
//         ref={ref}
//         {...props}
//       />
//     )),
//     rs: forwardRef((props: any, ref: any) => (
//       <LastFmRecentSong
//         params={params}
//         ref={ref}
//         {...props}
//       />
//     )),
//   } as WidgetListObject;

//   return (
//     <>
//       {() => widgets[alias]}
//     </>
//   );
// };

export default WidgetsWithRefs;
