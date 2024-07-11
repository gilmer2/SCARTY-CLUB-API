import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MarkService } from './mark.service';
import { CreateMark } from './dto/mark.dto';

@Controller('mark')
@ApiTags('mark')
export class MarkController {
    constructor(
        private readonly markService: MarkService
    ) {}

    @Post()
    create(@Body() mark: CreateMark) {
        return this.markService.create(mark);
    }

    @Get()
    findAll() {
        return this.markService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.markService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() mark: CreateMark) {
        return this.markService.update(id, mark);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.markService.remove(id);
    }
}
