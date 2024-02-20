import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EventsPage implements OnInit {


  public eventCards = [
   
   
    { alt: 'Event 5', title:'Ancient Artifacts Unearthed: A Journey Through Time', subtitle:'February 15th, 2024, 10:00 AM - 5:00 PM ', src: 'https://d3rr2gvhjw0wwy.cloudfront.net/uploads/mandators/49581/file-manager/canopic-jars,-ancient-egyptian-artifacts.jpg', description: 'Evergreen Museum of Ancient History, 123 Main Street, Kolkata, West Bengal, 700001' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
