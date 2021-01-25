import { Component, AfterViewInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ReportingService } from '../services/reporting.service';

@Component({
  selector: 'ngx-chatbot-success-rate',
  templateUrl: './chatbot-success-rate.component.html',
  styleUrls: ['./chatbot-success-rate.component.scss'],
})
export class ChatbotSuccessRateComponent implements AfterViewInit {
  startEnd = {
    start: new Date(),
    end: new Date(),
  };
  data: any;
  channel: string = '';
  messageType: string = '';
  pieFailOptions: any = {};
  themeSubscription: any;
  areaStackOptions: any = {};
  pieTopOptions: any = {};

  ngAfterViewInit() {
    
    console.log(this.data);
    

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      // TopFailPieChart!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      this.pieFailOptions = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Port', 'Satellite', 'Brightness', 'Keyboard', 'Microphone'],
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
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Satellite' },
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Brightness' },
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Keyboard' },
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Microphone' },
              { value: Math.floor(Math.random() * 1000 % 1000), name: 'Port' },
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

      this.pieTopOptions = {
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
    this.data = {
      start: `${this.startEnd.start.getFullYear()}-${this.startEnd.start.getMonth()}-${this.startEnd.start.getDate()}`,
      end: `${this.startEnd.end.getFullYear()}-${this.startEnd.end.getMonth()}-${this.startEnd.end.getDate()}`
    }
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
