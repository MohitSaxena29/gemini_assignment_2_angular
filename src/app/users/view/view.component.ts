import { Component} from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent {

  // to get form group data

  data:any={
    name:'',
    email:'',
    mobile:'',
    gender:'',
    category:'',
  };

  datas:any []=[

  ]

  show:boolean=true;
  // to fetch data from service
  constructor(private service: ServiceService)
  {
    if(service.data!==undefined){
      this.show=false;
      this.data.name=service.data.name;
      this.data.email=service.data.email;
      this.data.mobile=service.data.mobile;
      this.data.mobile=service.data.mobile;
      this.data.gender=service.data.gender;
      this.data.category=service.data.category;
      this.data.prop='imagesurl';
      this.data.imagesurl=service.imagesurl;
      this.data.prop = "technology";
      this.data.technology = service.technology;
      if(this.service.count===1)
        this.service.datas.push(this.data);
      this.datas = this.service.datas;
      this.service.count=0;
    }
  }
}
