import { Injectable } from '@angular/core';
import { Supabase } from '../../core/supabase';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class Tag {
  constructor(private supabase: Supabase) {}

  async getTags() {
    const { data, error } = await this.supabase.client.from('tags').select('*').order('name', { ascending: true });
    if (error) throw error;
    return data;
  }

  async createTag(name: string) {
    const { data, error } = await this.supabase.client.from('tags').insert({ name }).select().single();
    if (error) throw error;
    return data;
  }

  async addTagToNote(noteId: string, tagId: string) {
    const { data, error } = await this.supabase.client.from('note_tags').insert({ note_id: noteId, tag_id: tagId}).select().single();
    if (error) throw error;
    return data;
  }
}
