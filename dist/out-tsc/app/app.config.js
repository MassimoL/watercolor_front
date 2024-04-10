import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export const appConfig = {
    providers: [provideRouter(routes), provideHttpClient(), NgbActiveModal]
};
//# sourceMappingURL=app.config.js.map