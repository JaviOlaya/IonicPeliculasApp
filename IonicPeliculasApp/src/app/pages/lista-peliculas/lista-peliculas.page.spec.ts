import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPeliculasPage } from './lista-peliculas.page';

describe('ListaPeliculasPage', () => {
  let component: ListaPeliculasPage;
  let fixture: ComponentFixture<ListaPeliculasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPeliculasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
