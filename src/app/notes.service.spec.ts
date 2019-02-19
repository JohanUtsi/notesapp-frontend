import { TestBed } from '@angular/core/testing';

import { NotesService } from './notes.service';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('NotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesService = TestBed.get(NotesService);
    expect(service).toBeTruthy();
  });
});
