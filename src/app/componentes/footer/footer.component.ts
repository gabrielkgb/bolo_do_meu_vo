import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/servico/authservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private auth:AutenticarService) { }

  ngOnInit() {}

  deslogar(){
     this.auth.deslogar(); 
  }

}
