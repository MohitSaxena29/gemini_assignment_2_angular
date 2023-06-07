import { Component} from '@angular/core';

import {FormGroup,FormControl, FormControlName,Validators} from '@angular/forms'

import {ServiceService} from '../services/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {

  constructor(private service: ServiceService, private model: NgbModal){}
  url: any = "";
  imagePath: any='';
  show:boolean=false;
  showImage:boolean=false;
  technologychecked:string='';
  technology1:string='';
  technology2:string='';
  technology3:string='';
  technology4:string=''
  filename: any;
  imageExtension: string='';
  showError:boolean=false;
  showTechnology:boolean=false;

  loginForm= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z ]*$"),Validators.minLength(2),Validators.maxLength(30)]),
    email: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
    mobile: new FormControl('',[Validators.required,Validators.pattern(/^([5-9]\d{9})$/)]),
    gender: new FormControl('male',[Validators.required]),
    category: new FormControl('',[Validators.required]),
  })



  // to get image url
  onFileChanged(event: any) {
    const files:any= event.target.files;
    if(files.length>0)
    {
    const reader = new FileReader();

    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    const target: any = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        this.filename=target.files[0].name;
    }
    for(var i=this.filename.length;i>0;i--){
      if(this.filename.charAt(i)==='.')
      {
        break;
      }
      this.imageExtension+=this.filename.charAt(i)
    }
    let reverseString:string = "";

    for (let char of this.imageExtension) {
        reverseString = char + reverseString;
    } 

    // for image validation
    if(reverseString==='jpg' || reverseString==='jpeg' || reverseString==='png')
    {
      reader.onload = (_event) => {
        this.url = reader.result;
      }
      this.showImage=true;
      this.showError=false;
      this.imageExtension='';
    }
    else
    {
      this.showError=true;
      this.imageExtension='';
    }

  }
  else
  {
    this.url='';
    this.showImage=false;
    this.showError=false;
  }

  }
  technology1checked(event:any){
  
    if(event.target.checked==true){
      this.technology1=event.target.value+" ";    
    }
    else
    {
      this.technology1='';
    }


  }

  technology2checked(event:any){
  
    if(event.target.checked==true){
      this.technology2=event.target.value+" ";
    }
    else
    {
      this.technology2='';
    }
  }

  technology3checked(event:any){
  
    if(event.target.checked==true){
      this.technology3=event.target.value+" ";
    }
    else
    {
      this.technology3='';
      
    }

  }

  technology4checked(event:any){
  
    if(event.target.checked==true){
      this.technology4=event.target.value+" ";
    }
    else
    {
      this.technology4='';    
    }
  }

  get name(){
    return this.loginForm.get('name');
  }
  get email(){
    return this.loginForm.get('email');
  }
  get mobile(){
    return this.loginForm.get('mobile');
  }

  get gender(){
    
    return this.loginForm.get('gender');
  }

  categoryflag=false;
  changeCategory(){
    this.categoryflag=true;
  }

  get category(){
    return this.loginForm.get('category');
  }

  // to load data in modal in preview component
  open() {
    const modalRef=this.model.open(PreviewComponent)
    this.technologychecked='';
    this.technologychecked+=this.technology1+this.technology2+this.technology3+this.technology4;
    if(this.technologychecked==='')
      this.showTechnology=false;
    else  
      this.showTechnology=true;
    modalRef.componentInstance.data = this.loginForm.value;
    modalRef.componentInstance.imagesurl = this.url;
    modalRef.componentInstance.technologychecked = this.technologychecked;
    modalRef.componentInstance.showImage = this.showImage;
    modalRef.componentInstance.showTechnology = this.showTechnology;
  }
}



