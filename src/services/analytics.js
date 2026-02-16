// Analytics service that respects cookie consent preferences
import { useEffect, useRef } from 'react';

// Mock Google Analytics implementation
class AnalyticsService {
  constructor() {
    this.initialized = false;
    this.enabled = false;
    this.queue = [];
  }

  init() {
    // Check for cookie consent before initializing analytics
    const consent = localStorage.getItem('cookieConsent');
    const preferences = localStorage.getItem('cookiePreferences');

    if (consent && preferences) {
      try {
        const consentData = JSON.parse(consent);
        const prefs = JSON.parse(preferences);

        if (consentData.status !== 'rejected' && prefs.analytics) {
          this.enabled = true;
          this.processQueue();
        }
      } catch (e) {
        console.warn('Error checking cookie consent for analytics:', e);
      }
    }
  }

  // Initialize analytics when consent is given
  enableWithConsent() {
    this.enabled = true;
    this.processQueue();
  }

  // Disable analytics
  disable() {
    this.enabled = false;
  }

  // Queue events if analytics not yet initialized
  queueEvent(event, params) {
    if (this.enabled) {
      this.sendEvent(event, params);
    } else {
      this.queue.push({ event, params });
    }
  }

  // Process queued events
  processQueue() {
    while (this.queue.length > 0) {
      const { event, params } = this.queue.shift();
      this.sendEvent(event, params);
    }
  }

  // Send event to analytics (mock implementation)
  sendEvent(event, params) {
    if (!this.enabled) return;

    // In a real implementation, this would send to Google Analytics
    console.log('[Analytics Event]', { event, params });
    
    // Mock implementation - in real app would call gtag or analytics.js
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, params);
    }
  }

  // Track page views
  trackPageView(path, title) {
    this.queueEvent('page_view', {
      page_path: path,
      page_title: title
    });
  }

  // Track custom events
  trackEvent(eventName, params) {
    this.queueEvent(eventName, params);
  }

  // Track form submissions
  trackFormSubmit(formName) {
    this.trackEvent('form_submit', {
      form_name: formName
    });
  }

  // Track downloads
  trackDownload(downloadName) {
    this.trackEvent('download', {
      file_name: downloadName
    });
  }

  // Track outbound clicks
  trackOutboundClick(url) {
    this.trackEvent('click_outbound', {
      link_url: url
    });
  }
}

// Create singleton instance
export const analytics = new AnalyticsService();

// React hook to initialize analytics based on cookie consent
export const useAnalytics = () => {
  useEffect(() => {
    // Listen for cookie consent changes
    const handleStorageChange = () => {
      const consent = localStorage.getItem('cookieConsent');
      const preferences = localStorage.getItem('cookiePreferences');

      if (consent && preferences) {
        try {
          const consentData = JSON.parse(consent);
          const prefs = JSON.parse(preferences);

          if (consentData.status !== 'rejected' && prefs.analytics) {
            analytics.enableWithConsent();
          } else {
            analytics.disable();
          }
        } catch (e) {
          console.warn('Error processing cookie consent change:', e);
        }
      }
    };

    // Set up listener for cookie consent changes
    window.addEventListener('storage', handleStorageChange);
    
    // Initialize analytics based on current consent
    analytics.init();

    // Clean up listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return analytics;
};

// Function to initialize Google Analytics script (should be called conditionally)
export const initializeGoogleAnalytics = (trackingId) => {
  // Only initialize if analytics cookies are allowed
  const preferences = localStorage.getItem('cookiePreferences');
  if (preferences) {
    try {
      const prefs = JSON.parse(preferences);
      if (prefs.analytics) {
        // Load GA script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        document.head.appendChild(script);

        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', trackingId, {
            // Respect Do Not Track
            allow_google_signals: false
          });
        };
      }
    } catch (e) {
      console.warn('Error initializing Google Analytics:', e);
    }
  }
};

// Function to check if analytics are allowed
export const areAnalyticsAllowed = () => {
  const consent = localStorage.getItem('cookieConsent');
  const preferences = localStorage.getItem('cookiePreferences');

  if (consent && preferences) {
    try {
      const consentData = JSON.parse(consent);
      const prefs = JSON.parse(preferences);
      return consentData.status !== 'rejected' && prefs.analytics;
    } catch (e) {
      console.warn('Error checking analytics consent:', e);
      return false;
    }
  }
  return false;
};