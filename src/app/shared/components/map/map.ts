import { Component, Input, OnInit, PLATFORM_ID, inject, signal, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MAP_CONSTANTS } from './map.constants';

/**
 * Reusable Google Maps Component.
 * Encapsulates API loading, custom UI (Maps button), and responsive layout.
 */
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.html',
  styleUrl: './map.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);
  
  @Input() height: string = '200px';
  @Input() width: string = '100%';
  @Input() latitude: number = MAP_CONSTANTS.DEFAULT_CENTER.lat;
  @Input() longitude: number = MAP_CONSTANTS.DEFAULT_CENTER.lng;
  @Input() zoom: number = MAP_CONSTANTS.DEFAULT_ZOOM;

  readonly apiLoaded = signal(false);

  /**
   * Map options optimized for a clean, professional look.
   * Interaction is disabled (static view) to improve performance and prevent scroll hijacking.
   */
  readonly mapOptions: google.maps.MapOptions = {
    mapId: MAP_CONSTANTS.MAP_ID, 
    disableDefaultUI: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    gestureHandling: 'none',
    draggable: false,
    scrollwheel: false
  };

  /**
   * Computes the center object for the google-map component.
   */
  get center(): google.maps.LatLngLiteral {
    return { lat: this.latitude, lng: this.longitude };
  }

  /**
   * Generates a direct Google Maps link for the external 'Maps' button.
   */
  get googleMapsUrl(): string {
    return `https://www.google.com/maps/search/?api=1&query=${this.latitude},${this.longitude}`;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initApiLoader();
    }
  }

  /**
   * Periodically checks if the Google Maps API is loaded and ready.
   * This prevents 'Namespace google not found' errors during race conditions.
   * Runs outside NgZone to avoid triggering global Change Detection every 100ms.
   */
  private initApiLoader(): void {
    this.ngZone.runOutsideAngular(() => {
      const checkInterval = setInterval(() => {
        if (this.isApiReady()) {
          // Re-enter Angular zone to update the signal and UI
          this.ngZone.run(() => {
            this.apiLoaded.set(true);
          });
          clearInterval(checkInterval);
        }
      }, 100);

      // Safety timeout to prevent infinite polling if API fails to load
      setTimeout(() => clearInterval(checkInterval), 10000);
    });
  }

  private isApiReady(): boolean {
    return typeof google !== 'undefined' && typeof google.maps !== 'undefined';
  }
}
