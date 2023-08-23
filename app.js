angular
  .module("myApp", [])
  .controller("DonutChartController", function ($scope, $timeout, $element) {
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
              enabled: false,
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

      Highcharts.chart("donutChart2", {
        chart: {
          type: "pie",
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
        },
        title: {
          text: "Tenants By Customer Type",
        },
        plotOptions: {
          pie: {
            innerSize: "50%",
            dataLabels: {
              enabled: false,
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
            name: "Tenants",
            data: [
              { name: "Not Assigned", y: 90 },
              { name: "Retail", y: 26 },
              { name: "Professional Office", y: 24 },
              { name: "Service", y: 5 },
              { name: "Food & Beverage", y: 2 },
            ],
          },
        ],
      });

      Highcharts.chart("donutChart3", {
        chart: {
          type: "pie",
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
        },
        title: {
          text: "Tenants By Lease Type",
        },
        plotOptions: {
          pie: {
            innerSize: "50%",
            dataLabels: {
              enabled: false,
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
            name: "Tenants",
            data: [
              { name: "Office -- Net", y: 72 },
              { name: "Retail -- Net", y: 9 },
              { name: "Retail -- Food Court", y: 24 },
              { name: "Industrial -- Net", y: 5 },
            ],
          },
        ],
      });
    };

    $scope.charts = [
      { id: "donutChart1" },
      { id: "donutChart2" },
      { id: "donutChart3" },
    ];

    $scope.showLeftButton = true;
    $scope.showRightButton = true;

    $scope.updateScrollButtons = function () {
      const container = $element[0].querySelector(".chart-container");
      $scope.showLeftButton = container.scrollLeft > 0;
      $scope.showRightButton =
        container.scrollLeft + container.clientWidth < container.scrollWidth;
    };

    $scope.scrollLeft = function () {
      const container = $element[0].querySelector(".chart-container");
      container.scrollBy({
        left: -container.clientWidth / 2,
        top: 0,
        behavior: "smooth",
      });
      $scope.updateScrollButtons();
    };

    $scope.scrollRight = function () {
      const container = $element[0].querySelector(".chart-container");
      container.scrollBy({
        left: container.clientWidth / 2,
        top: 0,
        behavior: "smooth",
      });
      $scope.updateScrollButtons();
    };

    $timeout(function () {
      $scope.initCharts();
      $scope.updateScrollButtons();
    });

    $element[0]
      .querySelector(".chart-container")
      .addEventListener("scroll", $scope.updateScrollButtons);
  });
