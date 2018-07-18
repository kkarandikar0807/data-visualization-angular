import {Component, OnInit} from '@angular/core';
import {DataVisualService} from "../services/data-visual.service";
import {VisualData} from "../models/visual-data";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  private
  constructor(private _dataService: DataVisualService) {
    this._dataService = _dataService;
  }
  ngOnInit(): void {
    this._dataService.getData().subscribe(res => this.mapper(res));
  }
  private isDataLoaded: boolean = false;
  private data: VisualData[] = [];
  private mapper (response: VisualData[]) {
    response.forEach(r => this.data.push(new VisualData(r.id, r.label, r.value, r.color)));
    this.isDataLoaded = true;
  }
  public pieChartData = [{
    id: 0,
    label: 'slice 1',
    value: 50,
    color: 'blue',
  }, {
    id: 1,
    label: 'slice 2',
    value: 20,
    color: 'black',
  }, {
    id: 2,
    label: 'slice 3',
    value: 30,
    color: 'red',
  }]



}
