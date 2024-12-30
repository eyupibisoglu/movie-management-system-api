import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";

export class GetWatchedTicketDto {
    @ApiProperty({ example: { "name": "Batman", "ageRestriction": 18 }, required: true })
    @IsNotEmpty()
    movie: Object;

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
