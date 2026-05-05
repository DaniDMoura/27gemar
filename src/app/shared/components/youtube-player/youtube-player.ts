import { Component, Input, OnInit, OnChanges, SimpleChanges, inject, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [],
  templateUrl: './youtube-player.html',
  styleUrl: './youtube-player.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubePlayer implements OnInit, OnChanges {
  private sanitizer = inject(DomSanitizer);

  @Input({ required: true }) videoUrl: string = '';
  @Input() title: string = 'YouTube Video';

  safeUrl: SafeResourceUrl | null = null;
  isValid: boolean = false;

  ngOnInit(): void {
    this.updateVideo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoUrl'] && !changes['videoUrl'].firstChange) {
      this.updateVideo();
    }
  }

  private updateVideo(): void {
    const videoId = this.extractVideoId(this.videoUrl);
    
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.isValid = true;
    } else {
      this.safeUrl = null;
      this.isValid = false;
    }
  }

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
