import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'test@gmail.com', description: 'Email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: "Invalid email"})
    readonly email:string

    @ApiProperty({example: 'pass12345', description: 'Password'})
    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'min length is 4 letters and max is 16.'})
    readonly password:string
}