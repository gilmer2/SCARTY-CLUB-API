import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mark } from './mongo/mark.schema';
import { Model } from 'mongoose';
import { CreateMark } from './dto/mark.dto';

@Injectable()
export class MarkService {
    constructor(
        @InjectModel(Mark.name) private markModel: Model<Mark>
    ) {}

    async create(mark: CreateMark): Promise<Mark> {
        const createdMark = new this.markModel(mark);
        return createdMark.save();
    }

    async findAll(): Promise<Mark[]> {
        return this.markModel.find().exec();
    }

    async findOne(id: string): Promise<Mark> {
        return this.markModel.findById(id);
    }

    async update(id: string, mark: CreateMark): Promise<Mark> {
        return this.markModel.findByIdAndUpdate(id, mark, {new: true});
    }

    async remove(id: string): Promise<Mark> {
        return this.markModel.findByIdAndDelete(id);
    }

}
