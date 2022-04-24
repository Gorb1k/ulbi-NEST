import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'role value'})
    @IsString({message: 'Must be a string'})
    readonly value:string
    @ApiProperty({example: 'Admin', description: 'Role description'})
    @IsString({message: 'Must be a string'})
    readonly description:string
}