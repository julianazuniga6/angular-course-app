import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    
    @Output() recipesSelected = new EventEmitter();
    @Output() shoppingSelected = new EventEmitter();
    
    collapsed = true;

    recipesClick() {
        this.recipesSelected.emit();
    }

    shoppingClick() {
        this.shoppingSelected.emit();
    }
}