import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome to Burguers Café & Bar App!'

  constructor() { }

  ngOnInit() {
  }

}
