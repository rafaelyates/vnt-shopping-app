import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from 'app/about/about.component';

describe('AboutComponent', () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AboutComponent],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AboutComponent);
                component = fixture.debugElement.componentInstance;
                fixture.detectChanges();
            });
    }));

    it('should create the about', async(() => {
        expect(component).toBeTruthy();
    }));
});
