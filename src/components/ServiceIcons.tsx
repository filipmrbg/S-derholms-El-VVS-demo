import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Elinstallation & Elservice
 * Precision lightning bolt, circuit wiring and energy shield
 */
export function ElectricalIcon({
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
      <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
      <path
        d="M26 6L14 26H24L22 42L34 22H24L26 6Z"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.12"
      />
    </svg>
  );
}

/**
 * 2. VVS & Rörarbeten
 * Pipe system, pressure valve and water flow
 */
export function PlumbingIcon({
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
      <path
        d="M8 14H24C28.4183 14 32 17.5817 32 22V40"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M40 34H32"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="6" y="10" width="4" height="8" rx="1" fill={color} />
      <rect x="30" y="38" width="8" height="4" rx="1" fill={color} />
      {/* Water droplet */}
      <path
        d="M20 28C20 28 14 34.5 14 37.5C14 39.9853 16.0147 42 18.5 42C20.9853 42 23 39.9853 23 37.5C23 34.5 20 28 20 28Z"
        stroke={color}
        strokeWidth="2.2"
        fill={color}
        fillOpacity="0.15"
      />
      {/* Valve handle */}
      <circle cx="20" cy="14" r="3" stroke={color} strokeWidth="2.2" fill="#ffffff" />
    </svg>
  );
}

/**
 * 3. Thermia Värmepumpar
 * Modern cabinet heat pump with thermal cycle waves
 */
export function HeatPumpIcon({
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
      {/* Cabinet */}
      <rect
        x="10"
        y="6"
        width="28"
        height="36"
        rx="3"
        stroke={color}
        strokeWidth="2.4"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Display screen */}
      <rect x="18" y="12" width="12" height="8" rx="1.5" stroke={color} strokeWidth="1.8" />
      {/* Thermal wave lines */}
      <path
        d="M16 26C18 24.5 20 24.5 22 26C24 27.5 26 27.5 28 26C30 24.5 32 24.5 32 26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 31C18 29.5 20 29.5 22 31C24 32.5 26 32.5 28 31C30 29.5 32 29.5 32 31"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 36C18 34.5 20 34.5 22 36C24 37.5 26 37.5 28 36C30 34.5 32 34.5 32 36"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 4. Service & Underhåll
 * Precision wrench and shield for reliability
 */
export function MaintenanceIcon({
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
      {/* Shield */}
      <path
        d="M24 6L38 12V22C38 31 32 38.5 24 42C16 38.5 10 31 10 22V12L24 6Z"
        stroke={color}
        strokeWidth="2.2"
        fill={color}
        fillOpacity="0.08"
        strokeLinejoin="round"
      />
      {/* Wrench inside */}
      <path
        d="M21 21L29 29M28 20L31 17C32.5 18.5 32.5 20.5 31 22L29 24L26 21L28 20ZM19 29L16 32C15 33 15 34 16 35C17 36 18 36 19 35L22 32L19 29Z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    case 'elinstallation':
    case 'el':
    case 'elservice':
      return <ElectricalIcon color={color} size={size} className={className} style={style} />;
    case 'vvs-arbeten':
    case 'vvs':
    case 'ror':
      return <PlumbingIcon color={color} size={size} className={className} style={style} />;
    case 'varmepumpar':
    case 'thermia':
    case 'varme':
      return <HeatPumpIcon color={color} size={size} className={className} style={style} />;
    case 'service-underhall':
    case 'service':
    case 'underhall':
      return <MaintenanceIcon color={color} size={size} className={className} style={style} />;
    default:
      return <HeatPumpIcon color={color} size={size} className={className} style={style} />;
  }
}

export default ServiceIcon;
