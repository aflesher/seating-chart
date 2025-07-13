class SeatingChart {
    constructor() {
        this.defaultGuests = [
            { id: 1, name: 'Adam', assigned: false, tableId: null, seatId: null },
            { id: 2, name: 'Rayna', assigned: false, tableId: null, seatId: null },
            { id: 3, name: 'Dan', assigned: false, tableId: null, seatId: null },
            { id: 4, name: 'Sara', assigned: false, tableId: null, seatId: null },
            { id: 5, name: 'Kristina', assigned: false, tableId: null, seatId: null },
            { id: 6, name: 'Kurt', assigned: false, tableId: null, seatId: null },
            { id: 7, name: 'Torie', assigned: false, tableId: null, seatId: null },
            { id: 8, name: 'Michele', assigned: false, tableId: null, seatId: null },
            { id: 9, name: 'Matt', assigned: false, tableId: null, seatId: null },
            { id: 10, name: 'Candace', assigned: false, tableId: null, seatId: null },
            { id: 11, name: 'Geoff', assigned: false, tableId: null, seatId: null },
            { id: 12, name: 'Jana', assigned: false, tableId: null, seatId: null },
            { id: 13, name: 'Blaise', assigned: false, tableId: null, seatId: null },
            { id: 15, name: 'Karsten', assigned: false, tableId: null, seatId: null },
            { id: 16, name: 'Alan', assigned: false, tableId: null, seatId: null },
            { id: 17, name: 'Gale', assigned: false, tableId: null, seatId: null },
            { id: 18, name: 'Stew', assigned: false, tableId: null, seatId: null },
            { id: 19, name: 'Jewels', assigned: false, tableId: null, seatId: null },
            { id: 20, name: 'Spencer', assigned: false, tableId: null, seatId: null },
            { id: 21, name: 'Anastasia', assigned: false, tableId: null, seatId: null },
            { id: 22, name: 'Lee', assigned: false, tableId: null, seatId: null },
            { id: 23, name: 'Shelley', assigned: false, tableId: null, seatId: null },
            { id: 24, name: 'Paul', assigned: false, tableId: null, seatId: null },
            { id: 25, name: 'Sherri', assigned: false, tableId: null, seatId: null },
            { id: 26, name: 'Ben', assigned: false, tableId: null, seatId: null },
            { id: 27, name: 'Shannon', assigned: false, tableId: null, seatId: null },
            { id: 28, name: 'Jason', assigned: false, tableId: null, seatId: null },
            { id: 29, name: 'Chris', assigned: false, tableId: null, seatId: null },
            { id: 30, name: 'Kathryn', assigned: false, tableId: null, seatId: null },
            { id: 31, name: 'Morgan', assigned: false, tableId: null, seatId: null },
            { id: 32, name: 'Paul R', assigned: false, tableId: null, seatId: null },
            { id: 33, name: 'Anita', assigned: false, tableId: null, seatId: null },
            { id: 34, name: 'Abigale', assigned: false, tableId: null, seatId: null },
            { id: 35, name: 'Wendy', assigned: false, tableId: null, seatId: null },
            { id: 36, name: 'Bruce', assigned: false, tableId: null, seatId: null },
            { id: 37, name: 'Silas', assigned: false, tableId: null, seatId: null },
            { id: 38, name: 'Chris', assigned: false, tableId: null, seatId: null },
            { id: 39, name: 'Carmen', assigned: false, tableId: null, seatId: null },
            { id: 40, name: 'Brady', assigned: false, tableId: null, seatId: null },
            { id: 41, name: 'Aunt Kay', assigned: false, tableId: null, seatId: null },
            { id: 42, name: 'Sofia', assigned: false, tableId: null, seatId: null },
            { id: 43, name: 'Heather', assigned: false, tableId: null, seatId: null },
            { id: 44, name: 'Felipe', assigned: false, tableId: null, seatId: null },
            { id: 45, name: 'Charlotte', assigned: false, tableId: null, seatId: null },
            { id: 46, name: 'Brandon', assigned: false, tableId: null, seatId: null },
            { id: 47, name: 'Evanne', assigned: false, tableId: null, seatId: null },
            { id: 48, name: 'Dustin', assigned: false, tableId: null, seatId: null },
            { id: 49, name: 'Amis', assigned: false, tableId: null, seatId: null },
            { id: 50, name: 'Drew', assigned: false, tableId: null, seatId: null },
            { id: 51, name: 'Maureen', assigned: false, tableId: null, seatId: null },
            { id: 52, name: 'Katie', assigned: false, tableId: null, seatId: null },
            { id: 53, name: 'Josh', assigned: false, tableId: null, seatId: null },
            { id: 54, name: 'Miranda', assigned: false, tableId: null, seatId: null },
            { id: 55, name: 'Meg', assigned: false, tableId: null, seatId: null },
            { id: 56, name: 'Jason', assigned: false, tableId: null, seatId: null },
            { id: 57, name: 'Penny', assigned: false, tableId: null, seatId: null },
            { id: 58, name: 'Sean', assigned: false, tableId: null, seatId: null },
            { id: 59, name: 'Nigel', assigned: false, tableId: null, seatId: null },
            { id: 60, name: 'Val', assigned: false, tableId: null, seatId: null },
            { id: 61, name: 'Sacha HC', assigned: false, tableId: null, seatId: null },
            { id: 62, name: 'Jim', assigned: false, tableId: null, seatId: null },
            { id: 63, name: 'Penny', assigned: false, tableId: null, seatId: null },
            { id: 64, name: 'Nicky A', assigned: false, tableId: null, seatId: null },
            { id: 65, name: 'Lainger', assigned: false, tableId: null, seatId: null },
            { id: 66, name: 'Meghan N', assigned: false, tableId: null, seatId: null },
            { id: 67, name: 'Elaine I', assigned: false, tableId: null, seatId: null },
            { id: 68, name: 'Indiana', assigned: false, tableId: null, seatId: null },
            { id: 69, name: 'Book', assigned: false, tableId: null, seatId: null },
            { id: 70, name: 'Sarah H', assigned: false, tableId: null, seatId: null },
            { id: 71, name: 'Thomas', assigned: false, tableId: null, seatId: null },
            { id: 72, name: 'Danielle', assigned: false, tableId: null, seatId: null },
            { id: 73, name: 'Emily W (DOC)', assigned: false, tableId: null, seatId: null },
            { id: 74, name: 'Alanna P', assigned: false, tableId: null, seatId: null },
            { id: 75, name: 'Emily Young', assigned: false, tableId: null, seatId: null },
            { id: 76, name: 'Marie-Louise', assigned: false, tableId: null, seatId: null },
            { id: 77, name: 'Keith', assigned: false, tableId: null, seatId: null },
            { id: 78, name: 'Nancy', assigned: false, tableId: null, seatId: null },
            { id: 79, name: 'Lance', assigned: false, tableId: null, seatId: null },
            { id: 80, name: 'Bonnie', assigned: false, tableId: null, seatId: null },
            { id: 81, name: 'Bruce', assigned: false, tableId: null, seatId: null },
            { id: 82, name: 'Natalie', assigned: false, tableId: null, seatId: null },
            { id: 83, name: 'Patrick', assigned: false, tableId: null, seatId: null },
            { id: 84, name: 'Raychel', assigned: false, tableId: null, seatId: null }
        ];
        
        this.guests = [];
        this.selectedGuestId = null;
        this.tables = [];
        
        // JSONBin.io storage - public bin for wedding seating chart
        this.binId = null;
        this.apiKey = '$2a$10$iMTgmzcD0hBxDfLyAuX3UOjsv/F8CmRN43tqLjAx9XAyijQxiYMDa'; // Master key provided by user
        this.apiUrl = null;
        
        this.init();
        this.attachControlListeners();
    }
    
    async init() {
        this.createTables();
        await this.loadState();
        this.renderTables();
        this.renderGuestList();
        this.attachGlobalListeners();
    }
    
    createTables() {
        // Create head table first
        const headTable = {
            id: 0,
            isHeadTable: true,
            seats: []
        };
        
        for (let j = 1; j <= 10; j++) {
            headTable.seats.push({
                id: j,
                guestId: null,
                occupied: false
            });
        }
        
        this.tables.push(headTable);
        
        // Create regular tables
        for (let i = 1; i <= 12; i++) {
            const table = {
                id: i,
                isHeadTable: false,
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
        
        // Render head table first
        const headTable = this.tables.find(table => table.isHeadTable);
        if (headTable) {
            const headTableElement = document.createElement('div');
            headTableElement.className = 'head-table';
            headTableElement.innerHTML = `
                <div class="table-number">Head Table</div>
                <div class="head-table-seats">
                    ${headTable.seats.map(seat => `
                        <div class="seat ${seat.occupied ? 'occupied' : ''}" data-table-id="${headTable.id}" data-seat-id="${seat.id}">
                            ${seat.occupied ? `<span class="seat-name">${this.getGuestFirstName(seat.guestId)}</span>` : ''}
                            ${seat.occupied ? '<span class="remove-guest">×</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            `;
            tablesGrid.appendChild(headTableElement);
        }
        
        // Create container for regular tables
        const regularTablesContainer = document.createElement('div');
        regularTablesContainer.className = 'regular-tables';
        
        // Render regular tables
        this.tables.filter(table => !table.isHeadTable).forEach(table => {
            const tableElement = document.createElement('div');
            tableElement.className = 'table';
            tableElement.innerHTML = `
                <div class="table-number">Table ${table.id}</div>
                <div class="table-seats">
                    ${table.seats.map(seat => `
                        <div class="seat ${seat.occupied ? 'occupied' : ''}" data-table-id="${table.id}" data-seat-id="${seat.id}">
                            ${seat.occupied ? `<span class="seat-name">${this.getGuestFirstName(seat.guestId)}</span>` : ''}
                            ${seat.occupied ? '<span class="remove-guest">×</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            `;
            regularTablesContainer.appendChild(tableElement);
        });
        
        tablesGrid.appendChild(regularTablesContainer);
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
                <div class="guest-info-container">
                    <div class="guest-name">${guest.name}</div>
                    ${guest.assigned ? `<div class="guest-info">Table ${guest.tableId}, Seat ${guest.seatId}</div>` : ''}
                </div>
                ${!guest.assigned ? '<button class="remove-guest-btn" title="Remove guest">×</button>' : ''}
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
        
        // Attach remove button listeners
        document.querySelectorAll('.remove-guest-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const guestItem = e.target.closest('.guest-item');
                const guestId = parseInt(guestItem.dataset.guestId);
                this.removeGuest(guestId);
            });
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
        
        // Check if we have a binId stored locally
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
            if (guest.assigned && guest.tableId !== null && guest.seatId !== null) {
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
    
    attachControlListeners() {
        const addButton = document.getElementById('addGuestBtn');
        const input = document.getElementById('newGuestName');
        const printButton = document.getElementById('printBtn');
        
        addButton.addEventListener('click', () => {
            const name = input.value.trim();
            if (name) {
                this.addGuest(name);
                input.value = '';
            }
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const name = input.value.trim();
                if (name) {
                    this.addGuest(name);
                    input.value = '';
                }
            }
        });
        
        printButton.addEventListener('click', () => {
            window.print();
        });
    }
    
    addGuest(name) {
        // Find the highest ID to generate a new one
        const maxId = Math.max(...this.guests.map(g => g.id), 0);
        const newGuest = {
            id: maxId + 1,
            name: name,
            assigned: false,
            tableId: null,
            seatId: null
        };
        
        this.guests.push(newGuest);
        this.renderGuestList();
        this.saveState();
    }
    
    removeGuest(guestId) {
        const guestIndex = this.guests.findIndex(g => g.id === guestId);
        if (guestIndex !== -1) {
            const guest = this.guests[guestIndex];
            
            // If guest is assigned to a seat, remove them from it first
            if (guest.assigned) {
                this.removeGuestFromSeat(guest.tableId, guest.seatId);
            }
            
            // Remove guest from the list
            this.guests.splice(guestIndex, 1);
            this.renderGuestList();
            this.saveState();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SeatingChart();
});