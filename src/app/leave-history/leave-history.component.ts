import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import * as XLSX from 'xlsx'; // นำเข้าไลบรารี xlsx

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss']
})
export class LeaveHistoryComponent implements OnInit, AfterViewInit {

  leaveDetails = [
    {
      name: 'บิ๋ม บิ๋ม', leaveType: 'นักศึกษาฝึกงาน', sickLeave: 1, personalLeave: 0, vacationLeave: 0, together: 1
    },
    {
      name: 'สมชาย ใจดี', leaveType: 'IT', sickLeave: 2, personalLeave: 1, vacationLeave: 0, together: 3
    },
    {
      name: 'สมหญิง รักษางาน', leaveType: 'HR', sickLeave: 1, personalLeave: 2, vacationLeave: 1, together: 4
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // ต้องใช้ AfterViewInit ในการเริ่มต้น ECharts เมื่อ DOM พร้อมแล้ว
    const chart = echarts.init(document.getElementById('main') as HTMLDivElement);

    const option = {
      tooltip: {
        trigger: 'item',  
        formatter: '{b}: {c} วัน', 
      },
      legend: {
        data: ['ลาป่วย', 'ลาพักร้อน', 'ลากิจ', 'จำนวนวัน'],  // ข้อมูลแสดงใน legend
        bottom: 10,  // จัด legend ให้อยู่ด้านล่าง
        left: 'center' // จัดให้อยู่กลาง
      },
      xAxis: {
        type: 'category',
        data: ['ลาป่วย', 'ลาพักร้อน', 'ลากิจ']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'จำนวนวัน',
          data: [5, 10, 25, 30, 35, 40, 45],
          type: 'bar',
        }
      ]
    };

    // ตั้งค่า option สำหรับกราฟ
    chart.setOption(option);
  }

   // ฟังก์ชันสำหรับ export ข้อมูลเป็นไฟล์ Excel
   exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.leaveDetails);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Leave History');  

    // สร้างไฟล์ Excel และดาวน์โหลด
    XLSX.writeFile(wb, 'leave_history.xlsx');
  }

}
