import { getAuthUser } from '$lib/auth/auth0';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
  const user = getAuthUser(cookies);

  if (!user) {
    throw redirect(302, '/'); // o '/login' si tienes una página de login personalizada
  }

  return { user };
};
