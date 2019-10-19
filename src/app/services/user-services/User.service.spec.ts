import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; 
import { TestService } from './User.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TestService', () => {
  let usersService: TestService;
  beforeEach(() => {TestBed.configureTestingModule({
    providers: [TestService],
    imports: [HttpClientTestingModule], 
  });
  usersService = TestBed.get(TestService);
});

  it('should be created', () => {
   
    expect(usersService).toBeTruthy();
  });
});

