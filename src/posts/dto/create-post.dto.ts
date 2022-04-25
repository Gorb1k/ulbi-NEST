import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";


export class CreatePostDto {

  @ApiProperty({example: 'POST TITLE lorem', description: 'post title'})
  @IsString({message: 'Must be a string'})
  readonly title:string
  @ApiProperty({example: 'Lorem lorlema asd fasd', description: 'content'})
  @IsString({message: 'Must be a string'})
  readonly content: string
  @ApiProperty({example: '1', description: 'userID'})
  readonly userId:number
}