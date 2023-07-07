// import _ from 'lodash';

var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
    4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
    3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
    3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3,
    2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3,
    2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3,
    2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6,
    3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
    2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7,
    3.2, 3.3, 3, 2.5, 3, 3.4, 3
  ];
  
  var pointsInInterval = 1;

export function getOptionForBellcurve(){
    return {
        chart: {
          margin: [50, 0, 50, 50],
        //   events: {
        //     load: function() {
        //         option.series[0].data.forEach(function(point:any, i:number){
        //             let labels = ['','','5%', '10%', '60%', '20%','5%','',''];
        //             if (i % pointsInInterval === 0) {
        //               point.update({
        //                 color: 'black',
        //                 dataLabels: {
        //                   enabled: true,
        //                   format: labels[Math.floor(i / pointsInInterval)],
        //                   overflow: 'none',
        //                   /* position: '', */
        //                   crop: false,
        //                   y: -10,
        //                   style: {
        //                     fontSize: '13px'
        //                   }
        //                 }
        //               });
        //             }
        //         })
        //     //   Highcharts.each(this.series[0].data, function(point, i) {
        //     //     var labels = ['','','5%', '10%', '60%', '20%','5%','',''];
        //     //     if (i % pointsInInterval === 0) {
        //     //       point.update({
        //     //         color: 'black',
        //     //         dataLabels: {
        //     //           enabled: true,
        //     //           format: labels[Math.floor(i / pointsInInterval)],
        //     //           overflow: 'none',
        //     //           /* position: '', */
        //     //           crop: false,
        //     //           y: -10,
        //     //           style: {
        //     //             fontSize: '13px'
        //     //           }
        //     //         }
        //     //       });
        //     //     }
        //     //   });
        //     }
        //   }
        },
      
        title: {
          text: null
        },
      
        legend: {
          enabled: false
        },
      
        xAxis: [{
          title: {
            text: 'Data'
          },
          visible: true
        }, {
          title: {
            text: 'Bell curve'
          },
          opposite: true,
          visible: false
        }],
      
        yAxis: [{
          title: {
            text: 'Data'
          },
          visible: true
        }, {
          title: {
            text: 'Bell curve'
          },
          opposite: true,
          visible: false
        }],
      
        series: [{
          name: 'Bell curve',
          type: 'bellcurve',
          xAxis: 1,
          yAxis: 1,
          pointsInInterval: pointsInInterval,
          intervals: 4,
          baseSeries: 1,
          zIndex: -1,
          marker: {
            enabled: false
          },
          zoneAxis: 'x',
          zones: [{
            value: 2.18,
            color: 'rgb(255, 0, 0, 0.25)'
          }, {
            value: 2.62,
            color: 'rgb(0, 102, 255, 0.25)'
          }, {
            value: 3.49,
            color: 'rgb(51, 204, 51, 0.25)'
          }, {
            value: 3.92,
            color: 'rgb(0, 102, 255, 0.25)'
          }, {
            color: 'rgb(255, 0, 0, 0.25)'
          }, ]
      
        }, {
          name: 'Data',
          type: 'scatter',
          data: data,
          visible: false,
          marker: {
            radius: 1.5
          },
        }]
      }
}


const areaDefaultConfig = ()=> {
    return  {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'bellcurve',
          height: 450,
      },
      exporting: {
          enabled: false
      },
      title: {
          text: 'Bell Curve',
          align: 'center',
      },
      tooltip: {
        shared: true,
        valueSuffix: ' '
      },
      plotOptions: {
          area: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: true
          }
      },
      series: [{
          name: '',
          colorByPoint: true,
          data:[],
        }] 
    }	
}
//   type: 'bellcurve',

  export const makeBellcurve = (areaReportController?: any) => {
    let defaultConfig  = areaDefaultConfig();
    // let dbChartData = JSON.parse(areaReportController.reportData);
    // let tablerecords = getReportData(dbChartData);
    // let userConfig = prapareUserConfigForChart(tablerecords,areaReportController.reportConfig,false);
    // let dispchartOptions = _.extend(true, {}, defaultConfig, userConfig);
    return defaultConfig;
  }