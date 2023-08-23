angular
  .module("myApp", [])
  .controller("DonutChartController", function ($scope, $timeout) {
    $scope.initCharts = function () {
      Highcharts.chart("donutChart1", {
        chart: {
          type: "pie",
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
        },
        title: {
          text: "Tenants By Lease Expiration",
        },
        plotOptions: {
          pie: {
            innerSize: "50%",
            dataLabels: {
              enabled: true,
            },
            showInLegend: true, // This line will show pie slices in the legend
            point: {
              events: {
                click: function () {
                  $scope.selectedData = this;
                  $scope.$apply(); // Inform AngularJS of the update
                },
              },
            },
          },
        },
        legend: {
          align: "right",
          verticalAlign: "middle",
          layout: "vertical",
          labelFormatter: function () {
            return this.name + ": " + this.y;
          },
        },

        series: [
          {
            name: "Brands",
            data: [
              { name: "Month to month", y: 12 },
              { name: "Less than 18 months", y: 149 },
              { name: "18 to 36 months", y: 3 },
              { name: "More than 36 months", y: 17 },
            ],
          },
        ],
      });

      // You can add initialization for donutChart2 and donutChart3 here as well.
    };

    $timeout(function () {
      $scope.initCharts();
    });
  });
