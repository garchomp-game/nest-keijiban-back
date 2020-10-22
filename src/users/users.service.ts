import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}
  create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save({
      name: user.name,
      login_id: user.login_id,
      password: hashSync(user.password, 10),
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  getLoginUser(login_id: string): Promise<User | undefined> {
    return this.usersRepository.findOne({login_id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
