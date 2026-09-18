import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Bergsprängning & Stenspräckning
 * Facetterat berg, sprängkilar, precisionsspräckning och detonationsstrålar
 */
export function RockBlastingIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Facetterad bergsformation */}
      <path
        d="M6 39L14 20L24 13L34 20L42 39H6Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Centrala spräcklinjer och kilar */}
      <path
        d="M24 13L21 26L27 31L24 39"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 20L21 26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34 20L27 31"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Detonations- och expansionsstrålar vid bergsprängning */}
      <line x1="24" y1="5" x2="24" y2="9" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="15" y1="7" x2="18" y2="11" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="33" y1="7" x2="30" y2="11" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="8" y1="15" x2="12" y2="17" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="40" y1="15" x2="36" y2="17" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      {/* Marklinje */}
      <line x1="3" y1="39" x2="45" y2="39" stroke={color} strokeWidth="2.4" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

/**
 * 2. Markarbete & Grävning
 * Robust bandgrävare med hytt, larvband och ledburen grävarm med skopa
 */
export function ExcavationIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Larvband / bandchassi */}
      <rect
        x="7"
        y="32"
        width="34"
        height="9"
        rx="4.5"
        stroke={color}
        strokeWidth="2.3"
        fill={color}
        fillOpacity="0.08"
      />
      <circle cx="13.5" cy="36.5" r="2" fill={color} />
      <circle cx="24" cy="36.5" r="2" fill={color} />
      <circle cx="34.5" cy="36.5" r="2" fill={color} />
      {/* Maskinkropp och förarhytt */}
      <path
        d="M10 32V19C10 17.5 11.5 16 13 16H23C24.5 16 26 17.5 26 19V32"
        stroke={color}
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
      {/* Hyttfönster */}
      <path
        d="M14 19H22V25H14V19Z"
        stroke={color}
        strokeWidth="1.8"
        fill={color}
        fillOpacity="0.15"
      />
      {/* Ledburen grävarm och hydraulik */}
      <path
        d="M25 24L33 11L41 21"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33" cy="11" r="2" fill={color} />
      {/* Grävskopa med tänder */}
      <path
        d="M41 21L37 26C36.5 28 38 30 40 30L43 29L44 24L41 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.2"
      />
      <path
        d="M37 27L35 29M39.5 30L38.5 32M42.5 29.5L42.5 32"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 3. Dränering & Dagvatten
 * Husgrundsvägg med fuktspärr, perforerat dräneringsrör, makadambädd och vattenflöde
 */
export function DrainageIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Källarvägg och grundsula */}
      <path
        d="M9 8V35H24V41H5V35H9"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Fuktskydd / dräneringsskiva skift */}
      <line x1="9" y1="16" x2="19" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="24" x2="19" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="9" y1="32" x2="19" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Perforerat dräneringsrör vid grundsulan */}
      <circle
        cx="34"
        cy="33"
        r="7.5"
        stroke={color}
        strokeWidth="2.4"
        fill={color}
        fillOpacity="0.08"
      />
      <circle
        cx="34"
        cy="33"
        r="3"
        stroke={color}
        strokeWidth="2"
      />
      {/* Dräneringsmakadam / filtergrus */}
      <circle cx="34" cy="21" r="1.4" fill={color} />
      <circle cx="28" cy="24" r="1.4" fill={color} />
      <circle cx="40" cy="24" r="1.4" fill={color} />
      {/* Vattendroppar som leds bort från grunden */}
      <path
        d="M25 11C25 11 23 14 23 15.5C23 16.8 24 17.8 25 17.8C26 17.8 27 16.8 27 15.5C27 14 25 11 25 11Z"
        fill={color}
      />
      <path
        d="M33 7C33 7 31 10 31 11.5C31 12.8 32 13.8 33 13.8C34 13.8 35 12.8 35 11.5C35 10 33 7 33 7Z"
        fill={color}
      />
      {/* Schaktbotten */}
      <line x1="25" y1="41" x2="43" y2="41" stroke={color} strokeWidth="2.4" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

/**
 * 4. Snöröjning & Markunderhåll
 * Kraftigt plogblad i arbete kombinerat med distinkt snöstjärneemblem
 */
export function SnowPlowIcon({
  color = 'currentColor',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Snöstjärna / vinterväghållning */}
      <line x1="24" y1="6" x2="24" y2="24" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="15" y1="11" x2="33" y2="19" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="33" y1="11" x2="15" y2="19" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M21 8L24 11L27 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 15L20 16.5L18.5 19" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 15L28 16.5L29.5 19" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="15" r="1.8" fill={color} />
      {/* Plogblad / snöplogprofil */}
      <path
        d="M7 36C15 36 26 33 37 26L41 21"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M5 38L37 27"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M14 34L18 27M23 32L27 25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Vägbanelinje */}
      <line x1="3" y1="41" x2="45" y2="41" stroke={color} strokeWidth="2.4" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export function ServiceIcon({
  type,
  color = 'currentColor',
  size = 42,
  className,
  style,
}: {
  type: string;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  switch (type) {
    case 'bergsprangning':
    case 'stensprackning':
    case 'bergborrning':
      return <RockBlastingIcon color={color} size={size} className={className} style={style} />;
    case 'markarbete':
    case 'gravning':
    case 'schakt':
      return <ExcavationIcon color={color} size={size} className={className} style={style} />;
    case 'dranering':
    case 'dagvatten':
    case 'fuktskydd':
      return <DrainageIcon color={color} size={size} className={className} style={style} />;
    case 'snorojning':
    case 'markunderhall':
    case 'vinter':
      return <SnowPlowIcon color={color} size={size} className={className} style={style} />;
    default:
      return <RockBlastingIcon color={color} size={size} className={className} style={style} />;
  }
}

export default ServiceIcon;

