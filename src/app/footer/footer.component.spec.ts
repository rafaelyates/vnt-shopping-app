import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from 'app/footer/footer.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(FooterComponent);
                component = fixture.debugElement.componentInstance;
                fixture.detectChanges();
            });
    }));

    it('should create the footer', async(() => {
        expect(component).toBeTruthy();
    }));
});
