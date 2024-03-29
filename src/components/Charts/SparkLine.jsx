import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      // id=''
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{color:currentColor,width:2}}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible:true,
        format:'${x} : data ${yval}',
        trackLineSettings:{
          visible:true
        }
      }}
      markerSettings={{
        visible:['All'],
        fill:[color]
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
