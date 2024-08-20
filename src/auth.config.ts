import { PrismaAdapter } from '@auth/prisma-adapter'
import type { NextAuthConfig } from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { prisma } from './lib/prisma'
import credentials from 'next-auth/providers/credentials'

import { authenticateUser } from './application/services/auth/authenticate-user.service'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    credentials({
      name: 'Credentials',
      authorize: authenticateUser
    })
  ],

  adapter: PrismaAdapter(prisma)
} satisfies NextAuthConfig
