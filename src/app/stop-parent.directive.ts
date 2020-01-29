import { Directive, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[stop-parent]'
})
export class StopParentDirective {

  constructor() { }
  // to stop the click to be propogated
  @HostListener('click', ['$event'])
  @HostListener('mousedown', ['$event'])
  public onClick(event: any) :void{
    event.stopPropagation();
  }
  public onMousedown(event: any) :void{
    event.stopPropagation();
  }


}
