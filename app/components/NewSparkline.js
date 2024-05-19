import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export function NewSparkline({ data, color = 'grey', lineType = 'avg' }) {
  return (
    <Sparklines data={data} width={100} height={30}>
      <SparklinesLine color={color}/>
      <SparklinesReferenceLine type={lineType}/>
    </Sparklines>
  );
};