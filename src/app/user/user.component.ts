import { Component, OnInit } from '@angular/core';
import { SService} from '../s.service';
@Component({
  selector: 'app-login',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  profile: any = [];
  repos: any = [];
  username: string;
  constructor(private detailspageServe: SService) { }
  ngOnInit() {
  }
  findprofile() {
   this.detailspageServe.updateprofile(this.username);
   this.detailspageServe.getprofileInfo(this.username).subscribe(profile => {
     console.log(profile);
     this.profile = profile;
  });
   this.detailspageServe.getprofileRepos().subscribe(repos => {
     console.log(repos);
     this.repos = repos;
   });
  }
  }
