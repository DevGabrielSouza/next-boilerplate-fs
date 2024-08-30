import { PrismaAdapter } from '@auth/prisma-adapter'
import type { NextAuthConfig } from 'next-auth'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { prisma } from './lib/prisma'
import credentials from 'next-auth/providers/credentials'
import { type Session } from 'next-auth'

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

  callbacks: {
    async signIn({ user }) {
      if (!user.id) {
        return false
      }

      return true
    },

    async session({ session, token }: { session: Session; token?: any }) {
      if (token && token.sub && session.user) {
        session.user.id = token.sub
      }

      return session
    },

    async jwt({ token, user }) {
      return token
    }
  },

  adapter: PrismaAdapter(prisma)
} satisfies NextAuthConfig
