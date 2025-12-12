# Step-by-Step Guide: Fix Your EmailJS Template

## Where to Go and What to Do

### Step 1: Open EmailJS Dashboard

1. **Open your web browser** (Chrome, Firefox, Edge, etc.)

2. **Go to EmailJS website:**
   - Type in the address bar: `https://dashboard.emailjs.com/`
   - Press Enter

3. **Log in:**
   - Enter your EmailJS email and password
   - Click "Sign In" or press Enter

---

### Step 2: Navigate to Email Templates

**You should now see the EmailJS Dashboard.**

**Look at the LEFT SIDEBAR** (the menu on the left side of the screen)

You'll see options like:
- Dashboard
- Email Services
- **Email Templates** ← CLICK THIS ONE
- Account
- etc.

**Click on "Email Templates"** in the left sidebar menu.

---

### Step 3: Find Your Template

**After clicking "Email Templates", you'll see a page with your templates listed.**

You should see your template called something like:
- "Contact Form Submission" 
- Or "template_usqno7l"
- Or whatever name you gave it

**Click on your template** to open it for editing.

---

### Step 4: Edit the Template Settings

**Now you'll see the template editor page.**

**Look for these fields/sections:**

#### A. Template Settings (Top Section)

**Find these fields:**

1. **Template Name:**
   - This is just the name, you can leave it as is
   - Example: "Contact Form Submission"

2. **Service:**
   - This should show: "service_h1h99gh" or "Namecheap Private Email"
   - If it doesn't, click the dropdown and select your service

3. **To Email:** ⚠️ **THIS IS THE IMPORTANT ONE!**
   - **MUST be:** `hello@zegamedia.com`
   - **NOT:** `{{email}}` or any variable
   - **Type exactly:** `hello@zegamedia.com`
   - This is where the form submissions will be sent!

4. **From Name:**
   - Can be: `ZEGA MEDIA Contact Form` or `ZEGA MEDIA`
   - This is what shows as the sender name

5. **From Email:**
   - Should be: `hello@zegamedia.com`
   - Or: `noreply@zegamedia.com`

6. **Reply To:**
   - Should be: `{{email}}`
   - This lets you reply directly to the customer

7. **Subject:**
   - Should be: `New Contact Form Submission from {{name}}`
   - Or: `New Contact Form - {{name}}`

---

#### B. Email Content (Bottom Section)

**Scroll down to find the email content editor.**

**You'll see a text box or HTML editor.**

**Replace everything in that box with this EXACT code:**

```html
<h2>New Contact Form Submission</h2>

<p><strong>Name:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Business Name:</strong> {{business}}</p>
<p><strong>Package Interested In:</strong> {{package}}</p>
<p><strong>Care Plan:</strong> {{maintenance}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><small>This email was sent from the ZEGA MEDIA contact form.</small></p>
```

**How to paste it:**
1. Click inside the email content box
2. Select all existing text (Ctrl+A or Cmd+A)
3. Delete it (Delete or Backspace)
4. Paste the code above (Ctrl+V or Cmd+V)

---

### Step 5: Save the Template

**After making all changes:**

1. **Scroll to the bottom of the page**
2. **Look for a button that says:**
   - "Save"
   - "Save Template"
   - "Update Template"
   - Or a checkmark icon ✓

3. **Click that button**

4. **You should see a success message** like "Template saved" or "Template updated"

---

### Step 6: Verify Your Settings

**Before testing, double-check:**

✅ **To Email** = `hello@zegamedia.com` (NOT a variable!)  
✅ **From Email** = `hello@zegamedia.com`  
✅ **Reply To** = `{{email}}`  
✅ **Subject** = `New Contact Form Submission from {{name}}`  
✅ **Email Content** includes all the form fields  

---

### Step 7: Test Your Form

1. **Go to your website**
2. **Fill out the contact form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: 555-1234
   - Business: Test Business
   - Package: Select one
   - Care Plan: Select one
   - Message: This is a test

3. **Click "Send Message"**

4. **Check your email:**
   - Go to: https://privateemail.com/
   - Log in with hello@zegamedia.com
   - Check your inbox
   - **Also check spam/junk folder!**

5. **You should receive an email** with all the form details!

---

## Visual Guide - What You'll See

```
EmailJS Dashboard
│
├── Left Sidebar
│   ├── Dashboard
│   ├── Email Services
│   ├── Email Templates ← CLICK HERE
│   └── Account
│
└── Main Area (after clicking Email Templates)
    │
    ├── List of Templates
    │   └── [Your Template] ← CLICK TO EDIT
    │
    └── Template Editor (after clicking template)
        │
        ├── Template Settings Section
        │   ├── Template Name: [Contact Form Submission]
        │   ├── Service: [service_h1h99gh] ← SELECT YOUR SERVICE
        │   ├── To Email: [hello@zegamedia.com] ← MUST BE YOUR EMAIL!
        │   ├── From Name: [ZEGA MEDIA Contact Form]
        │   ├── From Email: [hello@zegamedia.com]
        │   ├── Reply To: [{{email}}]
        │   └── Subject: [New Contact Form Submission from {{name}}]
        │
        └── Email Content Section
            └── [HTML Editor Box] ← PASTE THE HTML CODE HERE
                └── [Save Button] ← CLICK TO SAVE
```

---

## Troubleshooting

### Can't Find Email Templates?
- Make sure you're logged into EmailJS
- Look for "Email Templates" in the left sidebar
- It might be under a menu icon (☰) on mobile

### Can't Edit Template?
- Make sure you clicked on the template name (not just viewing the list)
- The template should open in an editor view

### "To Email" Field Not Showing?
- Make sure you selected the correct service (service_h1h99gh)
- Some services have different field names
- Look for "Recipient Email" or "To" field

### Still Not Receiving Emails?
1. **Check Spam Folder** - Emails often go to spam first
2. **Check EmailJS Logs:**
   - Go to EmailJS Dashboard
   - Look for "Logs" or "Activity" section
   - See if emails are being sent successfully
3. **Verify Email Address:**
   - Make sure "To Email" is exactly: `hello@zegamedia.com`
   - No spaces, no typos
4. **Test EmailJS Service:**
   - In EmailJS, go to "Email Services"
   - Click on your service (service_h1h99gh)
   - Look for "Test" button
   - Send a test email to verify it works

---

## Quick Checklist

Before testing, make sure:
- [ ] Logged into EmailJS Dashboard
- [ ] Opened "Email Templates" from left sidebar
- [ ] Clicked on your template to edit it
- [ ] "To Email" = `hello@zegamedia.com` (exact, no variables)
- [ ] "From Email" = `hello@zegamedia.com`
- [ ] "Reply To" = `{{email}}`
- [ ] Email content includes all form fields
- [ ] Clicked "Save" button
- [ ] Saw success message

---

**Once you've done all these steps, test your contact form and you should receive the email with all the customer details at hello@zegamedia.com!**

