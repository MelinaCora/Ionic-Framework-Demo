import { Component } from '@angular/core';

import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';

import {
  Camera,
  CameraResultType,
  CameraSource
} from '@capacitor/camera';

import { addIcons } from 'ionicons';

import {
  hardwareChipOutline,
  phonePortraitOutline,
  locationOutline,
  cameraOutline,
  checkmarkCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  informacion = '';

  foto = '';

  constructor() {

    addIcons({

      hardwareChipOutline,

      phonePortraitOutline,

      locationOutline,

      cameraOutline,

      checkmarkCircleOutline

    });

  }

  //====================================================
  // GPS
  //====================================================

  async obtenerUbicacion() {

    try {

      const posicion =
        await Geolocation.getCurrentPosition();

      this.informacion =

`📍 Ubicación actual

Latitud: ${posicion.coords.latitude}

Longitud: ${posicion.coords.longitude}

Precisión: ${posicion.coords.accuracy} metros`;

    }

    catch {

      this.informacion =
        'No fue posible obtener la ubicación.';

    }

  }

  //====================================================
  // DEVICE
  //====================================================

  async obtenerDispositivo() {

    const info =
      await Device.getInfo();

    this.informacion =

`📱 Información del dispositivo

Modelo: ${info.model}

Sistema Operativo: ${info.operatingSystem}

Versión: ${info.osVersion}

Plataforma: ${info.platform}`;

  }

  //====================================================
  // CAMARA
  //====================================================

  async abrirCamara() {

    try {

      const imagen =
        await Camera.getPhoto({

          quality:90,

          allowEditing:false,

          resultType:CameraResultType.DataUrl,

          source:CameraSource.Camera

        });

      this.foto = imagen.dataUrl ?? '';

      this.informacion =
        '✔ Fotografía capturada correctamente.';

    }

    catch{

      this.informacion =
        'La captura fue cancelada.';

    }

  }

}