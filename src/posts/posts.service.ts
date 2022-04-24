import { Injectable } from '@nestjs/common';
import { CreatePostDto } from "./dto/create-post.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Post } from "./posts.model";

@Injectable()
export class PostsService {

  constructor(@InjectModel(Post) private postRepository: typeof Post) {
  }

  async createPost(postDto: CreatePostDto, image: any) {

    const fileName = 'mockImageName'
    const post = await this.postRepository.create({...postDto, image: fileName})
    return post
  }

}
