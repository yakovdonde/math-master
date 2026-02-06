# Security Policy

## Overview
This document outlines the security measures implemented in the Multiplication Master application to protect users and ensure safe operation.

## Security Implementations

### 1. **Content Security Policy (CSP)**
- Strict CSP headers implemented in `index.html` to prevent XSS attacks
- Only allows scripts from the same origin (`'self'`)
- Limits styles to trusted sources (Tailwind CDN and Google Fonts)
- Prevents frame embedding with `frame-ancestors 'none'`

### 2. **XSS Prevention**
- Removed all instances of `innerHTML` usage with unsanitized content
- Replaced with safe DOM methods: `textContent` and `createElement()`
- History items are built using `document.createElement()` instead of string interpolation
- Result display uses `textContent` for safety

### 3. **Input Validation**
- Number input restricted with HTML5 `min` and `max` attributes (-999999 to 999999)
- Input validation in `checkAnswer()` function:
  - Checks for valid integer using `Number.isFinite()`
  - Validates input range prevents exploitation attempts
  - Parses with radix parameter: `parseInt(value, 10)`
- Autocomplete disabled on sensitive input fields

### 4. **Event Handler Security**
- Removed inline `onclick` handlers from HTML
- Event listeners attached via JavaScript with proper scope
- Event handlers validated before execution
- Prevents malicious event injection

### 5. **HTTP Security Headers**
The following security headers are configured:

| Header | Purpose |
|--------|---------|
| `X-UA-Compatible: ie=edge` | Force modern rendering in IE |
| `X-Content-Type-Options: nosniff` | Prevent MIME-type sniffing |
| `X-Frame-Options: DENY` | Prevent clickjacking attacks |
| `X-XSS-Protection: 1; mode=block` | Enable XSS filtering |
| `Referrer-Policy: strict-origin-when-cross-origin` | Control referrer information |

### 6. **DOM Safety**
- All user-facing text content uses `textContent` instead of `innerHTML`
- Dynamic HTML creation uses `createElement()` and proper DOM APIs
- Safe string templates with proper escaping

### 7. **Data Handling**
- No sensitive data stored in localStorage or cookies
- Game history stored only in session memory
- No server communication - entirely client-side for privacy
- Scores and history cleared on page refresh (no persistence of sensitive data)

## Best Practices Followed

✅ **No eval() usage** - Code never uses eval or similar dangerous functions
✅ **Trusted dependencies** - Only uses Tailwind CSS and Google Fonts from CDNs
✅ **Type safety** - Input values validated before mathematical operations
✅ **Proper error handling** - Graceful fallbacks for invalid input
✅ **Minimal attack surface** - Simple, self-contained application with no external APIs

## Known Limitations & Considerations

1. **Tailwind CSS CDN**: Uses external CDN (https://cdn.tailwindcss.com)
   - For offline use, download Tailwind CSS locally and update the link
   
2. **Google Fonts**: Loads fonts from https://fonts.googleapis.com
   - For maximum privacy/offline support, use local font files

3. **Client-side only**: All logic runs in browser
   - Scores are not persisted between sessions
   - For persistent scores, implement a secure backend with proper authentication

## Security Testing

To verify security measures:

1. **Check CSP Headers**: Inspect network requests in browser DevTools
2. **Test XSS Prevention**: Try entering HTML/JavaScript in the answer field - should be safe
3. **Verify Event Handlers**: Use DevTools to confirm event listeners are attached properly
4. **Input Validation**: Test with extreme numbers - should be rejected

## Reporting Security Issues

If you discover a security vulnerability, please report it privately by:
1. Creating a private security advisory
2. Providing detailed reproduction steps
3. Avoiding public disclosure until patched

## Future Enhancements

- [ ] Implement Service Worker for offline support with CSP compatibility
- [ ] Add integrity checking for external resources (SRI)
- [ ] Implement rate limiting if backend is added
- [ ] Add user authentication if persistent data is required
- [ ] Regular security audits and dependency updates

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Web Security Best Practices](https://cheatsheetseries.owasp.org/)
- [XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

---

**Last Updated**: February 4, 2026
**Security Status**: ✅ Hardened
