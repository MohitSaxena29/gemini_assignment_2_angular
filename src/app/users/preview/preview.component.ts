import { Component, Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})


export class PreviewComponent{
  @Input() data: any;
  @Input() imagesurl: any;
  @Input() technologychecked: string | undefined;
  @Input() showImage: boolean | undefined;
  @Input() showTechnology: boolean | undefined;
  constructor(public activeModal: NgbActiveModal,private service: ServiceService,private router: Router) {}
  count:number=0;
  showModal: boolean=true;

  // to save data in service on save button click

  saveData(){  
    this.activeModal.close();
    this.service.data=this.data;
    console.log(this.service.data);
    this.service.imagesurl=this.imagesurl;
    this.service.technology=this.technologychecked;
    this.count=1;
    this.service.count=this.count; 
    this.showModal=false;
    this.router.navigate(['./users/view']);
  }

  // to close modal on cancel button 
  
  cancelData(){
    this.activeModal.close();
  }
}
