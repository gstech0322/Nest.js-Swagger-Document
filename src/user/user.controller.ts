import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RegisterUserDto, UserDto } from 'src/common/dtos/user/user.dto';
import {
  AccessTokenResponse,
  SuccessResponse,
} from '../common/dtos/response-types.dto';

@ApiTags('Users Management')
@Controller('api/users')
export class UserController {
  @Get('')
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserDto, isArray: true })
  async getUsers(@Request() req): Promise<UserDto[]> {
    return [];
  }

  @Post('')
  @ApiOkResponse({ type: SuccessResponse })
  async registerUser(@Body() body: RegisterUserDto): Promise<AccessTokenResponse> {
    return new AccessTokenResponse('any-access-token');
  }

  @Get('/:id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserDto })
  async getUserByID(@Request() req): Promise<UserDto> {
    return null;
  }

  @Put('/:id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SuccessResponse })
  async updateUser(@Body() body: RegisterUserDto): Promise<SuccessResponse> {
    return new SuccessResponse();
  }

  @Patch('/:id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SuccessResponse })
  async patchUser(@Body() body: RegisterUserDto): Promise<SuccessResponse> {
    return new SuccessResponse();
  }

  @Delete('/:id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: SuccessResponse })
  async deleteUser(): Promise<SuccessResponse> {
    return new SuccessResponse();
  }
}
