import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css']
})
export class ListaUserComponent implements OnInit {

  userlist:any = [];

  constructor(private userService: MainService) { }

  ngOnInit(): void {
    this.userService.getUserAll().subscribe(resp => this.userlist = resp)

  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(resp => console.log(resp))
  }
}
