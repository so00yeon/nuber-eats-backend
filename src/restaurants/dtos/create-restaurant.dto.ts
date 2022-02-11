import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restqurant.entity';

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
