import { Component } from '@angular/core';
import {  faBell, faCircleUser, faCommentDots,
          faEllipsisVertical, faGamepad, faHouse,
          faSearch, faStore, faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public icons = {
    search: faSearch,
    homePage: faHouse,
    live: faTv,
    market: faStore,
    groups: faCircleUser,
    games: faGamepad,
    messages: faCommentDots,
    notifications: faBell,
    menu: faEllipsisVertical
  }
}
