import React from 'react';
import styles from './leads.module.css';

const badges = [
  { label: 'High Priority', className: styles.badgeHighPriority },
  { label: 'SweetSpot', className: styles.badgeSweetSpot },
  { label: 'Same Locality', className: styles.badgeSameLocality },
  { label: 'Email Verified', className: styles.badgeEmailVerified },
  { label: 'Phone No. Verified', className: styles.badgePhoneVerified },
  { label: 'Enquire at your venue', className: styles.badgeEnquireVenue },
  { label: 'Customer Shortlisted', className: styles.badgeCustomerShortlisted },
];

const LeadBadges = ({ className }) => (
  <div className={className || styles.badgesRow}>
    {badges.map(badge => (
      <span key={badge.label} className={`${styles.badge} ${badge.className}`}>{badge.label}</span>
    ))}
  </div>
);

export default LeadBadges;
