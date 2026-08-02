import {
  User,
  Dumbbell,
  HeartPulse,
  Flame,
  TrendingUp,
  Timer,
  Leaf,
  Apple,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const services: Service[] = [
  {
    icon: User,
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your exact goals and pace.",
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Progressive overload programming to build real, lasting strength.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Fitness",
    desc: "High-output conditioning to build endurance and heart health.",
  },
  {
    icon: Flame,
    title: "Weight Loss",
    desc: "Structured fat-loss programs paired with nutrition guidance.",
  },
  {
    icon: TrendingUp,
    title: "Muscle Building",
    desc: "Hypertrophy-focused training for serious size and definition.",
  },
  {
    icon: Timer,
    title: "CrossFit",
    desc: "High-intensity functional workouts in a competitive group setting.",
  },
  {
    icon: Leaf,
    title: "Yoga",
    desc: "Mobility, flexibility and recovery sessions for total balance.",
  },
  {
    icon: Apple,
    title: "Nutrition Coaching",
    desc: "Custom meal strategy built around your training and lifestyle.",
  },
];

export type Trainer = {
  name: string;
  role: string;
  exp: string;
  img: string;
};

export const trainers: Trainer[] = [
  {
    name: "Zunaira",
    role: "Head Strength Coach",
    exp: "9 Yrs Experience",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sara Khan",
    role: "CrossFit & HIIT",
    exp: "6 Yrs Experience",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Adil imran",
    role: "Bodybuilding Coach",
    exp: "11 Yrs Experience",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ayesha Malik",
    role: "Yoga & Mobility",
    exp: "7 Yrs Experience",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
  },
];

export const galleryImages: string[] = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=900&auto=format&fit=crop",
  "/image-1.jpg",
  "/image-1.jpg",
  "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=900&auto=format&fit=crop",
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ameer Abdullah",
    role: "Lost 18kg in 6 months",
    text: "Afaq Fitness completely changed how I train. The coaches actually track your progress and adapt the plan every week.",
  },
  {
    name: "Zainab Fatima",
    role: "Strength Program Member",
    text: "I have never felt stronger. The personal attention here is unlike any gym I have trained at before.",
  },
  {
    name: "Shakil Awan",
    role: "CrossFit Athlete",
    text: "The energy, the coaching, the community — everything about Afaq pushes you to become the best version of yourself.",
  },
  {
    name: "Mnahil Sheikh",
    role: "Nutrition & Weight Loss",
    text: "The nutrition coaching alone was worth it. Combined with training, I hit goals I thought were years away.",
  },
];

export const navItems: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
