import { Component } from '@angular/core';
import { Client } from '../../_modules/client';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  clients:Client[] = [
    new Client(1,"omnia","admin"),
    new Client(2,"nada","client"),
    new Client(3,"abdo","service-provider"),
    new Client(4,"omnia","admin"),
    new Client(5,"omnia","admin"),
  ];

  client:Client = new Client(0,"null","null");
  status:boolean = false;
  show(id:number){
    for(let i = 0; i < this.clients.length ; i++){
      if(id == this.clients[i].id){
         this.client = this.clients[i];
      }
    }
    this.status=true;
  }
}
