import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
  };

  text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis bibendum egestas. Curabitur elementum, urna imperdiet imperdiet blandit, urna nunc maximus tortor, vel lacinia metus risus lobortis tellus. Morbi dignissim lobortis nibh ut bibendum. Nulla laoreet justo a rutrum sodales. Fusce lacinia turpis a tortor ullamcorper, a auctor ligula eleifend. Aliquam interdum mauris ac dictum congue. Proin facilisis, felis non malesuada lacinia, elit mauris ultricies quam, at tristique orci ipsum nec lorem. Praesent faucibus ultricies arcu nec ornare. Phasellus ullamcorper tincidunt varius. Donec mattis neque in massa laoreet dignissim. Vivamus ut accumsan ipsum. Vestibulum ornare lacinia lectus. Phasellus sit amet libero tempor, sagittis nisi vitae, pretium lacus.
  `

  constructor() { }

  ngOnInit() {
  }

}
