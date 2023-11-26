import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
// POST /auth/signup şeklinde route u düzenliyor
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }
}
