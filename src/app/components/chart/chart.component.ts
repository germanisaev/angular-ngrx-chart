import { Component, OnInit } from '@angular/core';
import { ChartService } from '@app/services/chart.service';
import { GetChart } from '@app/store/actions';
import { AppState, selectChartState } from '@app/store/app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

  getData: any;
  chartRows: any;
  data: any[] = [];
  chartData: any = {};

  getOptions = {
    hAxis: {
      title: 'Month',
      id: "month",
      label: "month",
      type: "string"
    },
    vAxis: {
      title: 'Corona',
      id: "corona",
      label: "corona",
      type: "number"
    },
    seriesType: 'bars',
    series: { 1: { type: 'line' }, 2: { type: 'scatter' } }
  };

  constructor(private store: Store<AppState>, private chartService: ChartService) {
    this.getData = this.store.select(selectChartState);
  }

  ngOnInit() {
    this.store.dispatch(new GetChart);
    this.refresh();
  }

  refresh() {
    if (this.data.length > 0)
      this.clear();

    this.chartService.getChart().subscribe((data) => {
      this.chartRows = data;
      for (let row of this.chartRows.rows) {
        this.data.push([row.month, parseInt(row.point1), parseInt(row.point2), parseInt(row.point3)]);
      }
    });

    this.chartData = {
      type: 'ComboChart',
      data: [this.data],
      chartColumns: ['Month', '2021', '2020', '2019'],
      options: this.getOptions,
      width: 1000,
      height: 400
    };
  }

  clear() {
    while (this.data.length > 0) {
      this.data.pop();
    }
  }

}
