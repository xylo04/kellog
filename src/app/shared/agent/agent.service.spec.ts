import { AgentService } from './agent.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TestBed } from '@angular/core/testing';

describe('AgentService', () => {
  let service: AgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFireAuth,
          useValue: {
            signInWithPopup: () => null,
          },
        },
        {
          provide: AngularFirestore,
          useValue: {
            doc: () => null,
          },
        },
      ],
    });
    service = TestBed.inject(AgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
