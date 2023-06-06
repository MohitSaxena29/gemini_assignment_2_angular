import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data:any;
  imagesurl:any;
  technology:string | undefined;
  count:number | undefined;
  datas: any[]=[]
  show:boolean | undefined;
  constructor() {}
}
