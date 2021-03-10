import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  skipToMainContent(){
    /// temp placeholder since the page is so short.
    /// When nav exists for desktop for example, this should help...
    /// accessible users to skip the header to go straight to the main content.
    /// Future backlog items :)
    alert('skip to main is clicked')
  }
}
