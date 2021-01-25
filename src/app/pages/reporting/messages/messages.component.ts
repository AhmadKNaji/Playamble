import { Component, AfterViewInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})

export class MessagesComponent implements AfterViewInit {

  startEnd = {
    start: new Date(),
    end: new Date(),
  };
  channel: string = '';
  messageType: string = '';
  pieOptions: any = {};
  themeSubscription: any;
  areaStackOptions: any = {};
  lineOptions: any = {};

  ngAfterViewInit() {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const xAxisData = [];
      const data1 = [];

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      // BarLineOption!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      this.lineOptions = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight, colors.infoLight],
        legend: {
          data: ['Total'],
          align: 'left',
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            data: xAxisData,
            silent: false,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Total',
            type: 'bar',
            data: data1,
            animationDelay: idx => idx * 10,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: idx => idx * 5,
      };

      xAxisData.push('Monday');
      xAxisData.push('Tuesday');
      xAxisData.push('Wednesday');
      xAxisData.push('Thursday');
      xAxisData.push('Friday');
      xAxisData.push('Saturday');
      xAxisData.push('Sunday');

      for (let i = 0; i < 7; i++) {
        data1.push(Math.floor(Math.random() * 1000 % 1000));
      }

      // AreaStackOptions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      this.areaStackOptions = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: echarts.tooltipBackgroundColor,
            },
          },
        },
        legend: {
          data: ['Wifi', 'Vpn', 'Printer', 'Login Issue', 'Slow PC'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Wifi',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: [
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
            ],
          },
          {
            name: 'Vpn',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: [
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
            ],
          },
          {
            name: 'Printer',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: [
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
            ],
          },
          {
            name: 'Login Issue',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: [
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
            ],
          },
          {
            name: 'Slow PC',
            type: 'line',
            stack: 'Total amount',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            areaStyle: { normal: { opacity: echarts.areaOpacity } },
            data: [
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
              Math.floor(Math.random() * 1000 % 1000),
            ],
          },
        ],
      };

      // pie options!!!!!!!!!!!!!!!!!!!!!!!!!

      this.pieOptions = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Wifi', 'Vpn', 'Printer', 'Login Issue', 'Slow PC'],
          textStyle: {
            color: echarts.textColor,
          },
        },


        series: [
          {
            name: 'Messages',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Vpn' },
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Printer' },
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Login Issue' },
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Slow PC' },
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Wifi' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }



  constructor(private theme: NbThemeService) {
  }

  refresh() {
    this.ngAfterViewInit();
  }

  onSelectChoice(event) {
    this.channel = event;
    this.refresh();
  }

  onMessageType(event) {
    this.messageType = event;
    this.refresh();
  }
}
