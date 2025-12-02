'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Noto_Sans } from 'next/font/google';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components';

const notoSans = Noto_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const formSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  password: z
    .string()
    .min(4, { message: 'Your password must be between 4 and 12 characters.' })
    .max(12, { message: 'Your password must be between 4 and 12 characters.' }),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log(values);
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`mt-3.5 flex flex-col space-y-3.5 ${notoSans.className}`}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold text-[#666666]">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter username"
                  className="h-14 border-[#CCCCCC] bg-white p-4 text-sm shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold text-[#666666]">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  className="h-14 border-[#CCCCCC] bg-white p-4 text-sm shadow-none"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                Your password is between 4 and 12 characters
              </FormDescription>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full self-end rounded-md bg-[#64C882] px-32 py-2 text-xs font-bold text-white transition hover:bg-[#5fb679] active:scale-95 sm:w-auto"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
