import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username:string;
  constructor(private storageService:StorageService) { }

  ngOnInit() {
    this.username=this.storageService.getUser();
  }

}
