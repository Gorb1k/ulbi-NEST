import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class BanUserDto {

  @ApiProperty({example: 'For flood', description: 'Ban reason'})
  @IsString({message: 'Must be a string'})
  readonly banReason:string
  @ApiProperty({example: '3', description: 'User ID'})
  @IsNumber({},{message: 'Must be a number'})
  readonly userId:number
}