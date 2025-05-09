import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './Notes';
import { NoteService } from './services/note.service';
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes_list_app';
  notesList : Note[] = Inject(NoteService).notesList;
  
}
