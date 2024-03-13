import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent implements OnInit {
  ngOnInit(): void {
    // Call logToConsole method when the component is initialized
    console.log("hey!")
    
}
}
