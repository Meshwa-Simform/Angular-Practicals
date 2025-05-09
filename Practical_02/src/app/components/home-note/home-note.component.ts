import { Component, inject } from '@angular/core';
import { Note } from '../../Notes';
import { NoteService } from '../../services/note.service';
import { RouterLink , Router} from '@angular/router';

@Component({
  selector: 'app-home-note',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-note.component.html',
  styleUrl: './home-note.component.css'
})
export class HomeNoteComponent {
  noteService = inject(NoteService);
  router = inject(Router);
  notelist: Note[] = this.noteService.notesList;
  deleteNote(note: Note) : void{
    this.noteService.deleteNote(note);
    this.notelist = this.noteService.notesList;
    // Redirect to home page after deleting note
    this.router.navigate(['/']);
  }
}
