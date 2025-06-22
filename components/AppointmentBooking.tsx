"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface AppointmentBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TimeSlot {
  time: string;
  isBooked: boolean;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeAccordion, setActiveAccordion] = useState<
    "date" | "time" | "details" | null
  >("date");

  // Get next 30 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      // Only include Tuesday (2), Thursday (4), Friday (5)
      const dayOfWeek = date.getDay();
      if ([2, 4, 5].includes(dayOfWeek)) {
        dates.push({
          date: date.toISOString().split("T")[0],
          displayDate: date.toLocaleDateString("de-DE", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
        });
      }
    }

    return dates.slice(0, 8); // Show only next 8 available dates
  };

  const availableDates = getAvailableDates();

  // Fetch available time slots when date changes
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
      setSelectedTime(""); // Reset selected time when date changes
    }
  }, [selectedDate]);

  // Clear selected time if it becomes unavailable
  useEffect(() => {
    if (selectedTime && timeSlots.length > 0) {
      const selectedSlot = timeSlots.find((slot) => slot.time === selectedTime);
      if (selectedSlot?.isBooked) {
        setSelectedTime("");
      }
    }
  }, [timeSlots, selectedTime]);

  const fetchAvailableSlots = async (date: string) => {
    setLoading(true);
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_APPOINTMENTS_API_URL;
      if (!apiBaseUrl) {
        throw new Error("NEXT_PUBLIC_APPOINTMENTS_API_URL is not set");
      }
      const response = await fetch(`${apiBaseUrl}/appointments?date=${date}`);
      const data = await response.json();

      if (response.ok) {
        setTimeSlots(data.slots);
        setActiveAccordion("time"); // Auto-open time selection
      } else {
        toast.error("Fehler beim Laden der verfügbaren Zeiten");
      }
    } catch (error) {
      toast.error("Fehler beim Laden der verfügbaren Zeiten");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    // Time accordion will open automatically via useEffect
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setActiveAccordion("details"); // Auto-open details form
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime || !formData.name || !formData.email) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus");
      return;
    }

    // Check if selected time is still available
    const selectedSlot = timeSlots.find((slot) => slot.time === selectedTime);
    if (selectedSlot?.isBooked) {
      toast.error(
        "Der gewählte Zeitslot ist nicht mehr verfügbar. Bitte wählen Sie einen anderen."
      );
      setSelectedTime("");
      return;
    }

    setLoading(true);

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_APPOINTMENTS_API_URL;
      if (!apiBaseUrl) {
        throw new Error("NEXT_PUBLIC_APPOINTMENTS_API_URL is not set");
      }
      const response = await fetch(`${apiBaseUrl}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedDate,
          time: selectedTime,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          "Termin erfolgreich gebucht! Sie erhalten eine Bestätigung per E-Mail."
        );
        onClose();
        // Reset form
        setSelectedDate("");
        setSelectedTime("");
        setFormData({ name: "", email: "", message: "" });
        setActiveAccordion("date");
      } else {
        toast.error(result.error || "Fehler beim Buchen des Termins");
      }
    } catch (error) {
      toast.error(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setLoading(false);
    }
  };

  const AccordionHeader = ({
    title,
    isActive,
    onClick,
    isCompleted,
    step,
  }: {
    title: string;
    isActive: boolean;
    onClick: () => void;
    isCompleted: boolean;
    step: number;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full flex items-center justify-between p-3 sm:p-4 text-left transition-all duration-200
        ${
          isActive
            ? "bg-[#30D5C8]/10 border-[#30D5C8]"
            : "bg-gray-50 border-gray-200"
        }
        ${isCompleted ? "text-[#30D5C8]" : "text-gray-700"}
        border rounded-lg mb-2 hover:bg-[#30D5C8]/5 min-h-[60px] sm:min-h-auto
      `}
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div
          className={`
          w-6 h-6 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
          ${
            isCompleted
              ? "bg-[#30D5C8] text-white"
              : isActive
              ? "bg-[#30D5C8]/20 text-[#30D5C8]"
              : "bg-gray-300 text-gray-600"
          }
        `}
        >
          {isCompleted ? "✓" : step}
        </div>
        <span className="font-medium text-sm sm:text-base leading-tight">
          {title}
        </span>
      </div>
      <svg
        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 flex-shrink-0 ${
          isActive ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#0A192F] text-white p-4 sm:p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-bold">Termin buchen</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors duration-200 p-1"
              aria-label="Modal schließen"
            >
              <svg
                className="w-5 h-5 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-200 mt-2 text-sm">Verfügbar: Di, Do, Fr</p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {/* Date Selection Accordion */}
          <div>
            <AccordionHeader
              title={
                selectedDate
                  ? `Datum: ${
                      availableDates.find((d) => d.date === selectedDate)
                        ?.displayDate
                    }`
                  : "Datum wählen"
              }
              isActive={activeAccordion === "date"}
              onClick={() =>
                setActiveAccordion(activeAccordion === "date" ? null : "date")
              }
              isCompleted={!!selectedDate}
              step={1}
            />
            {activeAccordion === "date" && (
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 p-3 sm:p-4 bg-gray-50 rounded-lg mb-2">
                {availableDates.map(({ date, displayDate }) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => handleDateSelect(date)}
                    className={`
                      p-2.5 sm:p-3 text-center rounded-lg border transition-all duration-200 text-xs sm:text-sm
                      ${
                        selectedDate === date
                          ? "border-[#30D5C8] bg-[#30D5C8] text-white"
                          : "border-gray-300 hover:border-[#30D5C8] hover:bg-[#30D5C8]/10"
                      }
                    `}
                  >
                    {displayDate}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Time Selection Accordion */}
          {selectedDate && (
            <div>
              <AccordionHeader
                title={selectedTime ? `Zeit: ${selectedTime}` : "Zeit wählen"}
                isActive={activeAccordion === "time"}
                onClick={() =>
                  setActiveAccordion(activeAccordion === "time" ? null : "time")
                }
                isCompleted={!!selectedTime}
                step={2}
              />
              {activeAccordion === "time" && (
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg mb-2">
                  {loading ? (
                    <div className="flex items-center justify-center py-6 sm:py-8">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#30D5C8]"></div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-1.5 sm:gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() =>
                            !slot.isBooked && handleTimeSelect(slot.time)
                          }
                          disabled={slot.isBooked}
                          className={`
                            p-2 sm:p-2 text-center rounded-lg border transition-all duration-200 text-xs sm:text-sm min-h-[44px] sm:min-h-auto
                            ${
                              slot.isBooked
                                ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                                : selectedTime === slot.time
                                ? "border-[#30D5C8] bg-[#30D5C8] text-white"
                                : "border-gray-300 hover:border-[#30D5C8] hover:bg-[#30D5C8]/10"
                            }
                          `}
                        >
                          <span className={slot.isBooked ? "line-through" : ""}>
                            {slot.time}
                          </span>
                          {slot.isBooked && (
                            <div className="text-xs mt-0.5 sm:mt-1">Belegt</div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Details Form Accordion */}
          {selectedTime && (
            <div>
              <AccordionHeader
                title="Ihre Daten"
                isActive={activeAccordion === "details"}
                onClick={() =>
                  setActiveAccordion(
                    activeAccordion === "details" ? null : "details"
                  )
                }
                isCompleted={!!(formData.name && formData.email)}
                step={3}
              />
              {activeAccordion === "details" && (
                <form
                  onSubmit={handleSubmit}
                  className="p-3 sm:p-4 bg-gray-50 rounded-lg mb-2 space-y-3 sm:space-y-4"
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#30D5C8] focus:border-transparent"
                      placeholder="Vollständiger Name *"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#30D5C8] focus:border-transparent"
                      placeholder="E-Mail-Adresse *"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#30D5C8] focus:border-transparent resize-none"
                      placeholder="Nachricht (optional)"
                    />
                  </div>

                  <div className="bg-white p-2.5 sm:p-3 rounded border text-xs text-gray-600">
                    Mit der Buchung stimmen Sie der Terminverwaltung und
                    E-Mail-Bestätigung zu.
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || loading}
                      className="
                        w-full sm:flex-1 py-3 sm:py-2 px-4 bg-[#30D5C8] hover:bg-[#2BC4B8] 
                        disabled:bg-gray-300 disabled:cursor-not-allowed
                        text-white font-medium rounded-lg text-sm
                        transition-all duration-200 order-2 sm:order-1
                      "
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Buchen...
                        </div>
                      ) : (
                        "Termin buchen"
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-4 py-3 sm:py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg text-sm transition-colors order-1 sm:order-2"
                    >
                      Abbrechen
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
