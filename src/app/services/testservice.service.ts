import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IPlats } from '../list/list';


@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  private dbPath = '/plats'

  PlatsRef: AngularFirestoreCollection<IPlats>

  constructor(private db: AngularFirestore) {
    this.PlatsRef = db.collection(this.dbPath)
  }

  getAll(): AngularFirestoreCollection<IPlats> {
    return this.PlatsRef;
  }

  create(plat:IPlats): any {
    return this.PlatsRef.add({...plat });
  }
}
