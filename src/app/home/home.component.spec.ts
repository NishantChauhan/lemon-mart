import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { commonTestingModules, commonTestingProviders } from '../common/common-testing'
import { UserModule } from '../user/user.module'
import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules, UserModule],
      declarations: [HomeComponent],
      providers: [commonTestingProviders],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
