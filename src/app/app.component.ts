import { Component,HostListener} from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show:boolean=false;
  count:number=0;
  onLoadHome(){
    this.show=true;
    this.count=1;
  }
  
  onLoadRoute(){
    this.show=false;
    this.count=1;
  }

  constructor(private Location:Location) {}
  @HostListener('window:load')
  onLoad() {
    let url=this.Location.path().toString();
    if(url==='')
    {
      this.show=true;
    }
  }

}
