import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { FormsModule } from '@angular/forms';
import { albumsOutline, albumsSharp, accessibilityOutline, accessibilitySharp, calendarOutline, calendarSharp, paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})

export class AppComponent {
  public appPages = [
    { title: 'Collections', url: '/collections', icon: 'albums' },
    { title: 'Kids', url: '/kids', icon: 'accessibility' },
    { title: 'Events', url: '/events', icon: 'calendar' }
  ];
  public labels = ['Send Us Feedback'];
  constructor() {
    addIcons({ albumsOutline, albumsSharp, accessibilityOutline, accessibilitySharp, calendarOutline, calendarSharp, paperPlaneOutline, paperPlaneSharp});
  }
}


