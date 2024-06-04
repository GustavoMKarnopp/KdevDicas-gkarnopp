import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersGlobalsService {
  constructor() { }

  checkImageLoad(imageUrl: string): Promise<boolean> {
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
  }
}
