import { useState, useEffect } from 'react';

const useCookieConsent = () => {
  const [consent, setConsent] = useState(null);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    const consentStatus = localStorage.getItem('cookieConsent');
    const consentPreferences = localStorage.getItem('cookiePreferences');

    if (consentStatus) {
      try {
        setConsent(JSON.parse(consentStatus));
      } catch (e) {
        console.error('Error parsing cookie consent', e);
      }
    }

    if (consentPreferences) {
      try {
        setPreferences(JSON.parse(consentPreferences));
      } catch (e) {
        console.error('Error parsing cookie preferences', e);
      }
    }
  }, []);

  const isAnalyticsEnabled = () => {
    return preferences.analytics;
  };

  const isMarketingEnabled = () => {
    return preferences.marketing;
  };

  const isPreferencesEnabled = () => {
    return preferences.preferences;
  };

  const isCookieTypeEnabled = (type) => {
    return preferences[type] || false;
  };

  const hasConsent = () => {
    return consent !== null;
  };

  const updatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
  };

  return {
    consent,
    preferences,
    isAnalyticsEnabled,
    isMarketingEnabled,
    isPreferencesEnabled,
    isCookieTypeEnabled,
    hasConsent,
    updatePreferences
  };
};

export default useCookieConsent;