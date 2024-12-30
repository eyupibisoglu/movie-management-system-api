import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateTicketWatchedDto {
    @ApiProperty({
        example: true,
        required: true
    })
    @IsNotEmpty()
    isWatched: boolean;
}
