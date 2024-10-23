import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarService } from '../../services/sidebar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() largeScreen!: boolean;

  /**
   * a variable to define the sidebar status
   * using a not null assertion for initialization before setting value received from the service
   */
  public sideExpanded!: boolean;

  /**
   * reading page's title from the component's routing module
   */
  public title: string = '';

  public extraTitles: any = [];

  /**
   * only for smaller screen sizes,
   * according to the size specified inside the Core Component
   */
  public searchIscollapsed: boolean = true;

  /**
   * for toggling search dropdown
   */
  public showSeachDropdown: boolean = false;

  public userName: string = '';

  /**
   * Counting new notifications, if any.
   */
  public newNotificationsCount: number = 0;

  /**
   * List of all notifications.
   */
  public notificationList: Notification[] = [];

  /**
   *
   * @param sidebarService To handle toggle status
   * @param router To be used for navigation
   * @param activatedRoute To receive extra information from each route, if existing
   * @param authService For managing access and refresh tokens
   */
  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.getPageTitle();
  }

  ngOnInit(): void {
    this.getSidebarStatus();
  }



  /**
   * getting the status of sidebar
   */
  private getSidebarStatus() {
    this.sideExpanded = this.sidebarService.expanded;
  }

  /**
   * Toggles the sidebar.
   */
  toggleSidebar() {
    this.sidebarService.toggle();
    this.getSidebarStatus();
  }

  /**
   * to manage extra information, if exisitng inside each route's router file
   */
  private getPageTitle() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.getChild(this.activatedRoute);

        currentRoute.data.subscribe((data: any) => {
          this.extraTitles = [];
          this.title = data.title;
          if (data.extra) {
            this.extraTitles = data.extra;
          }
        });
      });
  }
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }



  /**
   * can be called only when the screen size is smaller than the value set inside the Core Component,
   * which will collpase/expand the search input
   */
  public toggleSearchBox() {
    this.searchIscollapsed = !this.searchIscollapsed;
  }

}
