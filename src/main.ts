import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)
    const config = new DocumentBuilder()
      .setTitle('Ulbi Strong Backend (NestJS)')
      .setDescription('Документация REST API')
      .setVersion('1.0.0')
      .addTag('PRACTICE')
      .build()
    const swaggerDoc = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, swaggerDoc)
    await app.listen(PORT, () => console.log(`Server is started on ${PORT} port...`))
}

start()

