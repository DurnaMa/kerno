import { Injectable } from '@angular/core';
import { Supabase } from '../../core/supabase';

export interface Note {
  id?: string;
  title: string;
  content: string;
  created_at?: string;
  user_id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private supabase: Supabase) {}

  async getNotes() {
    const { data, error } = await this.supabase.client
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  }

  async createNote(note: Note) {
    const { data, error } = await this.supabase.client.from('notes').insert(note).select().single();
    if (error) throw error;
    return data;
  }

  async updateNote(id: string, note: Partial<Note>) {
    const { data, error } = await this.supabase.client.from('notes').update(note).eq('id', id).select().single();
    if (error) throw error;
    return data;
  }

  async deleteNote(id: string) {
    const { error } = await this.supabase.client.from('notes').delete().eq('id', id);
    if (error) throw error;
  }
}
