import {
  UserCheck, CalendarDays, Camera, Building2, Hotel, Fuel,
  Truck, Trees, Flame, Sparkles, type LucideIcon,
} from "lucide-react";
import actionVip from "@/assets/action-vip.jpg";
import actionRetail from "@/assets/action-retail.jpg";
import actionFarmReal from "@/assets/action-farm-real.jpg";
import actionIndustrialReal from "@/assets/action-industrial-real.jpg";
import actionPetroleumReal from "@/assets/action-petroleum-real.jpg";
import actionHospitalityReal from "@/assets/action-hospitality-real.jpg";
import actionEventsReal from "@/assets/action-events-real.jpg";
import actionHighwayReal from "@/assets/action-highway-real.jpg";

export type ServiceDetails = {
  intro: string;
  whatsIncluded: string[];
  whoItsFor: string[];
  outcome: string;
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  label: string;
  desc: string;
  image?: string;
  details: ServiceDetails;
};

export const services: Service[] = [
  {
    slug: "vip-protection",
    icon: UserCheck,
    label: "VIP Protection",
    desc: "Discreet close protection for executives and high-profile clients.",
    image: actionVip,
    details: {
      intro:
        "Professional close protection for executives, dignitaries, public figures and private clients who need to move freely without compromising their safety. Our protectors are PSIRA-graded, route-trained and briefed on every assignment before they step out the door.",
      whatsIncluded: [
        "Trained close-protection officers (armed or unarmed)",
        "Advance route planning and venue recces",
        "Secure transport with vetted drivers",
        "Discreet asset and luggage handling",
        "24/7 client liaison and incident reporting",
      ],
      whoItsFor: [
        "Executives and business owners",
        "Public figures, athletes and entertainers",
        "Visiting delegations and dignitaries",
        "Private families with elevated risk",
      ],
      outcome:
        "You move with confidence — meetings, events and family time stay private and uninterrupted.",
    },
  },
  {
    slug: "events-security",
    icon: CalendarDays,
    label: "Events Security Management",
    desc: "Crowd management, access control and incident response for events.",
    image: actionEventsReal,
    details: {
      intro:
        "End-to-end security for functions of any size — from corporate launches and conferences to weddings, festivals and stadium events. We plan ahead, deploy disciplined personnel and stay invisible until we're needed.",
      whatsIncluded: [
        "Pre-event risk assessment and security plan",
        "Access control, ticket gates and VIP zones",
        "Crowd management and queue control",
        "On-site incident response and medical liaison",
        "Cash-in-transit and asset protection",
      ],
      whoItsFor: [
        "Corporate events and conferences",
        "Weddings, lifestyle and private functions",
        "Festivals, sports and entertainment venues",
        "Government and public-sector gatherings",
      ],
      outcome:
        "Your guests enjoy the event. We handle everything that could go wrong — quietly.",
    },
  },
  {
    slug: "cctv-armed-response",
    icon: Camera,
    label: "CCTV & 24/7 Armed Response",
    desc: "Monitored surveillance backed by rapid armed response teams.",
    image: actionRetail,
    details: {
      intro:
        "Eyes on your site around the clock, with armed teams ready to roll. We pair monitored CCTV and alarms with vehicle response so a detected threat becomes an intercepted threat — fast.",
      whatsIncluded: [
        "24/7 monitored CCTV and alarm signals",
        "Armed response vehicles on standby",
        "Verified intrusion alerts (no false-alarm fatigue)",
        "Live video review and recorded footage",
        "Monthly incident and uptime reporting",
      ],
      whoItsFor: [
        "Retail and commercial premises",
        "Warehouses and distribution centres",
        "Estates, complexes and private homes",
        "Schools, clinics and offices",
      ],
      outcome:
        "Threats are spotted early, verified instantly and intercepted — not just recorded.",
    },
  },
  {
    slug: "commercial-industrial",
    icon: Building2,
    label: "Commercial & Industrial Security",
    desc: "Site protection, access control and patrols for facilities.",
    image: actionIndustrialReal,
    details: {
      intro:
        "Hardened security for factories, warehouses, construction sites, mines and corporate parks. We layer access control, foot and vehicle patrols, and supervisor checks so production keeps moving and stock stays where it should.",
      whatsIncluded: [
        "Manned access control and visitor screening",
        "Static guarding and roving patrols",
        "Vehicle and contractor inspections",
        "Asset registers and stock-loss prevention",
        "Shift supervisors and accountable reporting",
      ],
      whoItsFor: [
        "Factories and manufacturing plants",
        "Construction sites and mining operations",
        "Warehouses and logistics hubs",
        "Corporate parks and head offices",
      ],
      outcome:
        "Operations run without disruption, shrinkage drops and your site stays accountable shift after shift.",
    },
  },
  {
    slug: "hospitality",
    icon: Hotel,
    label: "Hospitality Security",
    desc: "Guest-facing security for hotels, lodges and resorts.",
    image: actionHospitalityReal,
    details: {
      intro:
        "Security that protects guests and assets without ever feeling like security. Our hospitality team is trained to balance warmth and vigilance — the kind of presence that says \"welcome\" and \"we've got you\" at the same time.",
      whatsIncluded: [
        "Guest-facing front-of-house officers",
        "Concierge support and bag screening",
        "Back-of-house and staff-area patrols",
        "After-hours access control and key management",
        "Discreet incident handling and SAPS liaison",
      ],
      whoItsFor: [
        "Hotels, boutique stays and B&Bs",
        "Game lodges and resorts",
        "Restaurants and entertainment venues",
        "Conference and wellness centres",
      ],
      outcome:
        "Guests feel looked after. Your brand stays protected. Reviews stay five-star.",
    },
  },
  {
    slug: "petroleum",
    icon: Fuel,
    label: "Petroleum, Oil & Gas Security",
    desc: "Specialised security for high-risk fuel and energy sites.",
    image: actionPetroleumReal,
    details: {
      intro:
        "High-risk sites need specialist hands. We secure fuel depots, service stations, pipelines and energy infrastructure with officers who understand the safety, compliance and theft pressures unique to this sector.",
      whatsIncluded: [
        "Officers trained for hazardous-site protocols",
        "Forecourt, depot and pipeline patrols",
        "Tanker and driver verification",
        "Fuel-loss monitoring and shift handovers",
        "Emergency response coordination",
      ],
      whoItsFor: [
        "Service stations and forecourts",
        "Fuel depots and storage facilities",
        "Pipeline and energy infrastructure",
        "Transport and logistics operators",
      ],
      outcome:
        "Product, people and infrastructure stay safe — with full audit trails for compliance.",
    },
  },
  {
    slug: "highway-patrol",
    icon: Truck,
    label: "Highway Patrol & Road Assistance",
    desc: "Routine patrols and roadside support along key routes.",
    image: actionHighwayReal,
    details: {
      intro:
        "Visible patrol along the routes that matter to your business. We deter opportunistic crime, support stranded drivers and stay in radio contact with our control room for fast escalation.",
      whatsIncluded: [
        "Marked patrol vehicles on scheduled routes",
        "Roadside assistance and breakdown support",
        "Incident reporting and SAPS liaison",
        "Convoy and escort services on request",
        "Live tracking and shift logs",
      ],
      whoItsFor: [
        "Logistics and trucking companies",
        "Tourism and transfer operators",
        "Rural communities and farm associations",
        "Corporate fleets and field teams",
      ],
      outcome:
        "Your routes stay watched, your drivers stay supported and incidents get answered — not ignored.",
    },
  },
  {
    slug: "farm-watch",
    icon: Trees,
    label: "Property & Farm Watch",
    desc: "Rural and estate protection tailored to remote properties.",
    image: actionFarmReal,
    details: {
      intro:
        "Rural security designed for the realities of farms, smallholdings and estates — long perimeters, livestock, equipment and families to protect. Our officers know the land and the people on it.",
      whatsIncluded: [
        "Routine perimeter and grazing-land patrols",
        "Livestock counts and theft prevention",
        "Implement and equipment checks",
        "Rapid response to farm alarms",
        "Coordination with neighbours and SAPS",
      ],
      whoItsFor: [
        "Commercial farms and agribusiness",
        "Smallholdings and lifestyle estates",
        "Game farms and conservancies",
        "Rural communities and farm watches",
      ],
      outcome:
        "Stock stays in the kraal, equipment stays in the shed and your family sleeps easier.",
    },
  },
  {
    slug: "fire-security",
    icon: Flame,
    label: "Integrated Fire Security Solutions",
    desc: "Fire detection, prevention and emergency coordination.",
    details: {
      intro:
        "Fire risk doesn't sleep, and neither do we. We integrate fire detection, prevention and emergency coordination into your security stack so a single incident gets a single, coordinated response.",
      whatsIncluded: [
        "Fire risk assessments and prevention plans",
        "Detection systems and alarm monitoring",
        "Evacuation drills and signage compliance",
        "On-site fire marshals for high-risk operations",
        "Coordination with local fire services",
      ],
      whoItsFor: [
        "Industrial and manufacturing sites",
        "Warehouses storing combustible stock",
        "Hotels, lodges and public venues",
        "Estates and large residential complexes",
      ],
      outcome:
        "Faster detection, calmer evacuations, fewer losses — and full compliance peace of mind.",
    },
  },
  {
    slug: "cleaning-hygiene",
    icon: Sparkles,
    label: "Specialised Cleaning & Hygiene",
    desc: "Professional cleaning bundled with security operations.",
    details: {
      intro:
        "A clean, well-presented site is a secure site. We bundle professional cleaning and hygiene services with our security operations so you deal with one accountable partner instead of three.",
      whatsIncluded: [
        "Daily office and facility cleaning",
        "Industrial deep-cleans and post-build cleans",
        "Sanitation, hygiene and consumable refills",
        "Specialised cleaning for hospitality and healthcare",
        "Single point of contact across all services",
      ],
      whoItsFor: [
        "Corporate offices and reception areas",
        "Industrial and manufacturing sites",
        "Hotels, lodges and clinics",
        "Estates and shared facilities",
      ],
      outcome:
        "One trusted team, one invoice, and a site that looks as professional as it is protected.",
    },
  },
];
