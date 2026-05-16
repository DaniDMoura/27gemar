import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly titleService = inject(Title);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  
  private readonly defaultTitle = '27º Grupo Escoteiro do Mar Cornelis Verolme';
  private readonly defaultDescription = 'Desde 1981, dedicados ao desenvolvimento de crianças e jovens por meio do Método Escoteiro em Angra dos Reis.';
  private readonly defaultImage = 'https://www.27gemar.org.br/assets/illustrations/graph.webp'; // Update domain when live

  updateSeoConfig(config: SeoConfig): void {
    const title = config.title ? `${config.title} | ${this.defaultTitle}` : this.defaultTitle;
    const description = config.description || this.defaultDescription;
    const image = config.image || this.defaultImage;
    const url = config.url || (isPlatformBrowser(this.platformId) ? window.location.href : '');
    const type = config.type || 'website';

    this.titleService.setTitle(title);

    // Standard Meta Tags
    this.meta.updateTag({ name: 'description', content: description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Open Graph / Facebook
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:url', content: url });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.updateCanonicalUrl(url);
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  addStructuredData(): void {
    if (this.document.getElementById('structured-data')) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "27º Grupo Escoteiro do Mar Cornelis Verolme",
      "url": "https://www.27gemar.org.br",
      "logo": "https://www.27gemar.org.br/assets/logos/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Almirante Custodio de Melo, s/n",
        "addressLocality": "Jacuecanga, Angra dos Reis",
        "addressRegion": "RJ",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-24-97401-0894",
        "contactType": "customer service"
      }
    };

    const script = this.document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
