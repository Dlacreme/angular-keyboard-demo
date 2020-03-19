import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  public onKeyPress(key: string): void {
    this.title += key;
  }

  public removeLast(): void {
    this.title = this.title.substring(0, this.title.length - 1);
  }

}
