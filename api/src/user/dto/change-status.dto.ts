import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class ChangeStatusDto {
  @IsInt()
  @Type(() => Number)
  @IsNotEmpty()
  userId: number;
}
