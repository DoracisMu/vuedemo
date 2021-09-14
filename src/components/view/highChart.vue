<template>
  <div>
    <div id="highC" style="width: 600px;height: 400px"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: "highChart",
  data() {
    return {

    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const highC = document.getElementById('highC')
      var chart = {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      };
      var title = {
        text: '测试占有率'
      };
      var tooltip = {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      };
      var colors=['#FF0000','#00FF00','#0000FF','#FFFF00','#00FFFF','#FF00FF']; //设置饼图颜色
      var credits = {
        enabled: false //禁用版权url    此处不设置，  会显示highecharts.com
      };
      var plotOptions = {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 25, //饼图厚度
          // color:pieColors,
          dataLabels: {
            distance: 20,//设置引导线的长度
            // color:'red',//全局设置字体颜色
            enabled: true,
            // format: '{point.name}',
            formatter: function() { //设置字体与引导线和饼图颜色一致
              if (this.point.name == '中国'){
                return '<span style="color:#FF0000">['+ this.point.name +' '+ Highcharts.numberFormat(this.percentage, 2)+'%]</span>';
              } else if (this.point.name == '美国'){
                return '<span style="color:#00FF00">['+ this.point.name +' '+ Highcharts.numberFormat(this.percentage, 2)+'%]</span>';
              } else if (this.point.name == '俄罗斯'){
                return '<span style="color:#0000FF">['+ this.point.name +' '+Highcharts.numberFormat(this.percentage, 2)+'%]</span>';
              } else if (this.point.name == '英国'){
                return '<span style="color:#FFFF00">['+ this.point.name +' '+ Highcharts.numberFormat(this.percentage, 2)+'%]</span>';
              } else if (this.point.name == '朝鲜'){
                return '<span style="color:#00FFFF">['+ this.point.name +' '+ Highcharts.numberFormat(this.percentage, 2)+'%]</span>';
              } else if (this.point.name == '日本'){
                return '<span style="color:#FF00FF">['+ this.point.name +' '+ Highcharts.numberFormat(this.percentage, 2)+'%]</span>';
              }
            }
            /* style: {
                 fontSize: '10px',//设置字体大小
                 fontFamily: 'Verdana, sans-serif'
             }*/
          }
        }

      };
      var series= [{
        type: 'pie',
        name: 'Browser share',
        startAngle: 180,//调整饼图的角度   方向：顺时针
        data: [
          ['中国', 45.0],
          ['美国', 16.8],
          {
            name: '俄罗斯',
            y: 22.8,
            sliced: true,
            selected: true
          },
          ['英国', 8.5],
          ['朝鲜', 6.2],
          ['日本', 0.1]
        ]
      }];

      var json = {};

      json.chart = chart;
      json.title = title;
      json.tooltip = tooltip;
      json.colors = colors; // 设置饼图颜色
      json.credits = credits;
      json.plotOptions = plotOptions;
      json.series = series;
      highC.highChart(json)
    }
  }
}
</script>

<style scoped>

</style>
