# Fix: Email Signature Showing as HTML Code

## Problem
Your email signature is displaying as raw HTML code instead of being rendered. This happens when email clients don't recognize the HTML format.

## Solution: Use Rich Text Formatting Instead

Instead of pasting HTML code, use your email client's built-in formatting tools.

---

## For Namecheap Private Email (Roundcube/Horde)

### Method 1: Rich Text Editor (Recommended)

1. **Go to:** https://privateemail.com/
2. **Log in** with hello@zegamedia.com
3. **Settings** → **Identities** (or **Compose** → **Signature**)
4. **Click on your email address** to edit
5. **Find "Signature" section**
6. **Use the formatting toolbar** (don't paste HTML!)

**Type this in the signature box:**

```
Gage Grace
Founder, ZEGA MEDIA

Email: hello@zegamedia.com
Web: www.zegamedia.com

─────────────────────────
ZEGA MEDIA | Web Design Agency
```

**Then format it:**
- Select "Gage Grace" → Make it **Bold** and **Larger** (size 18px or "Large")
- Select "Gage Grace" → Change color to **Blue** (#0066FF)
- Select "hello@zegamedia.com" → Click **Link** button → Enter: `mailto:hello@zegamedia.com`
- Select "www.zegamedia.com" → Click **Link** button → Enter: `https://www.zegamedia.com`
- Select "ZEGA MEDIA" → Make it **Bold** and **Blue**
- Add a horizontal line above "ZEGA MEDIA"

7. **Save**

---

## For Gmail

### Method 1: Rich Text (Easiest)

1. **Gmail** → **Settings** (gear icon) → **See all settings**
2. **Scroll to "Signature"**
3. **Create new** or edit existing
4. **Use the formatting toolbar** (don't use HTML mode!)

**Type:**
```
Gage Grace
Founder, ZEGA MEDIA

Email: hello@zegamedia.com
Web: www.zegamedia.com

─────────────────────────
ZEGA MEDIA | Web Design Agency
```

**Format it:**
- Select "Gage Grace" → **Bold** + **Size: Large** + **Color: Blue**
- Select email → Click **Link** icon → `mailto:hello@zegamedia.com`
- Select website → Click **Link** icon → `https://www.zegamedia.com`
- Select "ZEGA MEDIA" → **Bold** + **Blue**
- Add horizontal line

5. **Save Changes**

### Method 2: HTML Mode (If Rich Text Doesn't Work)

1. **In Gmail signature editor**, click **"Insert signature"** dropdown
2. **Select "HTML"** or click **"</>"** icon (if available)
3. **Paste this simplified HTML:**

```html
<div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
<div style="font-size: 18px; font-weight: bold; color: #0066FF; margin-bottom: 4px;">Gage Grace</div>
<div style="font-size: 12px; color: #666; margin-bottom: 8px;">Founder, ZEGA MEDIA</div>
<div style="font-size: 12px; color: #666; margin-top: 8px;">
<div style="margin-bottom: 4px;"><strong>Email:</strong> <a href="mailto:hello@zegamedia.com" style="color: #0066FF;">hello@zegamedia.com</a></div>
<div style="margin-bottom: 4px;"><strong>Web:</strong> <a href="https://www.zegamedia.com" style="color: #0066FF;">www.zegamedia.com</a></div>
<div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #E5E5E5; font-size: 11px;">
<a href="https://www.zegamedia.com" style="color: #0066FF; font-weight: bold;">ZEGA MEDIA</a> | Web Design Agency
</div>
</div>
</div>
```

4. **Save Changes**

---

## For Outlook

1. **File** → **Options** → **Mail** → **Signatures**
2. **Create new** signature
3. **Type the text** and use formatting toolbar
4. **Or paste simplified HTML** in HTML view

---

## Simplest Solution: Plain Text Signature

If HTML keeps causing issues, use this simple plain text version:

```
─────────────────────────
Gage Grace
Founder, ZEGA MEDIA

Email: hello@zegamedia.com
Web: www.zegamedia.com

ZEGA MEDIA | Web Design Agency
─────────────────────────
```

**Just copy and paste this** - no formatting needed. It will work in every email client!

---

## Why HTML Shows as Code

Email clients have different HTML support:
- **Gmail**: Supports HTML but can be picky
- **Namecheap Private Email**: May strip complex HTML
- **Outlook**: Good HTML support
- **Apple Mail**: Good HTML support

**Best practice:** Use the email client's built-in formatting tools instead of pasting raw HTML.

---

## Quick Test

After setting up your signature:
1. **Compose a new email**
2. **Check if signature appears formatted** (not as code)
3. **Send yourself a test email**
4. **Check how it looks** in the received email

If it still shows as code, use the plain text version above - it's simple but professional!

