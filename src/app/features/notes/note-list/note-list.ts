import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService, Note } from '../note';
import { NoteEditorComponent } from '../note-editor/note-editor';
import { Search } from '../../../core/search';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteEditorComponent],
  templateUrl: './note-list.html',
})
export class NoteListComponent implements OnInit {
  notes = signal<Note[]>([]);
  loading = signal(true);
  query = signal('');

  constructor(
    private noteService: NoteService,
    private searchService: Search
  ) {}

  async ngOnInit() {
    await this.loadNotes();
  }

  async loadNotes() {
    this.loading.set(true);
    try {
      const result = await this.noteService.getNotes();
      this.notes.set(result ?? []);
    } catch (error) {
      console.error('Fehler:', error);
    } finally {
      this.loading.set(false);
    }
  }

  filteredNotes = computed(() => {
    const term = this.query().toLowerCase();
    if (!term) return this.notes();
    return this.searchService.search(this.notes(), term);
  });

  onSearch(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
