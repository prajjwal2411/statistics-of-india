import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project-india';

  options: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 5,
  }


  ngOnInit(): void {}

}
