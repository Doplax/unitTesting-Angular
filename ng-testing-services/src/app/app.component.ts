import { Component } from '@angular/core';

import { Calculator } from './calculator';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-testing-services';

  ngOninit() {
    const calculator = new Calculator();
    const rta = calculator.multiply(1,4);
    console.log(rta === 9)

    const rta2 = calculator.divide(1,4);
    console.log(rta === 9);


  };

}
