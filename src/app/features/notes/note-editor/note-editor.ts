import { Component } from '@angular/core';
import { NoteService } from '../note';
import { FormsModule} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-editor',
  imports: [FormsModule],
  templateUrl: './note-editor.html',
  styleUrl: './note-editor.css',
})

export class NoteEditorComponent {
  @Output() noteSaved = new EventEmitter();
  title: string = '';
  content: string = '';
  saving: boolean = false;

  constructor(private noteService: NoteService) {}

  async save() {
    if (!this.title) return;
    this.saving = true;
    try {
      await this.noteService.createNote({ title: this.title, content: this.content });
      this.title = '';
      this.content = '';
    } catch (error) {
      console.error('Fehler bein Speichern der Notiz: ', error);
    } finally {
      this.saving = false;
    }
  }
}
