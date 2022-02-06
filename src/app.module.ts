import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

// 애플리케이션의 루트 모듈입니다.
@Module({
  imports: [
    CategoryModule,
    MongooseModule.forRoot(
      'mongodb+srv://yunj:qwer1234@personal-cluster.rwuwt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
