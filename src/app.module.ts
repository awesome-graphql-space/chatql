import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';
import { ControllersService } from './controllers/controllers.service';

@Module({
  imports: [UsersModule, ConversationsModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService, ControllersService],
})
export class AppModule {}
