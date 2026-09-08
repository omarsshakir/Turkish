import {
  BadgeCheck, BookOpen, Box, Briefcase, Calendar, CalendarDays, Cat, Clock,
  CupSoda, Gem, GraduationCap, Hand, Hash, HeartPulse, Home, Laptop, MapPin,
  MessageSquare, Palette, PersonStanding, Plane, Quote, School, Shirt,
  ShoppingCart, Smile, Sparkles, Trees, User, Users, UtensilsCrossed, Zap,
  CloudSun, Bus, Compass, Apple, ArrowLeftRight,
  Newspaper, Link2, Blocks, Coffee, TrendingUp, Landmark, FlaskConical,
  Stamp, Scale, Feather, Globe, HeartHandshake, Infinity as InfinityIcon, Puzzle,
} from 'lucide-react';

/**
 * Explicit icon registry.
 *
 * Category icons are named by string in the content files, so something has to
 * turn "UtensilsCrossed" into a component. A namespace import (`import * as`)
 * would do it in one line but pulls all 1,500 lucide icons into the bundle -
 * this map keeps only the ~35 the curriculum actually uses.
 */
const REGISTRY = {
  BadgeCheck, BookOpen, Box, Briefcase, Bus, Calendar, CalendarDays, Cat, Clock,
  CloudSun, Compass, Apple, ArrowLeftRight, CupSoda, Gem, GraduationCap, Hand, Hash, HeartPulse, Home, Laptop,
  MapPin, MessageSquare, Palette, PersonStanding, Plane, Quote, School, Shirt,
  ShoppingCart, Smile, Sparkles, Trees, User, Users, UtensilsCrossed, Zap,
  Newspaper, Link2, Blocks, Coffee, TrendingUp, Landmark, FlaskConical,
  Stamp, Scale, Feather, Globe, HeartHandshake, Infinity: InfinityIcon, Puzzle,
} as const;

export type CategoryIconName = keyof typeof REGISTRY;

/** Renders a category's icon, falling back to a neutral book. */
export function CategoryIcon({
  name, size = 18, className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = REGISTRY[name as CategoryIconName] ?? BookOpen;
  return <Icon size={size} className={className} />;
}
