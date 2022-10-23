import { Component } from '@angular/core';
     
class Item{
    name: string;
    text: string;
     
    constructor(name: string, text: string) {
  
        this.name = name;
        this.text = text;
    }
}
 
@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> Post </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="name" placeholder = "name" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input class="form-control" [(ngModel)]="text" placeholder="text" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(name, text)">add</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.text}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent {
    name: string = "";
    text: string = "";
     
    items: Item[] = 
    [];
    addItem(name: string, text: string): void {
         
        if (text == null || text.trim() == "" || name == null)
            return;
        this.items.push(new Item(name, text));
    }
}