import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div class="mdc-textfield mdc-textfield--upgraded">
      <input type="text" id="search" class="mdc-textfield__input" (keyup)="colorChange($event)" >
      <label for="search" class="mdc-textfield__label mdc-textfield__label--float-above">Search</label>
    </div>
    
    <div class="mdc-grid-list">
      <ul class="mdc-grid-list__tiles">
        <li class="mdc-grid-tile">
          <div class="mdc-grid-tile__primary">
            <fa-500px [color]="style.color" [width]="width"></fa-500px>
            <p>500px</p>
          </div>
        </li>
        <li class="mdc-grid-tile">
          <div class="mdc-grid-tile__primary">
            <fa-500px [color]="style.color" [width]="width"></fa-500px>
            <p>500px</p>
          </div>
        </li>
        <li class="mdc-grid-tile">
          <div class="mdc-grid-tile__primary">
            <fa-500px [color]="style.color" [width]="width"></fa-500px>
            <p>500px</p>
          </div>
        </li>
        <li class="mdc-grid-tile">
          <div class="mdc-grid-tile__primary">
            <fa-500px [color]="style.color" [width]="width"></fa-500px>
            <p>500px</p>
          </div>
        </li>
        <li class="mdc-grid-tile">
          <div class="mdc-grid-tile__primary">
            <fa-500px [color]="style.color" [width]="width"></fa-500px>
            <p>500px</p>
          </div>
        </li>
        <li class="mdc-grid-tile">
          <div class="mdc-grid-tile__primary">
            <fa-500px [color]="style.color" [width]="width"></fa-500px>
            <p>500px</p>
          </div>
        </li>
        <li class="mdc-grid-tile">
          <div class="mdc-grid-tile__primary">
            <custom [color]="style.color" [width]="width"></custom>
            <p>500px</p>
          </div>
        </li>
        <li class="mdc-grid-tile">
          <div class="mdc-grid-tile__primary">
            <color [color]="style.color" [width]="width"></color>
            <p>500px</p>
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      
    `
  ]
})
export class AppComponent {
  public style = {
    color: '#757575',
  };
  public size = 40;
  public width = `${this.size}px`;

  colorChange($event: any) {
    this.style.color = $event.target.value;
  }
}
