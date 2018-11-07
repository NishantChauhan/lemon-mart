// import { HttpClientModule } from '@angular/common/http'
import { async, TestBed } from '@angular/core/testing'
import { ObservableMedia } from '@angular/flex-layout'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import {
  commonTestingModules,
  commonTestingProviders,
  DomSanitizerFake,
  MatIconRegistryFake,
  ObservableMediaFake,
} from './common/common-testing'
import { UserModule } from './user/user.module'
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules, UserModule],
      providers: commonTestingProviders.concat([
        { provide: ObservableMedia, useClass: ObservableMediaFake },
        { provide: MatIconRegistry, useClass: MatIconRegistryFake },
        { provide: DomSanitizer, useClass: DomSanitizerFake },
      ]),
      declarations: [AppComponent],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'lemon-mart'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('lemon-mart')
  })
})
