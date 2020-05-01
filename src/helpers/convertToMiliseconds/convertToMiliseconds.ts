export interface CountdownTimerParams {
  h?: number;
  m?: number;
  s: number;
}

const convertToMiliseconds = ({ h, m, s }: CountdownTimerParams) => {
  const hMs = h ? h * 60 * 60 * 1000 : 0;
  const mMs = m ? m * 60 * 1000 : 0;
  const sMs = s ? s * 1000 : 0;
  return hMs + mMs + sMs + 0.9;
}

export default convertToMiliseconds;
