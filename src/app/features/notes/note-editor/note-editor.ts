import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { NoteService } from '../note';
import { FormsModule } from '@angular/forms';
import { Tag } from '../tag';

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
  tagInput: string = '';
  saving: boolean = false;
  pendingTags: string[] = [];

  constructor(
    private noteService: NoteService,
    private tagService: Tag,
    private cdr: ChangeDetectorRef
  ) {}

  async save() {
    if (!this.title) return;
    this.saving = true;
    try {
      const note = await this.noteService.createNote({ title: this.title, content: this.content });
      this.title = '';
      this.content = '';
      this.noteSaved.emit();
    } catch (error) {
      console.error('Fehler bein Speichern der Notiz: ', error);
    } finally {
      this.saving = false;
    }
  }

  async addTag() {
    if (!this.tagInput) return;
    this.pendingTags.push(this.tagInput);
    setTimeout(() => console.log('nach 1 Sekunde:', this.pendingTags), 1000);
    console.log('pendingTags nach push:', this.pendingTags);
    this.tagInput = '';
    this.cdr.detectChanges();
  }
}
