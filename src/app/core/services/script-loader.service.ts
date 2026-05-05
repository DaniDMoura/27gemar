import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

/**
 * Service responsible for loading external scripts like Google Maps.
 * Centralizes DOM manipulation for script injection and improves SRP.
 */
@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  private readonly platformId = inject(PLATFORM_ID);

  /**
   * Loads the Google Maps JavaScript API script if not already present.
   */
  loadGoogleMaps(): void {
    if (!isPlatformBrowser(this.platformId) || !environment.googleMapsApiKey) {
      return;
    }

    // Check if the script is already loaded to avoid duplication
    if (document.getElementById('google-maps-script') || 
        document.querySelector('script[src*="maps.googleapis.com"]')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    // Using loading=async and a dummy callback as per modern best practices
    script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&loading=async&callback=Function.prototype`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}
