import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  heading: string = 'Главная';

  // Не понятно куда его
  // public showDialog($event: MouseEvent) {
  //   let pDialog = this.dialogService.showCustomDialog({
  //     component: LoginDialogComponent,
  //     providers: [{provide: TEST_VALUE, useValue: 'Just an example'}],
  //     isModal: true,
  //     styles: {'width': '350px'},
  //     clickOutsideToClose: true,
  //     enterTransitionDuration: 400,
  //     leaveTransitionDuration: 400
  //   });
  //   pDialog.subscribe( (dialogReference: MdlDialogReference) => {
  //     console.log('dialog visible', dialogReference);
  //   });
  // }

  constructor() { }

  ngOnInit() {
  }

}
