import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appdropdown]'
})
export class DropdownDirective {
    
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        console.log('in appDropdown directive');
        this.isOpen = !this.isOpen;

    }    
}