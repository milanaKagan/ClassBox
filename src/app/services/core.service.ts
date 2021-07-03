import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {StudentInterface} from "../interfaces/student.interface";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private afs: AngularFirestore) { }

  saveStudent(student: StudentInterface): any {
    return this.afs.collection('students').add(student);
  }

  getStudents() {
    return this.afs.collection('students').valueChanges({ idField: 'id' });
  }
  
  deleteStudentById(studentDoc: string){
  this.afs.collection("students").doc(studentDoc).delete().then(() => {
      console.log("Student successfully deleted!");
      alert("Student Deleted");
  }).catch((error) => {
      console.error("Error removing student: ", error);
  });
  }
}
