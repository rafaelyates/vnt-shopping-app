import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from 'app/header/header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HeaderComponent);
                component = fixture.debugElement.componentInstance;
                fixture.detectChanges();
            });
    }));

    it('should create the header', async(() => {
        expect(component).toBeTruthy();
    }));
});
