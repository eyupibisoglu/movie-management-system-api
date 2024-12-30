import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
 
  @ApiOperation({ summary: 'Registration' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ type: CreateUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @ApiResponse({ type: CreateUserDto, isArray: true })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

}
