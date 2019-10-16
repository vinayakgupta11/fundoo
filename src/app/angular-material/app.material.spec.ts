import { AppMaterialModule } from './app.material';

describe('MaterialModule', () => {
let materialModule: AppMaterialModule;

beforeEach(() => {
materialModule = new AppMaterialModule();
});

it('should create an instance', () => {
expect(materialModule).toBeTruthy();
});
});
