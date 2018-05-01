import { async, inject, TestBed } from '@angular/core/testing';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from 'app/services/auth.service';

describe('AuthService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthService,
                AngularFireAuth,
                FirebaseApp
            ],
        }).compileComponents();
    }));

    it('should be created', inject([AuthService], async((service: AuthService) => {
        expect(service).toBeTruthy();
    })));
});
