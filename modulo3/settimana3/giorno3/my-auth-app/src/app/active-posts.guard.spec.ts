import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activePostsGuard } from './active-posts.guard';

describe('activePostsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activePostsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
