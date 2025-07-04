class SeatingChart {
    constructor() {
        this.guests = [
            { id: 1, name: 'John Smith', info: 'Bride\'s friend', assigned: false, tableId: null, seatId: null },
            { id: 2, name: 'Sarah Johnson', info: 'Groom\'s sister', assigned: false, tableId: null, seatId: null },
            { id: 3, name: 'Mike Davis', info: 'College friend', assigned: false, tableId: null, seatId: null },
            { id: 4, name: 'Emily Wilson', info: 'Work colleague', assigned: false, tableId: null, seatId: null },
            { id: 5, name: 'David Brown', info: 'Cousin', assigned: false, tableId: null, seatId: null },
            { id: 6, name: 'Lisa Garcia', info: 'High school friend', assigned: false, tableId: null, seatId: null },
            { id: 7, name: 'Robert Miller', info: 'Neighbor', assigned: false, tableId: null, seatId: null },
            { id: 8, name: 'Jennifer Taylor', info: 'Bride\'s cousin', assigned: false, tableId: null, seatId: null },
            { id: 9, name: 'Christopher Lee', info: 'Groom\'s friend', assigned: false, tableId: null, seatId: null },
            { id: 10, name: 'Amanda White', info: 'Sorority sister', assigned: false, tableId: null, seatId: null },
            { id: 11, name: 'Matthew Harris', info: 'Best man', assigned: false, tableId: null, seatId: null },
            { id: 12, name: 'Jessica Clark', info: 'Maid of honor', assigned: false, tableId: null, seatId: null },
            { id: 13, name: 'Daniel Lewis', info: 'Groomsman', assigned: false, tableId: null, seatId: null },
            { id: 14, name: 'Ashley Robinson', info: 'Bridesmaid', assigned: false, tableId: null, seatId: null },
            { id: 15, name: 'Kevin Walker', info: 'Groomsman', assigned: false, tableId: null, seatId: null },
            { id: 16, name: 'Stephanie Hall', info: 'Bridesmaid', assigned: false, tableId: null, seatId: null },
            { id: 17, name: 'James Young', info: 'Uncle', assigned: false, tableId: null, seatId: null },
            { id: 18, name: 'Michelle King', info: 'Aunt', assigned: false, tableId: null, seatId: null },
            { id: 19, name: 'Ryan Scott', info: 'Cousin', assigned: false, tableId: null, seatId: null },
            { id: 20, name: 'Nicole Green', info: 'Family friend', assigned: false, tableId: null, seatId: null }
        ];
        
        this.selectedGuestId = null;
        this.tables = [];
        
        this.init();
    }
    
    init() {
        this.createTables();
        this.renderTables();
        this.renderGuestList();
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
                        <div class="seat" data-table-id="${table.id}" data-seat-id="${seat.id}">
                            ${seat.occupied ? this.getGuestInitials(seat.guestId) : ''}
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
                <div class="guest-info">${guest.info}</div>
                ${guest.assigned ? `<div class="guest-info">Table ${guest.tableId}, Seat ${guest.seatId}</div>` : ''}
            `;
            
            if (!guest.assigned) {
                guestElement.addEventListener('click', () => this.selectGuest(guest.id));
            }
            
            guestList.appendChild(guestElement);
        });
    }
    
    selectGuest(guestId) {
        this.selectedGuestId = guestId;
        
        document.querySelectorAll('.guest-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        const selectedElement = document.querySelector(`[data-guest-id="${guestId}"]`);
        if (selectedElement) {
            selectedElement.classList.add('selected');
        }
    }
    
    attachSeatListeners() {
        document.querySelectorAll('.seat').forEach(seat => {
            seat.addEventListener('click', (e) => {
                const tableId = parseInt(e.target.dataset.tableId);
                const seatId = parseInt(e.target.dataset.seatId);
                
                if (e.target.classList.contains('remove-guest') || e.target.parentElement.querySelector('.remove-guest')) {
                    return;
                }
                
                if (this.selectedGuestId && !seat.classList.contains('occupied')) {
                    this.assignGuestToSeat(this.selectedGuestId, tableId, seatId);
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
        }
    }
    
    getGuestInitials(guestId) {
        const guest = this.guests.find(g => g.id === guestId);
        if (guest) {
            return guest.name.split(' ').map(n => n[0]).join('');
        }
        return '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SeatingChart();
});