import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.color') myColor : string = "";
  @HostBinding('style.font-size') mySize : string = "20px";

  constructor() { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow') ;
  }
  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
        this.myColor='red';
        this.mySize = "200px";

  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myColor='blue';
    this.mySize = "20px";

}
}
