import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  // constructor(private dialog: MdlDialogReference) {
  //       // register a listener if you want to be informed if the dialog is closed.
  //       this.dialog.onHide().subscribe( (user) => {
  //         console.log('login dialog hidden');
  //         if (user) {
  //           console.log('authenticated user', user);
  //         }
  //       });
  //     }

  // public login() {
  //   console.log('login', this.dialog);
  //   this.dialog.hide();
  // }

  // @HostListener('keydown.esc')
  // public onEsc(): void {
  //     this.dialog.hide();
  // }

  constructor() { }

  ngOnInit() {
  }
}
