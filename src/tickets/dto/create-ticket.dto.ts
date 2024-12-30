import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateTicketDto {
    @ApiProperty({
        example: '6771b9f5ab6a4e5729b34c9b',
        required: true
    })
    @IsNotEmpty()
    movie: ObjectId;

    @ApiProperty({
        example: '6771700fd2c79687298bd6aa',
        required: true
    })
    @IsNotEmpty()
    session: ObjectId;

    @ApiProperty({
        example: '677011df44f8707172f9bfae',
        required: true
    })
    @IsNotEmpty()
    user: ObjectId;
}
