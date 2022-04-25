import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiTags } from "@nestjs/swagger";

@Controller("posts")
@ApiTags('Posts')
export class PostsController {
  constructor(private postService: PostsService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body() postDto: CreatePostDto,
             @UploadedFile() image) {
    return  this.postService.createPost(postDto, image);
  }
}
