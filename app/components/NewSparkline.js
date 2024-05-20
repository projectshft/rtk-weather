import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

export function NewSparkline({ data, color = 'grey', lineType = 'avg' }) {
  return (
    <Sparklines data={data} width={100} height={30}>
      <SparklinesLine style={{stroke: color, strokeWidth: ".75", fill: color, fillOpacity: ".25"}}/>
      <SparklinesReferenceLine type={lineType}/>
      {/* <SparklinesSpots size={.75} style={{stroke: color, fill: color}}/> */}
    </Sparklines>
  );
};