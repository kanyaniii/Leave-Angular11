import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent  {

  selectedDepartment: string = 'all';
  departments = ['ทุกแผนก', 'IT', 'SD', 'HR'];

  leaveEvents = [
    { title: 'สมชาย ไชลี', date: '2025-02-16', type: 'sick' },
    { title: 'สมชาย ไชลี', date: '2025-02-17', type: 'sick' },
    { title: 'สมหญิง รักงาน', date: '2025-02-21', type: 'vacation' },
    { title: 'สมหญิง รักงาน', date: '2025-02-22', type: 'vacation' },
    { title: 'สมหญิง รักงาน', date: '2025-02-23', type: 'business' }
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.leaveEvents.map(event => ({
      title: event.title,
      start: event.date,
      classNames: [event.type]
    })),
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: ''
    }
  };
}
