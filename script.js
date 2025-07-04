class SeatingChart {
    constructor() {
        this.defaultGuests = [
            { id: 1, name: 'John Smith', assigned: false, tableId: null, seatId: null },
            { id: 2, name: 'Sarah Johnson', assigned: false, tableId: null, seatId: null },
            { id: 3, name: 'Mike Davis', assigned: false, tableId: null, seatId: null },
            { id: 4, name: 'Emily Wilson', assigned: false, tableId: null, seatId: null },
            { id: 5, name: 'David Brown', assigned: false, tableId: null, seatId: null },
            { id: 6, name: 'Lisa Garcia', assigned: false, tableId: null, seatId: null },
            { id: 7, name: 'Robert Miller', assigned: false, tableId: null, seatId: null },
            { id: 8, name: 'Jennifer Taylor', assigned: false, tableId: null, seatId: null },
            { id: 9, name: 'Christopher Lee', assigned: false, tableId: null, seatId: null },
            { id: 10, name: 'Amanda White', assigned: false, tableId: null, seatId: null },
            { id: 11, name: 'Matthew Harris', assigned: false, tableId: null, seatId: null },
            { id: 12, name: 'Jessica Clark', assigned: false, tableId: null, seatId: null },
            { id: 13, name: 'Daniel Lewis', assigned: false, tableId: null, seatId: null },
            { id: 14, name: 'Ashley Robinson', assigned: false, tableId: null, seatId: null },
            { id: 15, name: 'Kevin Walker', assigned: false, tableId: null, seatId: null },
            { id: 16, name: 'Stephanie Hall', assigned: false, tableId: null, seatId: null },
            { id: 17, name: 'James Young', assigned: false, tableId: null, seatId: null },
            { id: 18, name: 'Michelle King', assigned: false, tableId: null, seatId: null },
            { id: 19, name: 'Ryan Scott', assigned: false, tableId: null, seatId: null },
            { id: 20, name: 'Nicole Green', assigned: false, tableId: null, seatId: null }
        ];
        
        this.guests = [];
        this.selectedGuestId = null;
        this.tables = [];
        
        // JSONBin.io storage - public bin for wedding seating chart
        this.binId = null;
        this.apiKey = '$2a$10$iMTgmzcD0hBxDfLyAuX3UOjsv/F8CmRN43tqLjAx9XAyijQxiYMDa'; // Master key provided by user
        this.apiUrl = null;
        
        this.init();
    }
    
    async init() {
        this.createTables();
        await this.loadState();
        this.renderTables();
        this.renderGuestList();
        this.attachGlobalListeners();
    }
    
    createTables() {
        for (let i = 1; i <= 12; i++) {
            const table = {
                id: i,
                seats: []
            };
            
            for (let j = 1; j <= 8; j++) {
                table.seats.push({
                    id: j,
                    guestId: null,
                    occupied: false
                });
            }
            
            this.tables.push(table);
        }
    }
    
    renderTables() {
        const tablesGrid = document.querySelector('.tables-grid');
        tablesGrid.innerHTML = '';
        
        this.tables.forEach(table => {
            const tableElement = document.createElement('div');
            tableElement.className = 'table';
            tableElement.innerHTML = `
                <div class="table-number">Table ${table.id}</div>
                <div class="table-seats">
                    ${table.seats.map(seat => `
                        <div class="seat ${seat.occupied ? 'occupied' : ''}" data-table-id="${table.id}" data-seat-id="${seat.id}">
                            ${seat.occupied ? this.getGuestFirstName(seat.guestId) : ''}
                            ${seat.occupied ? '<span class="remove-guest">×</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            `;
            
            tablesGrid.appendChild(tableElement);
        });
        
        this.attachSeatListeners();
    }
    
    renderGuestList() {
        const guestList = document.querySelector('.guest-list');
        guestList.innerHTML = '';
        
        this.guests.forEach(guest => {
            const guestElement = document.createElement('div');
            guestElement.className = `guest-item ${guest.assigned ? 'assigned' : ''}`;
            guestElement.dataset.guestId = guest.id;
            
            guestElement.innerHTML = `
                <div class="guest-name">${guest.name}</div>
                ${guest.assigned ? `<div class="guest-info">Table ${guest.tableId}, Seat ${guest.seatId}</div>` : ''}
            `;
            
            if (!guest.assigned) {
                guestElement.addEventListener('click', () => this.selectGuest(guest.id));
            } else {
                // Add hover listeners for assigned guests
                guestElement.addEventListener('mouseenter', () => this.highlightSeat(guest.tableId, guest.seatId));
                guestElement.addEventListener('mouseleave', () => this.unhighlightSeat(guest.tableId, guest.seatId));
            }
            
            guestList.appendChild(guestElement);
        });
    }
    
    selectGuest(guestId) {
        if (this.selectedGuestId === guestId) {
            // If clicking the same guest, unselect them
            this.unselectGuest();
        } else {
            // Select the new guest
            this.selectedGuestId = guestId;
            
            document.querySelectorAll('.guest-item').forEach(item => {
                item.classList.remove('selected');
            });
            
            const selectedElement = document.querySelector(`[data-guest-id="${guestId}"]`);
            if (selectedElement) {
                selectedElement.classList.add('selected');
            }
        }
    }
    
    attachSeatListeners() {
        document.querySelectorAll('.seat').forEach(seat => {
            seat.addEventListener('click', (e) => {
                const tableId = parseInt(e.target.dataset.tableId);
                const seatId = parseInt(e.target.dataset.seatId);
                
                if (e.target.classList.contains('remove-guest')) {
                    return;
                }
                
                if (this.selectedGuestId && !seat.classList.contains('occupied')) {
                    this.assignGuestToSeat(this.selectedGuestId, tableId, seatId);
                }
            });
            
            // Add hover listeners for occupied seats
            seat.addEventListener('mouseenter', (e) => {
                if (seat.classList.contains('occupied')) {
                    const tableId = parseInt(e.target.dataset.tableId);
                    const seatId = parseInt(e.target.dataset.seatId);
                    this.highlightGuest(tableId, seatId);
                }
            });
            
            seat.addEventListener('mouseleave', (e) => {
                if (seat.classList.contains('occupied')) {
                    const tableId = parseInt(e.target.dataset.tableId);
                    const seatId = parseInt(e.target.dataset.seatId);
                    this.unhighlightGuest(tableId, seatId);
                }
            });
        });
        
        document.querySelectorAll('.remove-guest').forEach(removeBtn => {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const seat = e.target.closest('.seat');
                const tableId = parseInt(seat.dataset.tableId);
                const seatId = parseInt(seat.dataset.seatId);
                
                this.removeGuestFromSeat(tableId, seatId);
            });
        });
    }
    
    assignGuestToSeat(guestId, tableId, seatId) {
        const guest = this.guests.find(g => g.id === guestId);
        const table = this.tables.find(t => t.id === tableId);
        const seat = table.seats.find(s => s.id === seatId);
        
        if (guest && !guest.assigned && !seat.occupied) {
            guest.assigned = true;
            guest.tableId = tableId;
            guest.seatId = seatId;
            
            seat.occupied = true;
            seat.guestId = guestId;
            
            this.selectedGuestId = null;
            this.renderTables();
            this.renderGuestList();
            this.saveState();
        }
    }
    
    removeGuestFromSeat(tableId, seatId) {
        const table = this.tables.find(t => t.id === tableId);
        const seat = table.seats.find(s => s.id === seatId);
        
        if (seat.occupied) {
            const guest = this.guests.find(g => g.id === seat.guestId);
            
            if (guest) {
                guest.assigned = false;
                guest.tableId = null;
                guest.seatId = null;
            }
            
            seat.occupied = false;
            seat.guestId = null;
            
            this.renderTables();
            this.renderGuestList();
            this.saveState();
        }
    }
    
    getGuestFirstName(guestId) {
        const guest = this.guests.find(g => g.id === guestId);
        if (guest) {
            return guest.name.split(' ')[0];
        }
        return '';
    }
    
    attachGlobalListeners() {
        document.addEventListener('click', (e) => {
            // Check if the click is on a seat or guest item
            if (!e.target.closest('.seat') && !e.target.closest('.guest-item')) {
                this.unselectGuest();
            }
        });
    }
    
    unselectGuest() {
        this.selectedGuestId = null;
        document.querySelectorAll('.guest-item').forEach(item => {
            item.classList.remove('selected');
        });
    }
    
    highlightSeat(tableId, seatId) {
        const seat = document.querySelector(`[data-table-id="${tableId}"][data-seat-id="${seatId}"]`);
        if (seat) {
            seat.classList.add('highlight');
        }
    }
    
    unhighlightSeat(tableId, seatId) {
        const seat = document.querySelector(`[data-table-id="${tableId}"][data-seat-id="${seatId}"]`);
        if (seat) {
            seat.classList.remove('highlight');
        }
    }
    
    highlightGuest(tableId, seatId) {
        const guest = this.guests.find(g => g.tableId === tableId && g.seatId === seatId);
        if (guest) {
            const guestElement = document.querySelector(`[data-guest-id="${guest.id}"]`);
            if (guestElement) {
                guestElement.classList.add('highlight');
            }
        }
    }
    
    unhighlightGuest(tableId, seatId) {
        const guest = this.guests.find(g => g.tableId === tableId && g.seatId === seatId);
        if (guest) {
            const guestElement = document.querySelector(`[data-guest-id="${guest.id}"]`);
            if (guestElement) {
                guestElement.classList.remove('highlight');
            }
        }
    }
    
    async loadState() {
        this.updateSaveStatus('Loading...', 'loading');
        
        // First check if we have a binId stored locally
        const storedBinId = localStorage.getItem('seatingChart_binId');
        if (storedBinId) {
            this.binId = storedBinId;
            this.apiUrl = `https://api.jsonbin.io/v3/b/${this.binId}`;
            
            try {
                const response = await fetch(this.apiUrl, {
                    headers: {
                        'X-Master-Key': this.apiKey
                    }
                });
                const data = await response.json();
                
                if (data.record && data.record.guests) {
                    this.guests = data.record.guests;
                    this.updateTablesFromGuests();
                    this.updateSaveStatus('Loaded from cloud', 'saved');
                    return;
                }
            } catch (error) {
                console.log('Could not load from existing bin, creating new one');
            }
        }
        
        // If no stored bin or loading failed, create a new bin
        await this.createNewBin();
    }
    
    async createNewBin() {
        try {
            this.updateSaveStatus('Creating new storage...', 'saving');
            
            const initialData = {
                guests: [...this.defaultGuests],
                lastUpdated: new Date().toISOString()
            };
            
            const response = await fetch('https://api.jsonbin.io/v3/b', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': this.apiKey
                },
                body: JSON.stringify(initialData)
            });
            
            const data = await response.json();
            
            if (data.record && data.metadata && data.metadata.id) {
                this.binId = data.metadata.id;
                this.apiUrl = `https://api.jsonbin.io/v3/b/${this.binId}`;
                localStorage.setItem('seatingChart_binId', this.binId);
                
                this.guests = [...this.defaultGuests];
                this.updateSaveStatus('Cloud storage ready', 'saved');
                
                console.log('New bin created with ID:', this.binId);
            } else {
                throw new Error('Failed to create bin');
            }
        } catch (error) {
            console.error('Failed to create new bin:', error);
            this.guests = [...this.defaultGuests];
            this.updateSaveStatus('Offline mode', 'error');
        }
    }
    
    async saveState() {
        if (!this.binId || !this.apiUrl) {
            console.log('No bin available for saving');
            return;
        }
        
        this.updateSaveStatus('Saving...', 'saving');
        try {
            const stateData = {
                guests: this.guests,
                lastUpdated: new Date().toISOString()
            };
            
            await fetch(this.apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': this.apiKey
                },
                body: JSON.stringify(stateData)
            });
            
            this.updateSaveStatus('Saved to cloud', 'saved');
            setTimeout(() => this.updateSaveStatus('', ''), 2000); // Clear after 2 seconds
        } catch (error) {
            console.error('Failed to save state:', error);
            this.updateSaveStatus('Save failed', 'error');
            setTimeout(() => this.updateSaveStatus('', ''), 3000); // Clear after 3 seconds
        }
    }
    
    updateTablesFromGuests() {
        // Reset all seats
        this.tables.forEach(table => {
            table.seats.forEach(seat => {
                seat.occupied = false;
                seat.guestId = null;
            });
        });
        
        // Update seats based on guest assignments
        this.guests.forEach(guest => {
            if (guest.assigned && guest.tableId && guest.seatId) {
                const table = this.tables.find(t => t.id === guest.tableId);
                if (table) {
                    const seat = table.seats.find(s => s.id === guest.seatId);
                    if (seat) {
                        seat.occupied = true;
                        seat.guestId = guest.id;
                    }
                }
            }
        });
    }
    
    updateSaveStatus(message, status) {
        const statusElement = document.getElementById('saveStatus');
        if (statusElement) {
            statusElement.textContent = message;
            statusElement.className = `save-status ${status}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SeatingChart();
});