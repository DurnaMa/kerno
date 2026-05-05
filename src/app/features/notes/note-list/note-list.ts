import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService, Note } from '../note';
import { NoteEditorComponent} from '../note-editor/note-editor';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteEditorComponent],
  templateUrl: './note-list.html',
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  loading = true;

  constructor(private noteService: NoteService) {}

  async ngOnInit() {
    try {
      this.notes = (await this.noteService.getNotes()) ?? [];
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
