import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restqurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) // Restaurant entity의 Repository 를 inject 하고있고
    private readonly restaurants: Repository<Restaurant>, // 이름은 restaurants 이고 class는 Restaurant entity를 가진 Repository 다.
  ) {}
  getAll(): Promise<Restaurant[]> {
    // .find()가 async method라서 Promise<Restaurant[]> 이렇게 해줘야한다.
    // 위에서의 작업을 통해 this.restaurants. 으로 repository에 접근할 수 있다.
    return this.restaurants.find();
  }
}
