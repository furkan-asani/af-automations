import React, { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie_consent";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [consent, setConsent] = useState({
    essential: true, // Essential cookies are always implicitly active but good to have a record
    analytics: false,
    functional: false,
    marketing: false,
  });
  // Local state for checkboxes in customize modal
  const [customizePrefs, setCustomizePrefs] = useState({
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentStatus) {
      setShowBanner(true);
    } else {
      try {
        const parsedConsent = JSON.parse(consentStatus);
        setConsent(parsedConsent);
        setCustomizePrefs({
          // Initialize customizePrefs from stored consent
          analytics: parsedConsent.analytics || false,
          functional: parsedConsent.functional || false,
          marketing: parsedConsent.marketing || false,
        });
        loadScriptsBasedOnConsent(parsedConsent);
      } catch (error) {
        console.error("Error parsing cookie consent from localStorage", error);
        setShowBanner(true); // Show banner again if consent is malformed
        // Reset customizePrefs if local storage is corrupt
        setCustomizePrefs({
          analytics: false,
          functional: false,
          marketing: false,
        });
      }
    }
  }, []);

  const loadScriptsBasedOnConsent = (currentConsent) => {
    // Placeholder: Logic to load scripts based on consent
    if (currentConsent.analytics) {
      console.log("Loading Analytics script (if not already loaded)...");
    }
    if (currentConsent.functional) {
      console.log("Enabling functional features (if applicable)...");
    }
    if (currentConsent.marketing) {
      console.log("Loading Marketing script (if not already loaded)...");
    }
  };

  const handleAcceptAll = () => {
    const newConsent = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);
    setShowCustomizeModal(false);
    loadScriptsBasedOnConsent(newConsent);
  };

  const handleRejectNonEssential = () => {
    const newConsent = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);
    setShowCustomizeModal(false);
    loadScriptsBasedOnConsent(newConsent);
  };

  const openCustomizeModal = () => {
    // Sync customizePrefs with current consent state when opening modal
    setCustomizePrefs({
      analytics: consent.analytics || false,
      functional: consent.functional || false,
      marketing: consent.marketing || false,
    });
    setShowCustomizeModal(true);
  };

  const handleSavePreferences = () => {
    const newConsent = {
      essential: true,
      analytics: customizePrefs.analytics,
      functional: customizePrefs.functional,
      marketing: customizePrefs.marketing,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    setShowBanner(false);
    setShowCustomizeModal(false);
    loadScriptsBasedOnConsent(newConsent);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCustomizePrefs((prev) => ({ ...prev, [name]: checked }));
  };

  if (!showBanner && !showCustomizeModal) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 shadow-lg z-50">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-sm text-gray-300 flex-grow mr-4">
              Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und
              unsere Website zu optimieren. Weitere Informationen finden Sie in
              unserer{" "}
              <Link href="/datenschutz" legacyBehavior>
                <a className="text-[#30D5C8] hover:text-[#28bba9] underline">
                  Datenschutzerklärung
                </a>
              </Link>
              .
            </p>
            <div className="flex space-x-2 flex-shrink-0">
              <button
                onClick={openCustomizeModal}
                className="px-3 py-2 border border-slate-500 hover:bg-slate-700 rounded-md text-xs sm:text-sm transition-colors"
              >
                Anpassen
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-3 py-2 bg-slate-600 hover:bg-slate-500 rounded-md text-xs sm:text-sm transition-colors"
              >
                Nur Essentielle
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-3 py-2 bg-[#30D5C8] hover:bg-[#28bba9] text-black rounded-md text-xs sm:text-sm transition-colors font-medium"
              >
                Alle Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}

      {showCustomizeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4">
          <div className="bg-slate-800 p-6 rounded-lg shadow-2xl w-full max-w-md text-white">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              Cookie-Einstellungen Anpassen
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Passen Sie Ihre Cookie-Einstellungen an. Essentielle Cookies sind
              immer aktiv.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="analytics"
                    checked={customizePrefs.analytics}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-[#30D5C8] bg-slate-700 border-slate-600 rounded focus:ring-1 focus:ring-[#30D5C8] focus:ring-offset-slate-800"
                  />
                  <span className="text-gray-200">Analyse-Cookies</span>
                </label>
                <p className="text-xs text-gray-500 pl-8">
                  Helfen uns zu verstehen, wie Besucher mit der Website
                  interagieren.
                </p>
              </div>

              <div>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="functional"
                    checked={customizePrefs.functional}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-[#30D5C8] bg-slate-700 border-slate-600 rounded focus:ring-1 focus:ring-[#30D5C8] focus:ring-offset-slate-800"
                  />
                  <span className="text-gray-200">Funktionale Cookies</span>
                </label>
                <p className="text-xs text-gray-500 pl-8">
                  Ermöglichen verbesserte Funktionalität und Personalisierung.
                </p>
              </div>

              <div>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketing"
                    checked={customizePrefs.marketing}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-[#30D5C8] bg-slate-700 border-slate-600 rounded focus:ring-1 focus:ring-[#30D5C8] focus:ring-offset-slate-800"
                  />
                  <span className="text-gray-200">Marketing-Cookies</span>
                </label>
                <p className="text-xs text-gray-500 pl-8">
                  Werden verwendet, um Besuchern relevante Anzeigen und
                  Marketingkampagnen anzuzeigen.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowCustomizeModal(false)}
                className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-md text-sm transition-colors"
              >
                Abbrechen
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-[#30D5C8] hover:bg-[#28bba9] text-black rounded-md text-sm transition-colors font-medium"
              >
                Einstellungen Speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
