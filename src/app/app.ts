import { Component } from '@angular/core';
import { NoteListComponent } from './features/notes/note-list/note-list';
import { NoteEditorComponent } from './features/notes/note-editor/note-editor';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteListComponent, NoteEditorComponent],
  templateUrl: './app.html',
})
export class App {}
