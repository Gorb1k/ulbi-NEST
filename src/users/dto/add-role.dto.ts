import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class AddRoleDto {

  @ApiProperty({example: 'USER', description: 'role value'})
  @IsString({message: 'Must be a string'})
  readonly value:string
  @ApiProperty({example: '3', description: 'User ID'})
  @IsNumber({},{message: 'Must be a number'})
  readonly userId:number
}