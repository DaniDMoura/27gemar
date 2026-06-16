import { Component, inject, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [],
  templateUrl: './youtube-player.html',
  styleUrl: './youtube-player.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubePlayer {
  private sanitizer = inject(DomSanitizer);

  videoUrl = input.required<string>();
  title = input<string>('YouTube Video');

  safeUrl = computed<SafeResourceUrl | null>(() => {
    const videoId = this.extractVideoId(this.videoUrl());
    if (videoId) {
      const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
    return null;
  });

  isValid = computed<boolean>(() => this.safeUrl() !== null);

  /**
   * Robustly extracts YouTube Video ID from various URL formats.
   * Supports:
   * - https://www.youtube.com/watch?v=VIDEO_ID
   * - https://youtu.be/VIDEO_ID
   * - https://www.youtube.com/embed/VIDEO_ID
   */
  private extractVideoId(url: string): string | null {
    if (!url) return null;

    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    return match ? match[1] : null;
  }
}
