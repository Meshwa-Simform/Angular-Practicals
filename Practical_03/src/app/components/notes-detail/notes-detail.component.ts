import { Component, inject, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../Notes';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-notes-detail',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './notes-detail.component.html',
  styleUrl: './notes-detail.component.css'
})
export class NotesDetailComponent implements OnInit {
  noteService = inject(NoteService);
  id: number | null = null;
  note : Note | null = null;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!; 

      this.note = this.noteService.notesList.find(n => n.id === this.id)!;
      if (!this.note) {
        console.log('Note not found for id:', this.id);
      }
    });
  }
  router = inject(Router);
  notelist: Note[] = this.noteService.notesList;
  deleteNote(note: Note) : void{
    this.noteService.deleteNote(note);
    this.notelist = this.noteService.notesList;
    // Redirect to home page after deleting note
    this.router.navigate(['/']);
  }
}
