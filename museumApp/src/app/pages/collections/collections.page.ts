import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CollectionsPage implements OnInit {

  public collectionCards = [
    { alt: 'The Daughters of Edward Darley Boit', title: 'The Daughters of Edward Darley Boit', subtitle: 'by John Singer Sargent', src: 'https://i.pinimg.com/originals/83/00/33/8300335a1efeec161d012014f4d1904f.jpg', description: 'This iconic painting depicts the four daughters of Edward Darley Boit, an American expatriate living in Paris during the late 19th century. Sargents masterful portrayal of the girls in a spacious interior has made this work one of the highlights of the museums collection.' },
    { alt: 'The Sacred Cod', title: 'The Sacred Cod', subtitle: 'by an unknown artist', src: 'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2014/06/20/41/monumental-mysteries-204-ss-004.rend.hgtvcom.616.347.suffix/1491584704841.jpeg', description: ' This wooden carving of a codfish is a symbol of Massachusetts maritime heritage and political history. It has been displayed in the Massachusetts State House since the early 18th century, and a replica is housed in the Museum of Fine Arts, Boston.' },
    ];

  constructor() { }

  ngOnInit() {
  }

}
