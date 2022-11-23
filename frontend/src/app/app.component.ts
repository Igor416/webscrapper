import { Component } from '@angular/core';
import APIEndPointsService from './services/apiend-points.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'webscrapper';

  constructor(private auth: APIEndPointsService) {

  }

  ngOnInit() {
    let url = `/scrapper/`
    this.auth.setUrl(url).subscribe((data:any) => console.log(data));
  }
}
