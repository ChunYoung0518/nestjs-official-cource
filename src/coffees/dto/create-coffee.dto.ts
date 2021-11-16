import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class NestedDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The name of a brand' })
  @IsString()
  readonly brand: string;

  @ApiProperty()
  @IsString({ each: true })
  readonly flavors: string[];

  @ValidateNested()
  @Type(() => NestedDto)
  @IsObject()
  @IsNotEmptyObject()
  @IsDefined()
  nestedObj: NestedDto;
}
