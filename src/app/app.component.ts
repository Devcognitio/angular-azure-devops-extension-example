import { Component, OnInit } from '@angular/core';
import * as SDK from "azure-devops-extension-sdk";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-extension-angular';
  userName: string | undefined;

  ngOnInit() {
    SDK.init();
    this.initializeState();
  }

  private async initializeState(): Promise<void> {
    await SDK.ready();
    this.userName = SDK.getUser().displayName;
  }

}
