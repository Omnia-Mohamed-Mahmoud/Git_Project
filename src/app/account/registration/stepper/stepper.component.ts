import { Component, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
  providers:[{provide:CdkStepper , useExisting: StepperComponent}],
})
export class StepperComponent extends CdkStepper{
  @Input() linearModel = true;

  onClick(index:number){
    this.selectedIndex = index ;
  }
}
