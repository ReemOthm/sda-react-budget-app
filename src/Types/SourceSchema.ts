import { z } from "zod";

export const SourceSchema = z.object({
    id:  z.string().optional(),
    source: z.string().min(1,{message: 'source must be more than 4 characters'})
        .regex(/^\s*\S/, {message: "White-spaces aren't accepted!"}),
    amount: z.coerce.number().positive({message: "amount must be a positive number and more than 0"}),
    date: z.string().min(1, {message: 'This field is required'})
});
