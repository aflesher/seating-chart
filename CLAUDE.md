# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a wedding seating chart application built with vanilla JavaScript, HTML, and CSS. It allows users to manage guest seating arrangements for 12 tables with 8 seats each.

## Development Commands

This is a static site with no build process:
- **Run locally**: Open `index.html` directly in a web browser
- **Test changes**: Refresh the browser after editing files
- **Deploy**: Push to GitHub and enable GitHub Pages for the repository

## Architecture & Key Components

### Core Files
- `index.html` - Main application structure with table layout and guest list
- `script.js` - All application logic including:
  - Guest assignment/unassignment functionality (lines 33-71)
  - JSONBin.io integration for data persistence (lines 73-123)
  - UI state management and event handlers
- `styles.css` - Responsive styling with mobile-first approach

### Data Flow
1. Guest data is hardcoded in `script.js` (lines 1-15)
2. Seating assignments are stored in a `seatingArrangements` object
3. Data persists to JSONBin.io using their REST API
4. API credentials are stored directly in the code (lines 74-75)

### Key Functions
- `assignGuestToSeat()` - Handles guest-to-seat assignment logic
- `saveToJSONBin()` - Persists data to cloud storage
- `loadFromJSONBin()` - Retrieves saved seating arrangements
- `updateUI()` - Refreshes the visual state of seats and guest list

## Important Implementation Details

1. **No Build Process**: Edit files directly and refresh browser
2. **API Integration**: JSONBin.io API key and bin ID are hardcoded in script.js
3. **Event Handling**: Click events on seats and guest list items
4. **Responsive Design**: CSS breakpoint at 480px for mobile layout
5. **State Management**: Single source of truth in `seatingArrangements` object

## Common Tasks

- **Add a new guest**: Add to the `guests` array in script.js
- **Change table layout**: Modify table count/seats in HTML and update script.js accordingly
- **Test save functionality**: Click "Save Seating Chart" and check browser console for API response
- **Debug issues**: Use browser DevTools console to inspect state and API calls