import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http-services/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient, private svc: HttpService) { }

  AddNote(userObj, auth) {
    return this.svc.Post(userObj, auth, 'notes/addNotes')
  }
  GetNotesList(auth) {
    return this.svc.Get(auth, 'notes/getNotesList')
  }
  ArchiveNotesList(auth) {
    return this.svc.Get(auth, 'notes/getArchiveNotesList')
  }
  TrashNote(userObj, auth) {
    return this.svc.Post(userObj, auth, 'notes/trashNotes')
  }
  ArchiveNote(userObj, auth) {
    return this.svc.Post(userObj, auth, 'notes/archiveNotes')
  }
  UnArchiveNote(userObj, auth) {
    return this.svc.Post(userObj, auth, 'notes/archiveNotes')
  }
  RestoreNote(userObj, auth) {
    return this.svc.Post(userObj, auth, 'notes/trashNotes')
  }
  DeleteForever(userObj, auth) {
    return this.svc.Post(userObj, auth, 'notes/deleteForeverNotes')
  }
  UpdateNotes(userObj, auth) {
    return this.svc.Post(userObj, auth, 'notes/updateNotes')
  }
  ColorChange(userObj, auth) {
    return this.svc.Post(userObj, auth, 'notes/changesColorNotes')
  }
  TrashNotesList(auth) {
    return this.svc.Get(auth, 'notes/getTrashNotesList')
  }
  AddLabel(userObj, auth) {
    return this.svc.Post(userObj, auth, 'noteLabels')

  }
  GetLabelList(auth) {
    return this.svc.Get(auth, 'noteLabels/getNoteLabelList')
  }
  DeleteLabel(userObj, auth) {
    let id = userObj.id
    return this.svc.Delete(auth, 'noteLabels/' + id + '/deleteNoteLabel')
  }
  UpdateLabel(userObj, auth) {
    let id = userObj.data.id
    return this.svc.Post(userObj ,auth, 'noteLabels/' + id + '/updateNoteLabel')
  }
  addLabelToNotes(userObj, auth)
  { 
    let noteid= userObj.data.noteId;
    let labelid= userObj.data.labelId;
    return this.svc.Post(userObj ,auth, 'notes/' + noteid + '/addLabelToNotes/'+ labelid + '/add')
  }
  getNotesByLabel(label,auth)
{
    return this.svc.Post(label ,auth, 'notes/getNotesListByLabel/' + label.labelName)
    
}
addReminder(userObj, auth)
{
  return this.svc.Post(userObj, auth, 'notes/addUpdateReminderNotes')

}
dellabnotes(userObj, auth){
  let url= 'notes/' + userObj.noteId + '/addLabelToNotes/' + userObj.id + '/remove'
  return this.svc.Post(userObj,auth,'notes/' + userObj.noteId + '/addLabelToNotes/' + userObj.id + '/remove');
}
GetReminderList(auth) {
  return this.svc.Get(auth, 'notes/getReminderNotesList');
}
delreminder(userObj, auth){
  
  return this.svc.Post(userObj,auth,'notes/removeReminderNotes');
}
addCollaborator(userObj, auth)
{
  return this.svc.Post(userObj,auth,'notes/' +userObj.noteId+ '/AddcollaboratorsNotes');
}
GetNotesListCollab(userObj,auth) {
  return this.svc.Patch(userObj,auth, 'notes/'+ userObj.noteId)
}
DeleteCollab(userObj,auth)
{
    return this.svc.Delete(auth, 'notes/' + userObj.noteId + '/removeCollaboratorsNotes/'+ userObj.collId)
}

GetNoteDetailss(userObj, auth) {
  return this.svc.Get( auth, 'notes/getNotesDetail/'+ userObj.noteIdList)
}
AddQuestion(userObj, auth)
{
  return this.svc.Post(userObj,auth,'questionAndAnswerNotes/addQuestionAndAnswer');
}
ReplyQuestion(userObj, auth)
{
  return this.svc.Post(userObj,auth,'questionAndAnswerNotes/reply/'+ userObj.quesId);
}
MyCart( auth)
{
  return this.svc.Get(auth, 'productcarts/myCart');
}
PlaceOrder(userObj, auth)
{
  return this.svc.Post(userObj,auth,'productcarts/placeOrder');
}


}