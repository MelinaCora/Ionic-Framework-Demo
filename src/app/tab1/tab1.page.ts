import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';

import {
  logoIonic,
  rocketOutline,
  layersOutline,
  phonePortraitOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private router: Router) {

    addIcons({
      logoIonic,
      rocketOutline,
      layersOutline,
      phonePortraitOutline
    });

  }

  explorarComponentes() {

    this.router.navigate(['/tabs/tab2']);

  }

}
