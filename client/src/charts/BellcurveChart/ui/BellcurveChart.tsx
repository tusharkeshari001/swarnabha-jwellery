import React from "react";
import Chart from "highcharts-react-official";
import Highcharts from "highcharts";
import {
  makeBellcurve,
  getOptionForBellcurve,
} from "../services/BellcurveChartServices";

const BellcurveChart = () => {
  let option: any = makeBellcurve();
  return (
    <div style={{ height: "85vh", width: "100%" }}>
      <Chart highcharts={Highcharts} option={option} />
    </div>
  );
};

export default BellcurveChart;
