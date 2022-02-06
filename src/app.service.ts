import { Injectable } from '@nestjs/common';

// 하나의 방법으로 기본 서비스를 제공합니다.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
