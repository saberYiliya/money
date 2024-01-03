import { IsNotEmpty, Length, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 10, {
    message: '字符在5个到10个之间',
  })
  readonly name: string;
  @IsNotEmpty({ message: '密码不能为空' })
  readonly passWord: string;
  @IsNotEmpty({ message: '验证码不能为空' })
  readonly code: number;
}
