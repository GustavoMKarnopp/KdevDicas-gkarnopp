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
          resolve(true);
        };
        img.onerror = () => {
          reject(false);
        };
        img.src = imageUrl;
        if (img.complete) {
          resolve(true);
        }
      });
    }else{
      return Promise.reject(new Error('Cannot check image load on the server'));
    }
  }
  checkVideoLoad(videoUrl: string): Promise<boolean> {
    if (isPlatformBrowser(this.platformId)) {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.onloadeddata = () => {
          resolve(true);
        };
        video.onerror = () => {
          reject(false);
        };
        video.src = videoUrl;
      });
    } else {
      return Promise.reject(new Error('Cannot check video load on the server'));
    }
  }
}
