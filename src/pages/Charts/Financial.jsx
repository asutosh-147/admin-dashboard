import React from "react";
import { Header } from "../../components";
import {
  CandleSeries,
  ChartComponent,
  Crosshair,
  DateTime,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Zoom,
} from "@syncfusion/ej2-react-charts";
import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from "../../data/dummy";
const Financial = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Hilo" title="Project Cost Breakdown" />
      <ChartComponent
        id="financial-chart"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        legendSettings={{visible:true}}
        tooltip={{enable:true}}
        border={{width:0}}
        zoomSettings={{enableMouseWheelZooming:true,enablePinchZooming:true,enableSelectionZooming:true}}
        crosshair={{enable:true}}
        
        style={{textAlign:'center'}}
      >
        <Inject
          services={[CandleSeries, Tooltip, DateTime, Crosshair, Zoom]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={financialChartData} xName="x" yName="low" low="low" high="high" open="open" close="close" type="Candle" name="Financial Chart" ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
