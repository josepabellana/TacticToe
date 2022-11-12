import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot-svg',
  templateUrl: './robot-svg.component.html',
  styleUrls: ['./robot-svg.component.css']
})
export class RobotSvgComponent implements OnInit {

  @Input() fillColor = 'blue'

  constructor() { }

  ngOnInit(): void {
  }

}
