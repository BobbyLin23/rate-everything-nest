import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const existingUser = await this.usersService.findOneByEmail(createUserDto.email);
    if (existingUser) {
      throw new HttpException('Email Exits!', HttpStatus.CONFLICT);
    }
    this.usersService.createUser(createUserDto);
  }

  @Get()
  async findAll() {
    return 2;
  }

  @Get(':id')
  async findOne() {
    return 3;
  }

  async update() {
    return 4;
  }

  async delete() {
    return 5;
  }
}
