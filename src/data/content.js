
import { 
  Stethoscope, 
  Smile, 
  Activity, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  User, 
  Users,
  CalendarCheck
} from 'lucide-react';

export const clinicInfo = {
  name: "Sri Sai Multi-Speciality Clinic",
  doctor: "Dr. Arjun Reddy",
  tagline: "Your Smile, Our Passion",
  description: "Comprehensive dental care with a gentle touch. State-of-the-art facility in Madhapur offering personalized treatments for the whole family.",
  phone: "+919876543210", // Placeholder
  email: "contact@srisaidental.com",
  address: {
    street: "Plot No. 45, 1st Floor, Hi-Tech City Road",
    area: "Madhapur",
    city: "Hyderabad",
    state: "Telangana",
    zip: "500081",
    googleMapsLink: "https://maps.google.com/?q=Sri+Sai+Multi+Speciality+Clinic+Madhapur" 
  }
};

export const trustStats = [
  { 
    id: 1, 
    label: "Years Experience", 
    value: "15+", 
    icon: Award 
  },
  { 
    id: 2, 
    label: "Happy Patients", 
    value: "5,000+", 
    icon: Users 
  },
  { 
    id: 3, 
    label: "Successful Surgeries", 
    value: "2,500+", 
    icon: Activity 
  },
  { 
    id: 4, 
    label: "5-Star Reviews", 
    value: "450+", 
    icon: ShieldCheck 
  },
];

export const services = [
  {
    id: 'general',
    title: "General Dentistry",
    description: "Routine checkups, cleanings, and preventative care to keep your smile healthy.",
    icon: Stethoscope,
    priceRange: "₹500 - ₹2000"
  },
  {
    id: 'cosmetic',
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers for a confident look.",
    icon: Smile,
    priceRange: "₹3000+"
  },
  {
    id: 'implants',
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth.",
    icon: ShieldCheck, // Using ShieldCheck as a proxy for durable/implant
    priceRange: "₹25000+"
  },
  {
    id: 'rootcanal',
    title: "Root Canal Treatment",
    description: "Pain-free therapy to save infected teeth and restore function.",
    icon: Activity,
    priceRange: "₹4500 - ₹8000"
  },
  {
    id: 'ortho',
    title: "Orthodontics",
    description: "Braces and clear aligners to straighten misaligned teeth.",
    icon: Users, // Represents aligning/grouping
    priceRange: "₹30000+"
  },
  {
    id: 'kids',
    title: "Pediatric Dentistry",
    description: "Gentle care designed specifically for children's dental health.",
    icon: User, // Represents child/individual
    priceRange: "₹500 - ₹1500"
  }
];

export const galleryImages = [
  {
    id: 1,
    before: "/images/gallery/case1-before.jpg", 
    after: "/images/gallery/case1-after.jpg",
    title: "Smile Makeover",
    description: "Complete transformation with veneers and whitening."
  },
  {
    id: 2,
    before: "/images/gallery/case2-before.jpg",
    after: "/images/gallery/case2-after.jpg",
    title: "Dental Implants",
    description: "Restoring function and aesthetics with implants."
  },
  // Add more as needed
];

export const doctorBio = {
  name: "Dr. Arjun Reddy",
  qualification: "BDS, MDS - Prosthodontist",
  designation: "Chief Dental Surgeon",
  experience: "15 Years Experience",
  about: "Dr. Arjun Reddy is a renowned Prosthodontist with over 15 years of clinical experience. He specializes in cosmetic dentistry and full mouth rehabilitation. Known for his gentle approach, he is dedicated to providing pain-free dental care using the latest technology.",
  specialties: ["Implants", "Smile Design", "Full Mouth Rehab"],
  image: "/images/doctor.jpg" 
};

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    review: "Excellent experience! Dr. Arjun is very professional and explains everything clearly. The clinic is very clean and hygienic.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sneha Reddy",
    review: "I was terrified of root canals, but the procedure here was completely painless. Highly recommend Sri Sai Clinic.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Amit Patel",
    review: "Great service and affordable prices. The staff is very polite and helpful.",
    rating: 4,
    date: "3 months ago"
  }
];

export const faqs = [
  {
    question: "Do I need an appointment?",
    answer: "Yes, we recommend booking an appointment to avoid waiting times. You can book easily via WhatsApp or phone."
  },
  {
    question: "What are your clinic timings?",
    answer: "We are open Monday to Saturday, 10:00 AM to 8:00 PM. Sunday is by appointment only."
  },
  {
    question: "Do you accept insurance?",
    answer: "We accept all major insurance providers. Please check with our front desk for specific details."
  },
  {
    question: "Is the root canal treatment painful?",
    answer: "Not anymore! With modern anesthesia and technology, root canal treatments are virtually painless."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "It is recommended to visit every 6 months for a routine checkup and cleaning."
  }
];

export const operatingHours = [
  { day: "Mon - Sat", time: "10:00 AM - 08:00 PM" },
  { day: "Sunday", time: "By Appointment Only" }
];

export const socialLinks = {
  facebook: "#",
  instagram: "#",
  twitter: "#",
  linkedin: "#"
};

export const seoConfig = {
  title: "Sri Sai Multi-Speciality Dental Clinic | Best Dentist in Madhapur",
  description: "Top-rated dental clinic in Madhapur, Hyderabad led by Dr. Arjun Reddy. Specialized in implants, root canals, and cosmetic dentistry. Book now!",
  url: "https://www.srisaiclinic.com", // Placeholder
  ogImage: "https://www.srisaiclinic.com/og-image.jpg" // Placeholder
};
