import * as joi from 'joi';

export const envSchemaValidation = joi.object({
  TEST: joi.string().required(),
  DATABASE_URL: joi.string().required(),
  POSTGRES_PASSWORD: joi.string().required(),
  RABBITMQ_URL: joi.string().required(),
});
