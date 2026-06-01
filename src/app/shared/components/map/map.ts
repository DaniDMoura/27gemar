import { Component, OnInit, PLATFORM_ID, inject, signal, NgZone, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MAP_CONSTANTS } from './map.constants';
import { ScriptLoaderService } from '../../../core/services/script-loader.service';

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
  private readonly scriptLoader = inject(ScriptLoaderService);

  readonly height = input<string>('200px');
  readonly width = input<string>('100%');
  readonly latitude = input<number>(MAP_CONSTANTS.DEFAULT_CENTER.lat);
  readonly longitude = input<number>(MAP_CONSTANTS.DEFAULT_CENTER.lng);
  readonly zoom = input<number>(MAP_CONSTANTS.DEFAULT_ZOOM);
  readonly flush = input<boolean>(false);

  readonly apiLoaded = signal(false);
  readonly center = computed(() => ({ lat: this.latitude(), lng: this.longitude() }));

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
   * Generates a direct Google Maps link for the external 'Maps' button.
   */
  get googleMapsUrl(): string {
    return `https://www.google.com/maps/place/Grupo+Escoteiro+27+GEMAR/@${this.latitude()},${this.longitude()},17z/data=!4m6!3m5!1s0x9c45b40308191f:0x46e41ed0ce9a2d98!8m2!3d${this.latitude()}!4d${this.longitude()}!16s%2Fg%2F11kp_bghkd`;
  }

  ngOnInit(): void {
    this.scriptLoader.loadGoogleMaps();
    if (isPlatformBrowser(this.platformId)) {
      this.initApiLoader();
    }
  }

  /**
   * Periodically checks if the Google Maps API is loaded and ready.
   * Runs outside NgZone to avoid triggering global Change Detection every 500ms.
   */
  private initApiLoader(): void {
    this.ngZone.runOutsideAngular(() => {
      const checkInterval = setInterval(() => {
        if (this.isApiReady()) {
          this.ngZone.run(() => {
            this.apiLoaded.set(true);
          });
          clearInterval(checkInterval);
        }
      }, 500);

      // Safety timeout to prevent infinite polling if API fails to load
      setTimeout(() => clearInterval(checkInterval), 10000);
    });
  }

  private isApiReady(): boolean {
    return typeof google !== 'undefined' && typeof google.maps !== 'undefined';
  }
}
