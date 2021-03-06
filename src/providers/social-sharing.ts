import {Injectable} from "@angular/core";
import {SocialSharing} from "@ionic-native/social-sharing";

/*
  Generated class for the SocialSharingService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SocialSharingService {

  constructor(
    private socialSharing: SocialSharing,
  ) {
    console.log('Hello SocialSharingService Provider');
  }

  inviteFriends() {
    this.socialSharing.share(
      "Hey let's play Snap Them All together. Download it here : app.snap-them-all.com",
      "Let's Play Snap Them All",
      null,
      null
    )
  }
}
