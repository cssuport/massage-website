// Announcements functionality
document.addEventListener('DOMContentLoaded', function() {
    const announcementIcon = document.querySelector('.announcement-icon');
    const notificationBadge = document.querySelector('.notification-badge');
    
    // Sample announcements data - in a real app, this would come from a server
    const announcements = [
        {
            title: "Cuti Operasi",
            content: "Kami akan cuti beroperasi pada 21 Julai 2025",
            date: "20 Julai 2025",
            isNew: true
        },
        {
            title: "Waktu Operasi",
            content: "Kami kini beroperasi dari jam 9:00 pagi hingga 6:00 malam setiap Isnin hingga Sabtu.",
            date: "1 Julai 2025"
        },
        {
            title: "Diskaun RM10 hari ini",
            content: "Dapatkan diskaun RM10 untuk menjadi membership kami.",
            date: "15 Julai 2025"
        }
    ];

    // Check if there are new announcements
    const hasNewAnnouncements = announcements.some(announcement => announcement.isNew);
    
    if (hasNewAnnouncements) {
        notificationBadge.style.display = 'block';
    }

    // Create and show modal with announcements
    function showAnnouncements() {
        // Check if modal already exists
        const existingModal = document.getElementById('announcements-modal');
        if (existingModal) {
            existingModal.style.display = 'flex';
            // Move focus to the modal
            existingModal.querySelector('[tabindex="0"]').focus();
            return;
        }

        // Create modal element
        const modal = document.createElement('div');
        modal.id = 'announcements-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'announcements-title');
        modal.setAttribute('tabindex', '-1');
        modal.style.cssText = `
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            justify-content: center;
            align-items: center;
            z-index: 2000;
            padding: 20px;
            overflow-y: auto;
        `;

        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.setAttribute('role', 'document');
        modalContent.style.cssText = `
            background-color: white;
            border-radius: 10px;
            max-width: 500px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            padding: 25px;
            position: relative;
        `;

        // Add close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.setAttribute('aria-label', 'Tutup Pengumuman');
        closeButton.setAttribute('type', 'button');
        closeButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 24px;
            background: none;
            border: none;
            cursor: pointer;
            color: #666;
        `;
        closeButton.onclick = function() {
            modal.style.display = 'none';
            // Return focus to the announcement button
            document.querySelector('.announcement-icon').focus();
        };
        closeButton.onkeydown = function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        };

        // Add title
        const title = document.createElement('h2');
        title.id = 'announcements-title';
        title.textContent = 'Pengumuman';
        title.style.cssText = `
            color: var(--primary-color);
            margin-bottom: 20px;
            text-align: center;
        `;

        // Add announcements list
        const announcementsList = document.createElement('div');
        announcementsList.style.marginTop = '20px';

        announcements.forEach(announcement => {
            const announcementElement = document.createElement('div');
            announcementElement.style.cssText = `
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #eee;
            `;
            
            if (announcement.isNew) {
                const newBadge = document.createElement('span');
                newBadge.textContent = 'BARU';
                newBadge.style.cssText = `
                    background-color: #ff4444;
                    color: white;
                    font-size: 0.7rem;
                    padding: 2px 6px;
                    border-radius: 3px;
                    margin-left: 10px;
                    font-weight: bold;
                `;
                
                const titleElement = document.createElement('h3');
                titleElement.style.margin = '10px 0';
                titleElement.textContent = announcement.title;
                titleElement.appendChild(newBadge);
                announcementElement.appendChild(titleElement);
            } else {
                const titleElement = document.createElement('h3');
                titleElement.style.margin = '10px 0';
                titleElement.textContent = announcement.title;
                announcementElement.appendChild(titleElement);
            }
            
            const dateElement = document.createElement('div');
            dateElement.textContent = announcement.date;
            dateElement.style.cssText = `
                font-size: 0.8rem;
                color: #666;
                margin-bottom: 5px;
            `;
            
            const contentElement = document.createElement('p');
            contentElement.textContent = announcement.content;
            contentElement.style.margin = '5px 0 0 0';
            
            announcementElement.appendChild(dateElement);
            announcementElement.appendChild(contentElement);
            announcementsList.appendChild(announcementElement);
        });

        // Assemble modal
        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        modalContent.appendChild(announcementsList);
        modal.appendChild(modalContent);
        
        // Add modal to body
        document.body.appendChild(modal);
        
        // Hide notification badge after viewing
        notificationBadge.style.display = 'none';
        
        // Close modal when clicking outside content
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                // Return focus to the announcement button
                document.querySelector('.announcement-icon').focus();
            }
        };

        // Add keyboard navigation
        modal.onkeydown = function(e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                modal.style.display = 'none';
                // Return focus to the announcement button
                document.querySelector('.announcement-icon').focus();
            }
        };

        // Trap focus inside the modal
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        modalContent.onkeydown = function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstFocusableElement) {
                        e.preventDefault();
                        lastFocusableElement.focus();
                    }
                } else { // Tab
                    if (document.activeElement === lastFocusableElement) {
                        e.preventDefault();
                        firstFocusableElement.focus();
                    }
                }
            }
        };

        // Move focus to the first focusable element
        firstFocusableElement.focus();
    }

    // Add click event to announcement icon
    announcementIcon.addEventListener('click', showAnnouncements);
});
