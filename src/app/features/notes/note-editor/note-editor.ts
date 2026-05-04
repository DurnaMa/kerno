import { Component } from '@angular/core';
import { NoteService } from '../note';

@Component({
  selector: 'app-note-editor',
  imports: [],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.css',
})
export class NoteEditorComponent {
  title: string = '';
  content: string = '';
  saving: boolean = false;

  constructor(private noteService: NoteService) {}

}
