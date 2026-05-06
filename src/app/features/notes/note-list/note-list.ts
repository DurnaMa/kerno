import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService, Note } from '../note';
import { NoteEditorComponent } from '../note-editor/note-editor';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteEditorComponent],
  templateUrl: './note-list.html',
})
export class NoteListComponent implements OnInit {
  notes = signal<Note[]>([]);
  loading = signal(true);

  constructor(private noteService: NoteService) {}

  async ngOnInit() {
    await this.loadNotes();
  }

  async loadNotes() {
    this.loading.set(true)
    try {
      const result = await this.noteService.getNotes();
      this.notes.set(result ?? []);
    } catch (error) {
      console.error('Fehler:', error);
    } finally {
      this.loading.set(false)
    }
  }
}
