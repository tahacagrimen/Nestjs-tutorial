import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express'
import { JwtGuard } from 'src/auth/guard';



@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    // /users/me 
    @Get('me')
    getMe(@Req() req: Request) {
        console.log(req.user)
        return req.user
    }

}
