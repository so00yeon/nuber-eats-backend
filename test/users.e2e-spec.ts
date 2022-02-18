import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { getConnection } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  // beforeAll로 바꾸기
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  // 모든 테스트를 마치고 데이터베이스를 닫아줌
  afterAll(async () => {
    await getConnection().dropDatabase();
    app.close();
  });

  // 테스트하기 좋게 순서 지정
  it.todo('createAccount');
  it.todo('userProfile');
  it.todo('me');
  it.todo('login');
  it.todo('verifyEmail');
  it.todo('editProfile');
});
