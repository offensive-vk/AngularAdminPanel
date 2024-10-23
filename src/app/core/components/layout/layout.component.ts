import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  /** to be set by the value coming from the general service */
  public loading: boolean = false;

  /**
   * a variable to define the sidebar status
   * using a not null assertion for initialization before setting value received from the service
   */
   public sideExpanded!: boolean;

  /**
   * Helper to determine how to show the navbar. If we're on a small screen, we show
   * it as an expandable only visible as hamburger button is clicked. Otherwise we
   * show it as a constant visible menu with the option of making it smaller by clicking
   * a button.
   */
  public largeScreen!: boolean;

  private largeScreenStatus!: boolean;
  // Needed to be able to figure out if we're on a small screen or not.
  @HostListener('window:resize', ['$event'])
  private onWindowResize() {
    const getScreenWidth = window.innerWidth;
    this.largeScreenStatus = getScreenWidth >= 1058 ? true : false;
    this.generalService.setScreenSize(this.largeScreenStatus);

    const isMobile = getScreenWidth > 576 ? false : true;
    this.generalService.setMobileSize(isMobile);
  }

  /**
   *
   * @param generalService for screen size
   * @param sidebarService for the sidebar status
   */
  constructor(
    private generalService: GeneralService,
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.onWindowResize();
    this.generalService.getLoader().subscribe(res => {
      this.loading = res;
      this.cdr.detectChanges();
    });
    this.getScreenSizeValue();
    this.getSidebarStatus();
  }

  /**
   * listen to changes of screen size
   */
  private getScreenSizeValue() {
    this.generalService.getScreenSize().subscribe((status: boolean) => {
      this.largeScreen = status;
      this.getSidebarStatus();
      this.cdr.detectChanges();
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

  /**
   * Closes the sidebar.
   */
   closeSidebar() {
    this.sidebarService.expanded = false;
  }

}
