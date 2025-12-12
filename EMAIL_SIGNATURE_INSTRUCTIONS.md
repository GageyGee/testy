# Email Signature Setup Instructions

## Professional Email Signature for ZEGA MEDIA

I've created two versions of your email signature:
1. **EMAIL_SIGNATURE.html** - HTML version (recommended, looks better)
2. **EMAIL_SIGNATURE_PLAIN.txt** - Plain text version (simple backup)

---

## How to Add Signature to Your Email Client

### Gmail

1. **Open Gmail**
2. **Click the gear icon** (⚙️) in the top right
3. **Click "See all settings"**
4. **Scroll down to "Signature"** section
5. **Click "Create new"** (or edit existing)
6. **Name it:** "ZEGA MEDIA Signature"
7. **In the signature box:**
   - Click the formatting toolbar to switch to HTML mode (look for "</>" icon or "Formatting options")
   - **Paste the HTML code** from EMAIL_SIGNATURE.html
   - Or just paste the plain text version if HTML doesn't work
8. **Scroll down and click "Save Changes"**

### Outlook (Desktop)

1. **Open Outlook**
2. **File** → **Options** → **Mail**
3. **Click "Signatures..."** button
4. **Click "New"** and name it "ZEGA MEDIA"
5. **In the signature editor:**
   - Right-click → **Paste** the HTML code
   - Or use the formatting toolbar to paste HTML
6. **Click "OK"** to save

### Outlook (Web/Office 365)

1. **Go to:** https://outlook.office.com/
2. **Click the gear icon** (⚙️) → **View all Outlook settings**
3. **Mail** → **Compose and reply**
4. **Under "Email signature":**
   - Click in the signature box
   - Paste the HTML code
5. **Click "Save"**

### Apple Mail (Mac)

1. **Open Mail app**
2. **Mail** → **Preferences** (or Cmd + ,)
3. **Click "Signatures"** tab
4. **Select your email account** (hello@zegamedia.com)
5. **Click the "+" button** to create new signature
6. **Name it:** "ZEGA MEDIA"
7. **In the signature box:**
   - Right-click → **Paste** the HTML code
   - Or paste plain text version
8. **Close preferences** (changes save automatically)

### Namecheap Private Email (Webmail)

1. **Go to:** https://privateemail.com/
2. **Log in** with hello@zegamedia.com
3. **Settings** → **Email** → **Signatures**
4. **Create new signature** or edit existing
5. **Paste the HTML code** in the signature editor
6. **Save**

---

## Customization Options

### Update Phone Number
- Replace `(555) 123-4567` with your actual phone number
- In HTML version: Find `tel:5551234567` and update both the link and display text

### Update Website
- Replace `www.zegamedia.com` with your actual domain
- Make sure it includes `https://` in links

### Add Social Media Links
If you want to add social media, add this before the closing `</td>` tag in the HTML:

```html
<div style="margin-top: 8px;">
    <a href="https://twitter.com/yourhandle" style="color: #0066FF; text-decoration: none; margin-right: 10px;">Twitter</a>
    <a href="https://linkedin.com/in/yourprofile" style="color: #0066FF; text-decoration: none; margin-right: 10px;">LinkedIn</a>
    <a href="https://instagram.com/yourhandle" style="color: #0066FF; text-decoration: none;">Instagram</a>
</div>
```

### Change Colors
- Main color (blue): `#0066FF` - Change to your brand color
- Text color: `#333333` - Change to darker/lighter if needed
- Link color: `#0066FF` - Should match your brand

---

## Testing Your Signature

1. **Create a new email** in your email client
2. **Check that:**
   - All links work (click them)
   - Formatting looks good
   - Colors display correctly
   - Phone number is clickable (on mobile)
   - Email address is clickable

---

## Troubleshooting

### HTML Not Working?
- Some email clients strip HTML
- Try the plain text version instead
- Or use the email client's built-in formatting tools

### Links Not Working?
- Make sure links include `https://` or `http://`
- Test each link after adding

### Formatting Looks Wrong?
- Some email clients have limited HTML support
- Try simplifying the HTML
- Use the plain text version as backup

---

## Quick Copy-Paste Versions

### HTML Version (Copy this):
```html
<table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333333;">
    <tr>
        <td style="padding: 0;">
            <div style="font-size: 20px; font-weight: 800; color: #0066FF; margin-bottom: 4px; letter-spacing: -0.5px;">
                Gage Grace
            </div>
            <div style="font-size: 13px; color: #666666; margin-bottom: 8px;">
                Founder, ZEGA MEDIA
            </div>
            <div style="font-size: 12px; color: #888888; line-height: 1.8;">
                <div style="margin-bottom: 2px;">
                    <strong style="color: #666666;">Email:</strong> <a href="mailto:hello@zegamedia.com" style="color: #0066FF; text-decoration: none;">hello@zegamedia.com</a>
                </div>
                <div style="margin-bottom: 2px;">
                    <strong style="color: #666666;">Phone:</strong> <a href="tel:5551234567" style="color: #0066FF; text-decoration: none;">(555) 123-4567</a>
                </div>
                <div style="margin-bottom: 2px;">
                    <strong style="color: #666666;">Web:</strong> <a href="https://www.zegamedia.com" style="color: #0066FF; text-decoration: none;">www.zegamedia.com</a>
                </div>
                <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #E5E5E5;">
                    <a href="https://www.zegamedia.com" style="color: #0066FF; text-decoration: none; font-weight: 600;">ZEGA MEDIA</a> | Web Design Agency
                </div>
            </div>
        </td>
    </tr>
</table>
```

### Plain Text Version (Copy this):
```
Gage Grace
Founder, ZEGA MEDIA

Email: hello@zegamedia.com
Phone: (555) 123-4567
Web: www.zegamedia.com

ZEGA MEDIA | Web Design Agency
```

---

**That's it! Your professional email signature is ready to use.**

