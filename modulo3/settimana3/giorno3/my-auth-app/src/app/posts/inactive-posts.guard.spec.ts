import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { inactivePostsGuard } from './inactive-posts.guard';

describe('inactivePostsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => inactivePostsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
