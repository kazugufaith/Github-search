// import { Component, OnInit } from '@angular/core';
// import { SService } from '../s.service';
// @Component({
//   selector: 'app-menu',
//   templateUrl: './repos.component.html',
//   styleUrls: ['./repos.component.scss']
// })
// export class ReposComponent implements OnInit {

//   profile: any = [];
//   repos: any = [];
//   username: string;
//   constructor(private detailspageServe: SService) { }
//   ngOnInit() {
//   }
//   findprofile() {
//     this.detailspageServe.updateprofile(this.username);
//     this.detailspageServe.getprofileInfo(this.username).subscribe(profile => {
//       console.log(profile);
//       this.profile = profile;
//     });
//     this.detailspageServe.getprofileRepos().subscribe(repos => {
//       console.log(repos);
//       this.repos = repos;
//     });
//   }
// }
