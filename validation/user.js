import { body } from "express-validator";

export const userValidation = [
  body("dealName", "Назва угоди має містити мін. 5 символів").isLength({
    min: 5,
  }),
  body("dealStage", "Етап угоди має містити мін. 5 символів").isLength({
    min: 5,
  }),
  body("accountName", "Ім'я користувача має містити мін. 5 символів").isLength({
    min: 5,
  }),
  body("accountWebsite", "Не вірний формат пошти").isEmail(),
  body("accountPhone", "Не вірний формат телефону").isLength({
    min: 12,
  }),
];
