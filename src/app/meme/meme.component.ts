import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() title : string; //indicador (decorador) le indica coasa a angular
  @Input() image: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
