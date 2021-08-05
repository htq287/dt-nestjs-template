"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app/app.module");
const app_service_1 = require("./app/app.service");
async function bootstrap() {
    const logger = new common_1.Logger('main');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const appService = app.get(app_service_1.AppService);
    appService.start();
    const port = parseInt(process.env.PORT || '3000');
    await app.listen(port, 'localhost');
    logger.log(`Application is runing on: ${await app.getUrl()}`);
}
bootstrap().then();
//# sourceMappingURL=main.js.map