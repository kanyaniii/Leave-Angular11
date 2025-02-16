import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-leave-balance-display',
  templateUrl: './leave-balance-display.component.html',
  styleUrls: ['./leave-balance-display.component.scss']
})
export class LeaveBalanceDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  approveLeave() {
    Swal.fire({
      title: 'คำขอลาถูกอนุมัติ!',
      text: 'คำขอลาได้รับการอนุมัติเรียบร้อยแล้ว',
      icon: 'success',
      confirmButtonText: 'ตกลง'
    });
    }

    rejectLeave() {
      Swal.fire({
        title: 'คำขอลาถูกปฏิเสธ!',
        text: 'คำขอลาไม่ได้รับการอนุมัติ',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      });
    }
}
