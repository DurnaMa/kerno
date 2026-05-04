import { Component } from '@angular/core';
import { NoteListComponent } from './features/notes/note-list/note-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteListComponent],
  templateUrl: './app.html',
})
export class App {}
