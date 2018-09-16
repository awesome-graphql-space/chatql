import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as GraphQLJSON from 'graphql-type-json';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { CommonsModule } from './commons/commons.module';

@Module({
  imports: [
    UsersModule,
    ConversationsModule,
    MessagesModule,
    AuthModule,
    CommonsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      resolvers: { JSON: GraphQLJSON },
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
