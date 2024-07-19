import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const CreateUserSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
  }),
  email: z.string().email(),
  password: z.string({
    required_error: 'Password is required',
  }),
  name: z.string({
    required_error: 'Name is required',
  }),
});

export class CreateUserSchemaDTO extends createZodDto(CreateUserSchema) {}

export const CreateUserResponseDTO = CreateUserSchema.omit({ password: true });

export type CreateUserResponseDTO = z.infer<typeof CreateUserResponseDTO>;
