document.addEventListener('DOMContentLoaded', () => {
    // Tab switching logic for the sidebar
    const navItems = document.querySelectorAll('.nav-item');
    
    function switchView(tabId) {
        // Remove active class from all nav items
        navItems.forEach(nav => {
            if (nav.getAttribute('data-tab') === tabId) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
            }
        });
        
        const allViews = document.querySelectorAll('.view-section');
        allViews.forEach(view => {
            view.classList.remove('active-view');
        });
        
        const targetView = document.getElementById(`view-${tabId}`);
        if(targetView) {
            targetView.classList.add('active-view');
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(item.getAttribute('data-tab'));
        });
    });

    // Add click event for children section elements in dashboard
    const dashboardChildrenCards = document.querySelectorAll('.children-section .child-card');
    const viewAllChildrenBtn = document.querySelector('.children-section .btn-text');

    if (viewAllChildrenBtn) {
        viewAllChildrenBtn.addEventListener('click', () => {
            switchView('children');
        });
    }

    dashboardChildrenCards.forEach(card => {
        card.addEventListener('click', () => {
            switchView('children');
        });
    });

    // Upload Modal Logic
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadModal = document.getElementById('uploadModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');

    // Open Modal
    uploadBtn.addEventListener('click', () => {
        uploadModal.classList.remove('hidden');
    });

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
        uploadModal.classList.add('hidden');
    });

    // Close when clicking outside content
    uploadModal.addEventListener('click', (e) => {
        if (e.target === uploadModal) {
            uploadModal.classList.add('hidden');
        }
    });

    // Drag and Drop Visuals
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.classList.add('drag-active');
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, () => {
            dropzone.classList.remove('drag-active');
        }, false);
    });

    // Handle Drop
    dropzone.addEventListener('drop', (e) => {
        let dt = e.dataTransfer;
        let files = dt.files;
        handleFiles(files);
    });

    // Handle standard browser file selection
    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if (files.length > 0) {
            // Mocking a successful upload reaction
            const file = files[0];
            dropzone.innerHTML = `
                <i class="fa-solid fa-circle-check" style="font-size: 48px; color: #10b981;"></i>
                <h3>${file.name} Uploaded Successfully!</h3>
                <p>AI is now scanning and categorizing your document.</p>
                <button class="btn-primary" style="margin-top: 10px;" id="uploadAnother">Upload Another</button>
            `;

            document.getElementById('uploadAnother').addEventListener('click', (e) => {
                e.stopPropagation(); // prevent clicking dropzone
                // reset UI
                dropzone.innerHTML = `
                    <i class="fa-solid fa-cloud-arrow-up drop-icon"></i>
                    <h3>Drag & Drop files here</h3>
                    <p>or click to browse PDFs, JPGs, or PNGs</p>
                    <input type="file" id="fileInput" hidden multiple>
                    <button class="btn-secondary" onclick="document.getElementById('fileInput').click()">Browse Files</button>
                `;
            });
        }
    }
});
