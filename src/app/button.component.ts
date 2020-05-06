import { Component } from "@angular/core";

@Component({
    selector: "app-click-me",
    template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`    
})
export class ClickMeComponent {
    clickMessage = '';
}
