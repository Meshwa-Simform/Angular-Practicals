import { inject, Injectable } from '@angular/core';
import { Note } from '../Notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notesList : Note[] = [
    {
      "id": 1,
      "title": "Meeting with Client",
      "description": "Discuss project requirements and deadlines.",
      "date": new Date("2025-march-06")
    },
    {
      "id": 2,
      "title": "Grocery Shopping",
      "description": "Buy vegetables, fruits, and milk.",
      "date": new Date("2025-march-07")
    },
    {
      "id": 3,
      "title": "Doctor's Appointment",
      "description": "Annual check-up with Dr. Smith.",
      "date": new Date("2025-march-08")
    },
    {
      "id": 4,
      "title": "Team Meeting",
      "description": "Discuss project updates and team progress.",
      "date": new Date("2025-march-09")
    },
    {
      "id": 5,
      "title": "Travel Plans",
      "description": "Book flight tickets and hotel for vacation.",
      "date": new Date("2025-march-10")
    }
  ]
  constructor() { }
  deleteNote(note: Note) {
    if(confirm("Are you sure you want to delete?")){
      this.notesList = this.notesList.filter(n => n.id !== note.id);
    }
  };
}
