import { getAuthUser } from '$lib/auth/auth0';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
  const user = getAuthUser(cookies);
  return { user };
};
