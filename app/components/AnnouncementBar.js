'use client';

import { useState } from 'react';
import { FileText, Calendar, X, Bell } from 'lucide-react';

export default function AnnouncementBar() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="utility-bar">
            <div className="container">
                <div className="utility-inner">
                    <div className="utility-announcements">
                        <div className="utility-item">
                            <Bell size={14} className="utility-bell" />
                            <span className="utility-tag">Notice</span>
                            <a href="https://upperamenfirb.com/wp-content/uploads/2025/08/DORMANT-ACCOUNT.pdf" target="_blank" rel="noopener noreferrer" className="utility-link">
                                <FileText size={14} />
                                View Dormant Accounts List
                            </a>
                        </div>
                        <div className="utility-divider" />
                        <div className="utility-item">
                            <span className="utility-tag">Event</span>
                            <a href="https://upperamenfirb.com/wp-content/uploads/2025/11/upper-amenfi-agm-2025.-huhcdr-9.pdf" target="_blank" rel="noopener noreferrer" className="utility-link">
                                <Calendar size={14} />
                                35th Annual General Meeting
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => setVisible(false)} className="utility-close" aria-label="Close">
                <X size={16} />
            </button>
        </div>
    );
}
