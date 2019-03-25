import { Module, HttpException, UnauthorizedException } from '@nestjs/common';

@Module({
  imports: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor() {
    // throw new HttpException(`Please provide a valid token.`, 401);
    throw new UnauthorizedException(`Please provide a valid token.`);
  }
}