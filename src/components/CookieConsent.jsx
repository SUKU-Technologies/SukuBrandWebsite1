import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Settings, Info, Shield, Zap, Target, Palette } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and disabled
    analytics: false,
    marketing: false,
    preferences: false
  });
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'details'

  useEffect(() => {
    const consentStatus = localStorage.getItem('cookieConsent');
    const consentPreferences = localStorage.getItem('cookiePreferences');

    // Check if user wants to reset consent (for development/testing)
    const urlParams = new URLSearchParams(window.location.search);
    const resetConsent = urlParams.get('reset-consent');

    if (resetConsent === 'true') {
      localStorage.removeItem('cookieConsent');
      localStorage.removeItem('cookiePreferences');
      localStorage.removeItem('visited'); // Also reset the visited flag if needed
      window.location.search = ''; // Clear the URL parameter
      return; // Exit early to avoid showing the banner immediately
    }

    if (!consentStatus) {
      setShowConsent(true);
    } else if (consentPreferences) {
      try {
        setPreferences(JSON.parse(consentPreferences));
      } catch (e) {
        console.error('Error parsing cookie preferences', e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allPrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    savePreferences(allPrefs, 'accepted');
    setShowConsent(false);
  };

  const handleRejectAll = () => {
    const basicPrefs = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    savePreferences(basicPrefs, 'rejected');
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences, 'custom');
    setShowConsent(false);
  };

  const savePreferences = (prefs, status) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      status,
      timestamp: new Date().toISOString()
    }));
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
  };

  const togglePreference = (type) => {
    if (type !== 'necessary') {
      setPreferences(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
    }
  };

  const handleResetConsent = () => {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookiePreferences');
    setShowConsent(true);
  };

  if (!showConsent) return null;

  const cookieTypes = [
    { 
      type: 'necessary', 
      label: 'Necessary', 
      description: 'Essential for the website to function properly',
      icon: Shield,
      color: 'blue',
      required: true
    },
    { 
      type: 'analytics', 
      label: 'Analytics', 
      description: 'Help us understand how visitors interact with our site',
      icon: Target,
      color: 'green'
    },
    { 
      type: 'marketing', 
      label: 'Marketing', 
      description: 'Used to deliver advertisements that are more relevant to you',
      icon: Zap,
      color: 'purple'
    },
    { 
      type: 'preferences', 
      label: 'Preferences', 
      description: 'Allow the website to remember choices you make',
      icon: Palette,
      color: 'orange'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl border-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Cookie size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Cookie Consent</h3>
                  <p className="text-blue-100 text-xs">Manage your preferences</p>
                </div>
              </div>
              <button
                onClick={() => setShowConsent(false)}
                className="text-white hover:text-gray-200 transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === 'details'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Details
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-4">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="text-center max-w-2xl mx-auto">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">We use cookies to improve your experience</h4>
                  <p className="text-gray-600 text-sm">
                    We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={handleAcceptAll}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Check size={16} />
                    Accept All
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <X size={16} />
                    Reject All
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Settings size={16} />
                    Customize
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="space-y-4">
                <div className="text-center max-w-2xl mx-auto">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Cookie Preferences</h4>
                  <p className="text-gray-600 text-sm">
                    Select which cookies you allow us to use.
                  </p>
                </div>

                {/* Cookie Types */}
                <div className="grid gap-3">
                  {cookieTypes.map((cookie) => {
                    const IconComponent = cookie.icon;
                    const colorClasses = {
                      blue: 'bg-blue-100 text-blue-800 border-blue-200',
                      green: 'bg-green-100 text-green-800 border-green-200',
                      purple: 'bg-purple-100 text-purple-800 border-purple-200',
                      orange: 'bg-orange-100 text-orange-800 border-orange-200'
                    };

                    return (
                      <div
                        key={cookie.type}
                        className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${colorClasses[cookie.color]}`}>
                            <IconComponent size={14} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium text-gray-900 text-sm truncate">
                                {cookie.label} Cookies
                                {cookie.required && (
                                  <span className="ml-2 inline-block bg-red-100 text-red-800 text-xs px-1.5 py-0.5 rounded">
                                    Required
                                  </span>
                                )}
                              </h5>
                              {!cookie.required && (
                                <label className="relative inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={preferences[cookie.type]}
                                    onChange={() => togglePreference(cookie.type)}
                                    className="sr-only peer"
                                  />
                                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 mt-1 truncate">{cookie.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 justify-end pt-3 border-t border-gray-200">
                  <button
                    onClick={handleSavePreferences}
                    className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Check size={14} />
                    Save
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <X size={14} />
                    Reject All
                  </button>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Info size={14} />
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
              <p className="text-gray-500">
                Consent stored in browser for 1 year
              </p>
              <button
                onClick={handleResetConsent}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Reset preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;