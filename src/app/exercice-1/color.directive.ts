import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit{

  //@HostListener('window:click', ['$event']) windowClick($event){
  //   console.log($event);
  //}

  @HostListener('window:keydown', ['$event']) private pressKeyboard (event : KeyboardEvent){
    console.log(event.key);
    switch (event.key) {
      case 'ArrowUp':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'ArrowDown':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'ArrowRight':
        this.el.nativeElement.style.color = 'orange';
        break;
      case 'ArrowLeft':
        this.el.nativeElement.style.color = 'purple';
        break;
      default : console.error('no color for this key');
    }
  }

  constructor(private el: ElementRef<HTMLLIElement>) { }

  ngOnInit(){}

}
