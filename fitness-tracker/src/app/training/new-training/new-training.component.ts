import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Observable<Exercise[]>;

  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    // this.exercises = this.trainingService.getAvailableExercises();
    this.exercises = this.db
      .collection('availableExercises')
      .snapshotChanges()
      .map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data().name,
            duration: doc.payload.doc.data().duration,
            calories: doc.payload.doc.data().calories
          };
        });
      });
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}

// ngOnInit() {
//   // this.exercises = this.trainingService.getAvailableExercises();
//   this.exercises = this.db
//     .collection('availableExercises')
//     .snapshotChanges()
//     .map(docArray => {
//       return docArray.map(doc => {
//         return {
//           id: doc.payload.doc.id,
//           name: doc.payload.doc.data().[name],
//           duration: doc.payload.doc.data().[duration],
//           calories: doc.payload.doc.data().[calories]
//         };
//       });
//     });
// }

// ngOnInit() {
//   // this.exercises = this.trainingService.getAvailableExercises();
//   this.db
//     .collection('availableExercises')
//     .snapshotChanges()
//     .map(docArray => {
//       return docArray.map(doc => {
//         return {
//           id: doc.payload.doc.id,
//           ...doc.payload.doc.data()
//         };
//       });
//     })
//     .subscribe(result => {
//       console.log(result);
//     });
// }

// ngOnInit() {
//   // this.exercises = this.trainingService.getAvailableExercises();
//   this.db
//     .collection('availableExercises')
//     .snapshotChanges()
//     .subscribe(result => {
//       for (const res of result) {
//         console.log(
//           res.payload.doc.id,
//           res.payload.doc.data().name,
//           res.payload.doc.data().duration,
//           res.payload.doc.data().calories
//         );
//       }
//     });
// }
