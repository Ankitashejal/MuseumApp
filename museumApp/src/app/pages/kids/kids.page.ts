import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.page.html',
  styleUrls: ['./kids.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class KidsPage implements OnInit {

  public personalityCards = [
    
    
    { alt: 'Subodh Gupta', title:'Van Gogh', src: 'https://goodparentingbrighterchildren.com/wp-content/uploads/2019/03/Art-Museum-1.jpg', description: '"The Starry Night" is one of Van Goghs most well-known works, characterized by its swirling brushstrokes, vibrant colors, and dynamic depiction of the night sky' },

    { alt: 'Nandalal Bose', title:'Tidbits  of Wisdom for Parents', src: 'https://goodparentingbrighterchildren.com/wp-content/uploads/2019/03/Art-Museum-2.jpg', description: '"Parenting wisdom: Be present, lead by example, foster open communication, encourage independence, show love, set boundaries, practice patience, prioritize quality time, teach kindness, and trust your instincts.".' }
  ,];

  constructor() { }

  ngOnInit() {
  }

}
