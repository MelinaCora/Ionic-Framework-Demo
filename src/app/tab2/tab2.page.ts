import { Component } from '@angular/core';

import { addIcons } from 'ionicons';

import {
  logoIonic,
  gridOutline,
  layersOutline,
  codeSlashOutline,
  phonePortraitOutline,
  notificationsOutline,
  colorPaletteOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor() {

    addIcons({

      logoIonic,

      gridOutline,

      layersOutline,

      codeSlashOutline,

      phonePortraitOutline,

      notificationsOutline,

      colorPaletteOutline

    });

  }

}