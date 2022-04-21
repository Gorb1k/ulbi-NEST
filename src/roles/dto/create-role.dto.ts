import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'role value'})
    readonly value:string
    @ApiProperty({example: 'Admin', description: 'Role description'})
    readonly description:string
}