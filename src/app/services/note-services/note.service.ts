import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{HttpService}  from '../http-services/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient,private svc: HttpService) { }

AddNote(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/addNotes')
}
GetNotesList(auth)
{
  return this.svc.Get( auth, 'notes/getNotesList')
}
ArchiveNotesList(auth)
{
  return this.svc.Get( auth, 'notes/getArchiveNotesList')
}
TrashNote(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/trashNotes')
}
ArchiveNote(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/archiveNotes')
}
UnArchiveNote(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/archiveNotes')
}
RestoreNote(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/trashNotes')
}
DeleteForever(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/deleteForeverNotes')
}
UpdateNotes(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/updateNotes')
}
ColorChange(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/changesColorNotes')
}
TrashNotesList(auth)
{
  return this.svc.Get( auth, 'notes/getTrashNotesList')
}
 }
