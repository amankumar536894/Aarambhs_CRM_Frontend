import React from 'react';
import styles from './leadDetails.module.css';

const LeadDetailsInfo = () => (
  <div className={styles.infoCard}>
    <div className={styles.infoTitleRow}>
      <span className={styles.infoTitle}>Lead Information</span>
      <span className={styles.infoEdit} title="Edit">✏️</span>
    </div>
    <div className={styles.infoGrid}>
      <div>
        <div><b>Lead Name:</b> 916203866591 <span className={styles.infoIcons}>⭐️ 🚩 📞</span></div>
        <div><b>Email:</b> 916203866591@gmail.com</div>
        <div><b>Service Status:</b> Contacted</div>
        <div><b>Lead Created:</b> 17 Jul, 25 at 02:30 PM</div>
        <div><b>Lead Done Time:</b> 17 Jul, 25 at 03:32 PM</div>
        <div><b>Lead Done Notes:</b> Other</div>
        <div><b>Lead Done Reason:</b> Others</div>
      </div>
      <div>
        <div><b>Lead Owner:</b> The Mantra</div>
        <div><b>Phone:</b> 6203866591</div>
        <div><b>Lead Source:</b> Weddingz</div>
        <div><b>Lead Status:</b> Done</div>
        <div><b>Preferred Locality:</b> Danapur</div>
      </div>
    </div>
  </div>
);

export default LeadDetailsInfo;
