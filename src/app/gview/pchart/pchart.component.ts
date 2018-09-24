import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pchart',
  templateUrl: './pchart.component.html',
  styleUrls: ['./pchart.component.scss']
})
export class PchartComponent implements OnInit {
  public chartOption = {
    title: {
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }


  // public chartOption = {
  //   backgroundColor: '#2c343c',
  //   title: {
  //     text: 'Customized Pie',
  //     left: 'center',
  //     top: 20,
  //     textStyle: {
  //       color: '#ccc'
  //     }
  //   },

  //   tooltip: {
  //     trigger: 'item',
  //     formatter: '{a} <br/>{b} : {c} ({d}%)',
  //   },
  //   visualMap: {
  //     show: false,
  //     min: 80,
  //     max: 600,
  //     inRange: {
  //       colorLightness: [0, 1]
  //     }
  //   },
  //   series: [
  //     {
  //       name: '访问来源',
  //       type: 'pie',
  //       radius: '55%',
  //       center: ['50%', '50%'],
  //       data: [
  //         { value: 335, name: '直接访问' },
  //         { value: 310, name: '邮件营销' },
  //         { value: 274, name: '联盟广告' },
  //         { value: 235, name: '视频广告' },
  //         { value: 400, name: '搜索引擎' }
  //       ].sort(function (a, b) { return a.value - b.value; }),
  //       roseType: 'radius',
  //       label: {
  //         normal: {
  //           textStyle: {
  //             color: 'rgba(255, 255, 255, 0.6)'
  //           }
  //         }
  //       },
  //       labelLine: {
  //         normal: {
  //           lineStyle: {
  //             color: 'rgba(255, 255, 255, 0.3)'
  //           },
  //           smooth: 0.2,
  //           length: 10,
  //           length2: 20
  //         }
  //       },
  //       itemStyle: {
  //         normal: {
  //           color: '#c23531',
  //           shadowBlur: 200,
  //           shadowColor: 'rgba(0, 0, 0, 0.5)'
  //         }
  //       },
  //       animationType: 'scale',
  //       animationEasing: 'elasticOut',
  //       animationDelay: function (idx) {
  //         return Math.random() * 200;
  //       }
  //     }
  //   ]
  // };


}
