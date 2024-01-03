import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParseIntPipe } from '@nestjs/common';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  login(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto, 'createUserDto');
    return this.usersService.create(createUserDto);
  }

  @Get('code')
  code(@Res() res, @Req() req) {
    const captcha = this.usersService.createCaptcha(req);
    res.type('image/svg+xml');
    res.send(captcha.data);
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return id;
  }
}
