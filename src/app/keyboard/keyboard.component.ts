import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum SpecialChar {
  Backspace = 'backspace',
}

interface Key {
  label: string;
  value: string;
}

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() onkeypress = new EventEmitter<string>();
  @Output() onbackspace = new EventEmitter<void>();

  constructor() { }

  public ngOnInit(): void {
  }

  public getRows(): Key[][] {
    const keys = this.getKeys();
    const res: Key[][] = [];
    let breakerIndex: number = keys.findIndex(x => !x.label && !x.value);


    while ((breakerIndex = keys.findIndex(x => !x.label && !x.value)) >= 0) {
      keys.splice(breakerIndex, 1);
      res.push(keys.splice(0, breakerIndex));
    }
    res.push(keys.splice(0, keys.length));
    return res;
  }

  public pushed(key:Key):void {
    if (key.value === SpecialChar.Backspace) {
      this.onbackspace.emit();
      return;
    }
    this.onkeypress.emit(key.value);
  }

  private getKeys(): Key[] {
    return [{
      label: 'q',
      value: 'q'
    }, {
      label: 'w',
      value: 'w'
    }, {
      label: 'e',
      value: 'e'
    }, {
      label: 'backspace',
      value: SpecialChar.Backspace,
    }, {
      label: '', // Empty key used to break the line and insert a new row
      value: '',
    }, {
      label: 'a',
      value: 'a'
    }, {
      label: 's',
      value: 's'
    }, {
      label: 'd',
      value: 'd'
    }];
  }

}
