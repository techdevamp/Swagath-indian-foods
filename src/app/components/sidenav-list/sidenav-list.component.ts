import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  navigate(path: any, id: any) {
    this.router.navigate([{outlets: {sidemenu: [path, id]}}],
                            {relativeTo: this.route});
  }
  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
