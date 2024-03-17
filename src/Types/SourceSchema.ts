import { z } from "zod";

export const SourceSchema = z.object({
    id:  z.string().optional(),
    source: z.string().min(4,{message: 'source must be more than 4 characters'})
        .max(20, {message: "source should be less than 20 character!"})
        .regex(/^\s*\S/, {message: "White-spaces aren't accepted!"}),
    amount: z.coerce.number().positive({message: "amount must be a positive number and more than 0"}),
    date: z.string().min(1, {message: 'This field is required'})
});