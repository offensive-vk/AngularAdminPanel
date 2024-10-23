import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  /**
   * a variable to define the sidebar status
   * using a not null assertion for initialization before setting value received from the service
   */
  public sideExpanded!: boolean;

  public largeScreen!: boolean;


  /**
   * sidebar links
   */
  public sidebarLinks: any = [];

  /**
   *
   * @param generalService To watch for screen size changes
   * @param sidebarService To listen to changes on sidebar status
   * @param cdr To manage changes when occur
   */

  constructor(
    private generalService: GeneralService,
    public sidebarService: SidebarService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getScreenSizeValue();
    this.getSidebarStatus();
    this.getSidebarLinks();
  }

  /**
   * listen to changes of screen size
   */
  private getScreenSizeValue() {
    this.generalService.getScreenSize().subscribe((status: boolean) => {
      this.largeScreen = status;
      this.getSidebarStatus();
    })
  }

  /**
   * getting the status of sidebar
   */
  private getSidebarStatus() {
    this.sidebarService.expandedChanged.subscribe(() => {
      this.sideExpanded = this.sidebarService.expanded;
      this.cdr.detectChanges();
    })
  }

  /**
   * changing status of the sidebar
   * updating the sidebar value inside localstorage
   */
  public toggleSidebar() {
    this.sidebarService.toggle();
  }

  public closeSidebar() {
    !this.largeScreen ?
      this.sidebarService.expanded = false : '';
  }

  public hoverFn(action?: string) {
    if (action && action === 'enter') {
      this.sideExpanded = true;
    } else {
      this.sideExpanded = this.sidebarService.expanded;
    }
  }

  private getSidebarLinks() {
    this.sidebarLinks = sidebarLinks;
  }
}

/**
 * list of links displayed inside the sidebar
 */
const sidebarLinks: any = [
  {
    name: 'Dashboard',
    url: '/',
    icon: 'grid_view',
    expandable: false
  },
  {
    name: 'User',
    url: '/user-list',
    icon: 'supervisor_account',
    expandable: false,

  },

];
