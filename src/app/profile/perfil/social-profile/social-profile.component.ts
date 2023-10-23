import { Component } from '@angular/core';
import icMail from '@iconify/icons-ic/twotone-mail';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icAdd from '@iconify/icons-ic/twotone-add';
import icWhatshot from '@iconify/icons-ic/twotone-whatshot';
import icWork from '@iconify/icons-ic/twotone-work';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icCheck from '@iconify/icons-ic/twotone-check';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { FriendSuggestion } from '../perfil.component';

@Component({
  selector: 'vex-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})

export class SocialProfileComponent {

  suggestions = friendSuggestions;

  icWork = icWork;
  icPhone = icPhone;
  icPersonAdd = icPersonAdd;
  icCheck = icCheck;
  icMail = icMail;
  icAccessTime = icAccessTime;
  icAdd = icAdd;
  icWhatshot = icWhatshot;



  addFriend(friend: FriendSuggestion) {
    friend.added = true;
  }

  removeFriend(friend: FriendSuggestion) {
    friend.added = false;
  }

  trackByName(index: number, friend: FriendSuggestion) {
    return friend.name;
  }
}

export const friendSuggestions: FriendSuggestion[] = [
  {
    name: 'Fannie Wilson',
    imageSrc: 'assets/img/avatars/1.jpg',
    friends: 6,
    added: false
  },
  {
    name: 'Priscilla Ayala',
    imageSrc: 'assets/img/avatars/2.jpg',
    friends: 3,
    added: false
  },
  {
    name: 'Margaret Farley',
    imageSrc: 'assets/img/avatars/3.jpg',
    friends: 3,
    added: true
  },
  {
    name: 'Alston Tucker',
    imageSrc: 'assets/img/avatars/4.jpg',
    friends: 1,
    added: true
  },
  {
    name: 'Frye Humphrey',
    imageSrc: 'assets/img/avatars/5.jpg',
    friends: 1,
    added: true
  },
  {
    name: 'Jannie Cochran',
    imageSrc: 'assets/img/avatars/6.jpg',
    friends: 5,
    added: false
  },
  {
    name: 'Perkins Doyle',
    imageSrc: 'assets/img/avatars/7.jpg',
    friends: 7,
    added: false
  },
  {
    name: 'Marci Boyd',
    imageSrc: 'assets/img/avatars/8.jpg',
    friends: 2,
    added: false
  }
];
