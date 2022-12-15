import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
      Testing :) 
    </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
