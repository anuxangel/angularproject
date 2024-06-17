// exhibition.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.css']
})
export class ExhibitionComponent implements OnInit {
  exhibitions = [
    {
      title: 'A dynamic art showcase',
      description: 'A genre of art and the evolution of a static image.',
      image: "assets/e1.jpg"
    },
    {
      title: 'Art Unleashed',
      description: 'Embark on an exciting journey into the creative cosmos.',
      image: "assets/e2.jpg"
    },
    {
      title: 'Symphony of colors',
      description: 'Its a dance of hues to create a symphony of visual communication.',
      image: "assets/e3.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
