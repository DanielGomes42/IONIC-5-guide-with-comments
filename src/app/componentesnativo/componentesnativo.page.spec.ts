import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { COMPONENTESNATIVOPage } from './componentesnativo.page';

describe('COMPONENTESNATIVOPage', () => {
  let component: COMPONENTESNATIVOPage;
  let fixture: ComponentFixture<COMPONENTESNATIVOPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ COMPONENTESNATIVOPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(COMPONENTESNATIVOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
