import { TestBed } from '@angular/core/testing'
import { AuthGuard } from '../auth/auth-guard.service'
import { commonTestingModules, commonTestingProviders } from './common-testing'
import { UiService } from './ui.service'

describe('UiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat(AuthGuard),
    }))

  it('should be created', () => {
    const service: UiService = TestBed.get(UiService)
    expect(service).toBeTruthy()
  })
})
