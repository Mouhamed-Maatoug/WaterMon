import { Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
class Complaints {
  complaint!: string;

  count!: number;
}
export class ComplaintsWithPercent {
  complaint!: string;

  count!: number;

  cumulativePercent!: number;
}
const complaintsData: Complaints[] = [
  { complaint: '10:00', count: 40 },
  { complaint: '10:02', count: 40 },
  { complaint: '10:03', count: 40 },
  { complaint: '10:04', count: 41 },
  { complaint: '10:05', count: 41 },
  { complaint: '10:06', count: 41 },
  { complaint: '10:07', count: 42 },
];
const complaintsData1: Complaints[] = [
  { complaint: '10:00', count: 25.0 },
  { complaint: '10:02', count: 25.1 },
  { complaint: '10:03', count: 25.1 },
  { complaint: '10:04', count: 25.6 },
  { complaint: '10:05', count: 25.1 },
  { complaint: '10:06', count: 25.1 },
  { complaint: '10:07', count: 25.1 },
];

@Component({
  selector: 'app-devices-details',
  templateUrl: './devices-details.component.html',
  styleUrls: ['./devices-details.component.css']
})

export class DevicesDetailsComponent {


  title = "Zones" ;
  public  SchedulerdataSource : {date : string , starttime : string , duration : string}[] =[
    {
      date : '14-08-2023' ,
      starttime : '05:30' ,
      duration : '30min'
    },
    {
      date : '25-08-2023' ,
      starttime : '19:45' ,
      duration : '20min'
    },
    {
      date : '01-09-2023' ,
      starttime : '23:15' ,
      duration : '50min'
    },
    {
      date : '05-09-2023' ,
      starttime : '00:45' ,
      duration : '10min'
    },
  ];
  public  AlertdataSource : {sensor : string , threshold : string}[] =[
    {
      sensor : 'temperature' ,
      threshold : '30°C'
    } ,
    {
      sensor : 'Soil moisture' ,
      threshold : '70%'
    }

  ];
 // public  SchedulerdataSource : {Name : string , location : string , ttnid : string}[] =[];
  public getComplaintsData(): any[] {
    const data = complaintsData.sort((a, b) => b.count - a.count);
    const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);
    let cumulativeCount = 0;
    return data.map((item, index) => {
      cumulativeCount += item.count;
      return {
        complaint: item.complaint,
        count: item.count,
        cumulativePercent:  item.count ,// Math.round(cumulativeCount * 100 / totalCount),
      };
    });
  }

  public getComplaintsData1(): any[] {
    const data = complaintsData1.sort((a, b) => b.count - a.count);
    const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);
    let cumulativeCount = 0;
    return data.map((item, index) => {
      cumulativeCount += item.count;
      return {
        complaint: item.complaint,
        count: item.count,
        cumulativePercent:  item.count ,// Math.round(cumulativeCount * 100 / totalCount),
      };
    });
  }

  customizeLabelText = (info: any) => `${info.valueText}%`;

  customizeLabelText1 = (info: any) => `${info.valueText}°C`;
}
