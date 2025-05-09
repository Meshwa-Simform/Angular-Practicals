# Notes List Application

A simple and intuitive notes management application built with Angular that allows users to create, read, update, and delete notes.

## Features

- Create new notes with title and description
- View list of all notes
- View detailed information of individual notes
- Edit existing notes
- Delete notes (marked as "Deleted" instead of permanent removal)
- Visual representation of notes based on their status:
  - **NEW**: Green background
  - **UPDATED**: Orange background
  - **DELETED**: Red background
  - **STATIC**: White background

## Note Statuses

Each note has a status that determines its current state:
- **NEW**: Newly created notes
- **UPDATED**: Notes that have been edited
- **DELETED**: Notes marked for deletion
- **STATIC**: Default status for notes

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

## Styling

The application uses CSS to visually distinguish notes based on their status. The styles are defined in the respective component CSS files.
