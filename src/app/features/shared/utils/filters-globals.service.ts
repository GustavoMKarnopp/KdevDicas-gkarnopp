import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersGlobalsService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  checkImageLoad(imageUrl: string): Promise<boolean> {
    if (isPlatformBrowser(this.platformId)) {

      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log('Image loaded!');
          resolve(true);
        };
        img.onerror = () => {
          console.log('Failed to load image');
          reject(false);
        };
        img.src = imageUrl;
        if (img.complete) {
          console.log('Image already loaded!');
          resolve(true);
        }
      });
    }else{
      return Promise.reject(new Error('Cannot check image load on the server'));
    }
  }
}
