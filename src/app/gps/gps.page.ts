import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage {
  constructor(private launchNavigator: LaunchNavigator, private platform: Platform) { }

  navigateToDestination() {
    const destinationLat = 49.0822187; // Latitude for Times Square
    const destinationLng = 6.1031883; // Longitude for Times Square

    if (this.platform.is('cordova') || this.platform.is('capacitor')) {
      // Native environment: Use Launch Navigator
      const options: LaunchNavigatorOptions = {
        app: this.launchNavigator.APP.GOOGLE_MAPS, // Use Google Maps
      };

      this.launchNavigator
        .navigate([destinationLat, destinationLng], options)
        .then(() => console.log('Launched navigator successfully'))
        .catch((error) => console.error('Error launching navigator', error));
    } else {
      // Browser environment: Use Google Maps URL
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
      window.open(googleMapsUrl, '_blank'); // Open Google Maps in a new tab
    }
  }
}
