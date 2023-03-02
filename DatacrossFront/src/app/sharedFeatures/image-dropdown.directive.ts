import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageDropdown]'
})
export class ImageDropdownDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClick() {
    const dropdown = this.elementRef.nativeElement.nextElementSibling;
    dropdown.classList.toggle('show');
}

}