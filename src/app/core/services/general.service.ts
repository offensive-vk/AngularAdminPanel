import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  /**
   * loading progressbar
   */
  private loader = new BehaviorSubject<boolean>(false);

  /**
   * stored status of the sidebar in localstorage
   * to be used only for initialization of the sidebar
   */
   private storedToggleValue: string = localStorage.getItem('sidebar') || 'open';

  /**
   * observing the screen size to be used throughout the site
   */
   private largeScreen = new BehaviorSubject<boolean>(undefined!);
   private isLargeScreen!: boolean;

   /**
   * observing the screen size to specify if it's mobile
   */
   private modileScreen = new BehaviorSubject<boolean>(undefined!);
   public isModileScreen = this.modileScreen.asObservable();

  constructor(private _snackBar: MatSnackBar) { }

  /**
   * shows feedback message in a snackbar
   * @param message message for showing feedback in the snackbar
   * @param actionButton optional; if action needed, then specify the name of the action --- snackbar will be closed by clicking on the action button
   * @param duration optional; if available, the default value of 2000 ms will be overwritten
   */
  showFeedback(message: string, actionButton?: string, duration?: number) {
    this._snackBar.open(message, actionButton, {
      duration: duration || 2000, // if exists use it, otherwise use default
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['top-aligned-snackbar']
    });
  }
  /**
   * hiding feedback manually, if needed
   */
  hideFeedback() {
    this._snackBar.dismiss();
  }

  /**
   *
   * @returns boolean value indicating the loader is to be displayed or hidden
   */
  getLoader(): Observable<boolean> {
    return this.loader.asObservable();
  }
  /**
   *
   * @param loader boolean
   * set to true if the loader is to be displayed and false is to be hidden
   */
  setLoader(loader: boolean) {
    this.loader.next(loader);
  }

  /**
   *
   * @returns boolean value indicating the site is rendered on a small or large screen size device.
   * True indicates the device has a large screen size.
   */
   getScreenSize(): Observable<boolean> {
    return this.largeScreen.asObservable();
  }
  /**
   *
   * @param status boolean
   * set to true if the device in use is a large screen device
   */
  setScreenSize(status: boolean) {
    this.largeScreen.next(status);
    this.isLargeScreen = status;
    // status === true ? this.setSidebarValue(this.storedToggleValue === 'open') : () => { return };
  }
  /**
   *
   * @param status boolean
   * set to true if the device in use is a smartphone device with less than 576px width.
   */
  setMobileSize(status: boolean) {
    this.modileScreen.next(status);
  }
}
