import { Component, OnInit, OnDestroy } from '@angular/core';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  faFolderPlus = faFolderPlus;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
