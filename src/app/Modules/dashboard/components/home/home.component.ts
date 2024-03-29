import { HelperService } from 'src/app/core/helper-services/helper.service';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { ActivatedRoute } from '@angular/router';
interface IChart{
  toDo:number,
  inProgress:number,
  done:number

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName=localStorage.getItem('userName');
  chart:IChart| any = [];
 // isDashboardManagerHomeRoute: boolean;

  constructor( private _helpServ:HelperService, private _Route:ActivatedRoute){
   // this.isDashboardManagerHomeRoute = this._Route.snapshot.routeConfig?.path === 'dashboard/employee/home';
  }
  ngOnInit() {

this._helpServ.getProgressCharts().subscribe({
  next:(res)=>{
this.chart=res;
console.log(this.chart);
this.isChart(res,'canvas','line');
  },
  error:(err)=>{
console.log(err);

  },complete:()=>{
//  console.log("charts ");
  }
})
this._helpServ.getUserCharts().subscribe({
  next:(res)=>{
this.chart=res;
console.log(this.chart);
this.isChart(res,'canvasU','bar');
  },
  error:(err)=>{
console.log(err);

  },complete:()=>{
   // console.log(" ");
  }
})
  }

isChart(res:IChart,canv:string,Itype:any){
//  let chartsNum= res;
let chartsNum=Object.entries(res)
let Result=new Map(chartsNum);
//console.log(...Result.keys());
//console.log(...Result.values());
  this.chart = new Chart(canv, {  
    type: Itype,
    data: {
      labels: [...Result.keys()],
      datasets: [
        {
          label: '# of Votes',
          data: [...Result.values()

          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}














}
