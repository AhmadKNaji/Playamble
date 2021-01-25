import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  text: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  private alive = true;

  messageCard: CardSettings = {
    title: 'Messages',
    iconClass: 'nb-paper-plane',
    type: 'primary',
    text: '545 messages',
  };
  successCard: CardSettings = {
    title: 'Success Rates',
    iconClass: 'nb-checkmark-circle',
    type: 'success',
    text: '90%',
  };
  incidentsCard: CardSettings = {
    title: 'Incident Rates',
    iconClass: 'nb-compose',
    type: 'info',
    text: '76%',
  };
  servicesCard: CardSettings = {
    title: 'Services Rates',
    iconClass: 'nb-gear',
    type: 'warning',
    text: '24%',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.messageCard,
    this.successCard,
    this.incidentsCard,
    this.servicesCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.messageCard,
          type: 'warning',
        },
        {
          ...this.successCard,
          type: 'primary',
        },
        {
          ...this.incidentsCard,
          type: 'danger',
        },
        {
          ...this.servicesCard,
          type: 'info',
        },
      ],
      dark: this.commonStatusCardsSet,
    };

  successAreaStackOptions: any = {};
  messageAreaStackOptions: any = {};
  themeSubscription: any;
  lineOptions: any = {};

  ngOnInit() {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      const xAxisData = [];
      const data1 = [];
      // Bar Line Options!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

      // Message Area Stack Options!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


      this.messageAreaStackOptions = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
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

      // Success Area Stack Options!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      this.successAreaStackOptions = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
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
    });
  }

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme()
    .pipe(takeWhile(() => this.alive))
    .subscribe(themeOptions => {
      this.statusCards = this.statusCardsByThemes[themeOptions.name];
  });
  }


}
