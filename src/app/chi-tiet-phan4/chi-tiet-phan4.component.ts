import { Component, Input, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-chi-tiet-phan4',
  templateUrl: './chi-tiet-phan4.component.html',
  styleUrls: ['./chi-tiet-phan4.component.scss']
})
export class ChiTietPhan4Component implements OnInit {

  @Input() id = 0;

  tieuDe:string = "";
  email:string = "";
  noiDung:string="";

  array:{
    email: string,
    tieuDe: string,
    noiDung:string
  }[]=[]




  constructor() { }

  ngOnInit(): void {

    let objectArray = localStorage.getItem("dataBinhLuan" + this.id);

    this.array= JSON.parse(objectArray || "{}");

    if(this.array.length == undefined){

      let object = { email:'',
        tieuDe:  '',
        noiDung: ''}
      let a:{ email: string,
        tieuDe: string,
        noiDung:string}[] = [];
        a.push(object);
       localStorage.setItem("dataBinhLuan" + this.id,JSON.stringify(a));

       objectArray = localStorage.getItem("dataBinhLuan" + this.id);
       this.array= JSON.parse(objectArray || "{}");
    }
    // localStorage.setItem("dataBinhLuan" + this.id,JSON.stringify(this.array));


  }

  binhLuan(){

    let newObject = {
      email:this.email,
      tieuDe: this.tieuDe,
      noiDung:this.noiDung
    }

    console.log(newObject);

    if(this.array.length == 1){
      if(this.array[0].email == '' && this.array[0].noiDung == '' && this.array[0].tieuDe == ''){
        this.array.splice(0,1);
      }
    }
    this.array.push(newObject);

    console.log(this.array);
    localStorage.setItem("dataBinhLuan" + this.id, JSON.stringify(this.array));

  }

}
