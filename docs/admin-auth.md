# Admin authentication

Admin credentials are configured with server-only environment variables:

```env
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD_HASH="$argon2id$v=19$m=65536,t=3,p=1$base64-salt$base64-hash"
SITE_URL="https://shreshthaconsultants.com"
ADMIN_ALLOWED_ORIGINS="https://shreshthaconsultants.com"
# Optional on a persistent Node server:
ADMIN_SESSION_STORE_PATH="/absolute/private/path/admin-auth-store.json"
```

Generate a password hash:

```bash
npm run admin:hash-password
```

Sessions use the `admin_session` HttpOnly cookie. The raw token is only sent to the browser in that cookie; the server-side store keeps SHA-256 token hashes plus expiry metadata.

By default, sessions and login attempts are stored in a restrictive local file at:

```text
.admin-auth/store.json
```

Set `ADMIN_SESSION_STORE_PATH` to place this outside the project directory on a persistent Node server. The path must be outside `/public`, writable by the app process, and backed by storage shared by every running instance.

Set `ADMIN_ALLOWED_ORIGINS` to the exact comma-separated origins allowed to post admin auth requests. `SITE_URL` is also trusted automatically.

This file store is not suitable for Vercel/serverless/multi-instance deployments because local files are not guaranteed to be persistent or shared. For that deployment style, choose a shared server-side store first and then wire it intentionally.

To revoke sessions after rotating admin credentials, sign in and call:

```bash
curl -X POST https://your-domain.com/api/admin/sessions/revoke
```

Use the authenticated browser session for that request.
