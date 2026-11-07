
import { AppComponent } from './app.component';
import { UserService } from './core';

describe('AppComponent', () => {

  it('debe inicializar el servicio de usuario', () => {

    const populate = jasmine.createSpy('populate');

    const userServiceMock = {
      populate
    } as unknown as UserService;

    const component = new AppComponent(userServiceMock);

    component.ngOnInit();

    expect(populate).toHaveBeenCalledTimes(1);

  });

});
