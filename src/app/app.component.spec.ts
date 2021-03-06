import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from 'app/app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
                component = fixture.debugElement.componentInstance;
                fixture.detectChanges();
            });
    }));

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));
});
