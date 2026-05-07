import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';
import { Note } from '../features/notes/note';

@Injectable({
  providedIn: 'root',
})
export class Search {
  constructor() {
  }
  options = {
    threshold: 0.4,
    distance: 200,
    minMatchCharLength: 2,
    keys: [
      { name: 'title', weight: 2 },
      { name: 'content', weight: 1 },
    ],
    includeScore: true,
    useExtendedSearch: false,
    ignoreLocation: true,
  };

  search(notes: Note[], query: string): Note[] {
    const fuse = new Fuse(notes, this.options)
    return fuse.search(query).map(result => result.item);
  }
}
