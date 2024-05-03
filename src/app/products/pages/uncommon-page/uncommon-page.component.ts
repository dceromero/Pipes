
import { KeyValue, KeyValuePipe } from '@angular/common';
import { Component, KeyValueDiffers, OnInit, inject } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent implements OnInit {

  private differs: KeyValueDiffers = inject(KeyValueDiffers);
  public keyValue: KeyValuePipe = new KeyValuePipe(this.differs);

  public name: string = 'Jimmy';
  public gender: 'male' | 'female' = 'male';
  public invitartionMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Sofia', 'Camila', 'Lucia'];
  public clientsMap = {
    '=0': 'no tenemos ningúna persona esperando',
    '=1': 'tenemos una persona esperando',
    'other': 'tenemos # persona esperando'
  }

  public person = {
    name: 'Natalia',
    age: 25,
    address: 'Ottawa, Canada'
  }

  public person2 = {
    name: 'Natalia',
    age: 28,
    address: 'Bogota, Colombia'
  }

  public persona: KeyValue<string, string | number>[] = this.keyValue.transform(this.person);
  public persona2: KeyValue<string, string | number>[] = this.keyValue.transform(this.person2);
  public diferencias: KeyValue<string, string | number>[] = [];

  ngOnInit(): void {
    this.diferencias = this.persona.filter(p => !this.persona2.some(p2 => p2.value === p.value));
    
  } 

  changeName() {
    this.name = 'Natalia';
    this.gender = 'female';
  }

  deleteClient() {
    this.clients.shift();
  }




  public myObservable = interval(2000);

  public myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 5000);
  });

}
