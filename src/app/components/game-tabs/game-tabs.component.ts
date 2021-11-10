import { Game } from './../../models';
import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent implements OnInit {
  @Input() game!: Game;

  constructor() {}

  ngOnInit(): void {}
}
