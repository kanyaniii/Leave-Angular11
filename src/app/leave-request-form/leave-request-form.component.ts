import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leave-request-form',
  templateUrl: './leave-request-form.component.html',
  styleUrls: ['./leave-request-form.component.scss']
})
export class LeaveRequestFormComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
   
  }
  showAlert() {
    Swal.fire({
      title: "ส่งคำขอลาแล้ว!",
      text: "คุณได้ส่งคำขอลาเรียบร้อย",
      icon: "success",
      draggable: true
    });
  }

}
