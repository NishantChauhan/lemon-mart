import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InventoryDashBoardComponent } from './inventory-dash-board.component'

describe('InventoryDashBoardComponent', () => {
  let component: InventoryDashBoardComponent
  let fixture: ComponentFixture<InventoryDashBoardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryDashBoardComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDashBoardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
