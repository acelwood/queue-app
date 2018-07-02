import { Component, OnInit } from '@angular/core';
import { StudentQuestion } from '../student_question';
import { STUDENTS } from '../mock_students';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

	questionlist = STUDENTS;

	selectedQuestion :  StudentQuestion;

  constructor() { }

  ngOnInit() {
  }

  onSelect(q: StudentQuestion): void {
  this.selectedQuestion = q;
}

}
