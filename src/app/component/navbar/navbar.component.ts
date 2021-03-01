import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  value: string = '';
  
  constructor(private route: Router) { }

  ngOnInit() {
  }

  buscar() {
    if (this.value === '') {
      return;
    }
    this.route.navigate(['/buscar', this.value]);
  }

}
