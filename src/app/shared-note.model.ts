import {NoteModel} from './notes/note-model';

export class SharedNoteModel{
  id: number;
  note: NoteModel;
  uuid: string;
  shared: number;
}
