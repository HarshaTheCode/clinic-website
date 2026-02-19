
/**
 * Generates a WhatsApp API link with a pre-filled message.
 * @param {string} phone - The phone number (with or without country code logic handling, simplified here).
 * @param {string} message - The message to pre-fill.
 * @returns {string} - The full WhatsApp URL.
 */
export const buildWhatsAppUrl = (phone, message = "") => {
    // Strip non-numeric characters for the actual link
    const cleanPhone = phone.replace(/[^\d]/g, '');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};
