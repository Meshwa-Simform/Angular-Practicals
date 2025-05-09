import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { Note } from '../../Notes';

@Component({
  selector: 'app-form-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-note.component.html',
  styleUrl: './form-note.component.css'
})
export class FormNoteComponent implements OnInit {
  noteform: FormGroup= new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl(new Date()),
  });
  id:number = 0;
  isEditMode = false;
  noteservice = inject(NoteService);
  notelist = this.noteservice.notesList;
  router = inject(Router);
  note: Note | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')!; 
      this.note = this.notelist.find(n => n.id === this.id)!;
      if(this.id > 0){
        this.noteform.patchValue(this.note);
        this.isEditMode = true;
      }
    });
  }

  onSubmit() {
    if(this.isEditMode){
      // Update Note
      this.notelist = this.notelist.map(n => {
        if(n.id === this.id){
          return this.noteform.value;
        }
        return n;
      });
      this.noteservice.notesList = this.notelist;
      this.router.navigate(['/']);
    }
    else{
      // Add Note
      this.noteform.value.id = this.notelist.length + 1;
      this.notelist.push(this.noteform.value);
      this.router.navigate(['/']);
    }
  }

}