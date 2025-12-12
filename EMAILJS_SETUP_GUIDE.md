# Complete EmailJS Setup Guide for hello@zegamedia.com

## Overview
This guide will walk you through setting up EmailJS to send emails from your website contact form to your custom domain email address (hello@zegamedia.com) hosted on Namecheap. **This setup allows you to both SEND and RECEIVE emails from hello@zegamedia.com.**

## 🚀 Quick Start - What You're Doing

**The Big Picture:**
1. ✅ You already have hello@zegamedia.com email account (DONE!)
2. ⏭️ Next: Go to EmailJS website and connect your email
3. ⏭️ Then: Use those SMTP settings in EmailJS
4. ⏭️ Finally: Update your website code

**Where You'll Use the SMTP Settings:**
- **Part 3** - When adding SMTP service in EmailJS dashboard
- **Part 7** - When setting up Gmail/Outlook to send emails

**Don't worry about finding settings in Namecheap - just use the standard values provided!**

## Important: Sending vs Receiving

**The Problem with Email Forwarding:**
- ✅ You can RECEIVE emails at hello@zegamedia.com
- ❌ When you REPLY, it comes from Gmail (not hello@zegamedia.com)

**The Solution:**
- ✅ Set up Namecheap Private Email (email hosting)
- ✅ Configure EmailJS to use SMTP with Namecheap
- ✅ Configure your email client to send through Namecheap SMTP
- ✅ Now you can SEND and RECEIVE from hello@zegamedia.com!

---

## Option 1: Namecheap Private Email + EmailJS SMTP (Recommended)

This is the BEST solution - you get full email hosting and can send/receive from hello@zegamedia.com.

### Part 1: Set Up Namecheap Private Email

1. **Log into Namecheap**
   - Go to https://www.namecheap.com/
   - Log into your account

2. **Purchase Private Email (If Not Already Purchased)**
   - Go to "Domain List" → Click "Manage" next to zegamedia.com
   - Look for "Private Email" section
   - If not purchased, click "Get Private Email" or "Purchase"
   - **Pricing:** Usually $1.88/month for the first mailbox
   - Select "Private Email - 1 Mailbox" (or more if needed)
   - Complete purchase

3. **Create Email Account**
   - After purchase, go to "Private Email" section
   - Click "Create Mailbox" or "Manage"
   - **Email Address:** hello@zegamedia.com
   - **Password:** Create a strong password (save this!)
   - Click "Create" or "Save"

4. **Get SMTP Settings**
   - Namecheap Private Email uses standard SMTP settings (you don't need to find them in the dashboard)
   - **Here are the SMTP settings you'll need:**
     - **SMTP Server:** mail.privateemail.com
     - **SMTP Port:** 587 (TLS) - **OR** 465 (SSL)
     - **IMAP Server:** mail.privateemail.com (for receiving emails)
     - **IMAP Port:** 993 (SSL)
     - **Username:** hello@zegamedia.com (your full email address)
     - **Password:** The password you created for the email account
     - **Security:** TLS (for port 587) or SSL (for port 465)
   
   - **Note:** These are the standard settings for ALL Namecheap Private Email accounts. You don't need to find them anywhere - just use these settings!

5. **Test Email Access**
   - You can access email via webmail at: https://privateemail.com/
   - Log in with hello@zegamedia.com and your password
   - Send yourself a test email to verify it works
   - If you can log in and send/receive emails in webmail, your account is set up correctly!

**📋 Quick Reference - Namecheap Private Email SMTP Settings:**
```
SMTP Server: mail.privateemail.com
SMTP Port: 587 (TLS) or 465 (SSL)
IMAP Server: mail.privateemail.com
IMAP Port: 993 (SSL)
Username: hello@zegamedia.com (full email address)
Password: [Your email password]
Security: TLS (port 587) or SSL (port 465)
```

**Note:** These are the standard settings for ALL Namecheap Private Email accounts. You don't need to find them in any settings page - just use these values!

---

### Part 2: Set Up EmailJS Account

1. **Sign Up for EmailJS**
   - Go to https://www.emailjs.com/
   - Click "Sign Up"
   - **Note:** For SMTP, you'll need a paid plan ($15/month for Starter)
   - Sign up with your email

2. **Upgrade to Paid Plan (Required for SMTP)**
   - Go to "Pricing" or "Account" → "Billing"
   - Select "Starter Plan" ($15/month) - includes SMTP support
   - Complete payment
   - **Alternative:** Use SendGrid or Mailgun (see Option 2 below)

3. **Verify Your Email**
   - Check your email inbox
   - Click the verification link

---

### Part 3: Add SMTP Service in EmailJS

**🎯 THIS IS WHERE YOU USE THE SMTP SETTINGS FROM STEP 4!**

**What you're doing:** You're going to the EmailJS website and entering those SMTP settings into a form so EmailJS can send emails from your hello@zegamedia.com address.

**Where to go:** https://dashboard.emailjs.com/

1. **Log Into EmailJS Dashboard**
   - Go to https://dashboard.emailjs.com/
   - Log in with your EmailJS account
   - You should see the main dashboard

2. **Navigate to Email Services**
   - Look at the LEFT SIDEBAR menu
   - Click on **"Email Services"** (it should be one of the first options)
   - You'll see a page that says "Email Services" at the top
   - You should see a button that says **"Add New Service"** or **"Create New Service"**
   - Click that button

3. **Select SMTP Service**
   - You'll see a list of email service options (Gmail, Outlook, SendGrid, etc.)
   - Look for **"SMTP Server"** or just **"SMTP"** in the list
   - Click on **"SMTP Server"** or **"SMTP"**

4. **Fill Out the SMTP Configuration Form**
   - You'll now see a form with several fields. Fill them out EXACTLY as shown below:
   
   **Field-by-Field Instructions:**
   
   - **Service Name:** Type: `Namecheap Private Email` (or any name you want)
   
   - **Service ID:** This will be auto-generated, you don't need to change it
   
   - **Host (or SMTP Host):** Type: `mail.privateemail.com`
     - This is the SMTP server address
   
   - **Port:** Type: `587` 
     - OR use `465` if 587 doesn't work
   
   - **Username:** Type: `hello@zegamedia.com`
     - Your FULL email address (not just "hello")
   
   - **Password:** Type your email password
     - The password you created for hello@zegamedia.com
   
   - **Use SSL/TLS:** 
     - If using port 587: Check **"Use TLS"** or select **"TLS"** from dropdown
     - If using port 465: Check **"Use SSL"** or select **"SSL"** from dropdown
   
   - **From Email (optional):** Type: `hello@zegamedia.com`
     - This sets the "from" address

5. **Test the Connection**
   - Look for a **"Test"** or **"Test Connection"** button
   - Click it to verify your settings work
   - If successful, you'll see a green checkmark or success message
   - If it fails, double-check your username and password

6. **Save the Service**
   - Click **"Create Service"** or **"Save"** button
   - The service will be created and saved

7. **Copy Your Service ID**
   - After saving, you'll see your new service listed
   - Look for a **Service ID** - it will look like: `service_abc123xyz` or `service_xxxxxxxxx`
   - **COPY THIS SERVICE ID** - you'll need it for your website code!
   - You can click on it to copy it, or write it down

**Visual Guide - What You'll See:**
```
EmailJS Dashboard
├── Email Services (click here)
    ├── Add New Service (click here)
        ├── Select "SMTP Server"
            ├── Form appears with fields:
                ├── Service Name: [Type: Namecheap Private Email]
                ├── Host: [Type: mail.privateemail.com]
                ├── Port: [Type: 587]
                ├── Username: [Type: hello@zegamedia.com]
                ├── Password: [Type: your password]
                ├── Use TLS: [Check this box]
                └── Create Service [Click this button]
```

---

### Part 4: Create Email Template

1. **Go to Email Templates**
   - Click "Email Templates" in the left sidebar
   - Click "Create New Template"

2. **Configure Template**
   - **Template Name:** Contact Form Submission
   - **Service:** Select the SMTP service you just created
   - **To Email:** hello@zegamedia.com
   - **From Name:** ZEGA MEDIA Contact Form
   - **From Email:** hello@zegamedia.com (or noreply@zegamedia.com)
   - **Reply To:** {{email}} (so you can reply directly to the person who filled the form)
   - **Subject:** New Contact Form Submission from {{name}}

3. **Email Content (HTML):**
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

<!-- Note: Free plan includes "Sent via EmailJS" footer. To remove it, upgrade to paid plan ($9/month). -->
```

4. **Save Template**
   - Click "Save"
   - **Copy the Template ID** (e.g., "template_xyz789") - you'll need it

---

### Part 5: Get Your Public Key

1. **Go to Account Settings**
   - Click on your account/profile icon
   - Click "General" or "Account"

2. **Find Public Key**
   - Look for "Public Key" or "API Key"
   - **Copy this Public Key** (e.g., "abcdefghijklmnop")

---

### Part 6: Update Your Website Code

1. **Open js/main.js file**

2. **Find these lines:**
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```
and
```javascript
await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm);
```

3. **Replace with your actual values:**
```javascript
emailjs.init('YOUR_ACTUAL_PUBLIC_KEY_HERE');
```
and
```javascript
await emailjs.sendForm('YOUR_ACTUAL_SERVICE_ID_HERE', 'YOUR_ACTUAL_TEMPLATE_ID_HERE', contactForm);
```

**Example:**
```javascript
emailjs.init('abcdefghijklmnop');
await emailjs.sendForm('service_abc123', 'template_xyz789', contactForm);
```

4. **Save the file**

---

### Part 7: Configure Your Email Client (Gmail, Outlook, etc.)

To send emails FROM hello@zegamedia.com (not just receive):

#### Option A: Using Gmail

1. **Open Gmail Settings**
   - Go to https://mail.google.com/
   - Click the gear icon → "See all settings"
   - Go to "Accounts and Import" tab

2. **Add Another Email Address**
   - Under "Send mail as:", click "Add another email address"
   - **Name:** ZEGA MEDIA
   - **Email address:** hello@zegamedia.com
   - Check "Treat as an alias"
   - Click "Next Step"

3. **Configure SMTP**
   - **SMTP Server:** mail.privateemail.com
   - **Port:** 587
   - **Username:** hello@zegamedia.com
   - **Password:** Your email password
   - **Secured connection:** TLS
   - Click "Add Account"

4. **Verify Email**
   - Gmail will send a verification email
   - Check your hello@zegamedia.com inbox (via webmail)
   - Enter the verification code

5. **Set as Default (Optional)**
   - Check "Make default" if you want hello@zegamedia.com as default sender

#### Option B: Using Outlook

1. **Add Account**
   - Open Outlook
   - File → Add Account
   - Choose "Manual setup or additional server types"
   - Select "POP or IMAP"

2. **Configure Settings**
   - **Your Name:** ZEGA MEDIA
   - **Email Address:** hello@zegamedia.com
   - **Account Type:** IMAP
   - **Incoming Mail Server:** mail.privateemail.com
   - **Outgoing Mail Server (SMTP):** mail.privateemail.com
   - **Username:** hello@zegamedia.com
   - **Password:** Your email password

3. **More Settings**
   - Click "More Settings"
   - **Outgoing Server:** Check "My outgoing server requires authentication"
   - **Advanced Tab:**
     - Incoming server: 993 (SSL)
     - Outgoing server: 587 (TLS)
   - Click OK → Next → Finish

#### Option C: Using Apple Mail (Mac)

1. **Add Account**
   - Mail → Add Account
   - Choose "Other Mail Account"
   - Enter hello@zegamedia.com and password

2. **Configure Settings**
   - **Incoming Mail Server:** mail.privateemail.com
   - **Outgoing Mail Server:** mail.privateemail.com
   - **Username:** hello@zegamedia.com
   - **Password:** Your email password

3. **Advanced Settings**
   - **Incoming:** Port 993, SSL
   - **Outgoing:** Port 587, TLS

---

### Part 8: Test Everything

1. **Test Contact Form**
   - Fill out your website contact form
   - Submit it
   - Check hello@zegamedia.com inbox - you should receive it

2. **Test Sending Email**
   - Open your email client (Gmail, Outlook, etc.)
   - Compose a new email
   - Make sure "From" shows hello@zegamedia.com
   - Send a test email to yourself
   - Verify it arrives from hello@zegamedia.com

3. **Test Replying**
   - Reply to a contact form submission
   - Verify the reply comes FROM hello@zegamedia.com
   - The recipient should see hello@zegamedia.com as sender

---

## Option 2: SendGrid (Free Alternative)

If you don't want to pay for EmailJS SMTP, use SendGrid (free tier: 100 emails/day):

### Part 1: Set Up SendGrid

1. **Sign Up for SendGrid**
   - Go to https://sendgrid.com/
   - Sign up for free account (100 emails/day free)

2. **Verify Your Domain**
   - Go to Settings → Sender Authentication
   - Click "Authenticate Your Domain"
   - Select "Namecheap" as DNS provider
   - Follow instructions to add DNS records in Namecheap
   - This allows sending FROM hello@zegamedia.com

3. **Create API Key**
   - Go to Settings → API Keys
   - Create new API key with "Full Access"
   - Save the key (you'll need it)

### Part 2: Use SendGrid with EmailJS

1. **In EmailJS, Add SendGrid Service**
   - Go to Email Services → Add New Service
   - Choose "SendGrid"
   - Enter your SendGrid API key
   - Configure sender email as hello@zegamedia.com

2. **Create Template**
   - Same as Part 4 above
   - Use SendGrid service instead of SMTP

3. **Update Website Code**
   - Same as Part 6 above
   - Use the new Service ID

**Benefits:**
- ✅ Free (100 emails/day)
- ✅ Can send from hello@zegamedia.com
- ✅ Better deliverability
- ✅ Still need email hosting for receiving emails

---

## Option 3: Mailgun (Another Free Alternative)

Similar to SendGrid:

1. **Sign Up:** https://www.mailgun.com/ (5,000 emails/month free)
2. **Verify Domain:** Add DNS records in Namecheap
3. **Use with EmailJS:** Same process as SendGrid

---

## Troubleshooting

### Emails Not Sending?

1. **Check Browser Console**
   - Press F12 → Console tab
   - Look for error messages
   - Common errors:
     - "Invalid public key" → Check your public key
     - "Service not found" → Check your service ID
     - "SMTP authentication failed" → Check username/password

2. **Verify SMTP Settings**
   - Double-check SMTP server: mail.privateemail.com
   - Verify port: 587 (TLS) or 465 (SSL)
   - Confirm username: hello@zegamedia.com
   - Test password by logging into webmail

3. **Check EmailJS Plan**
   - Make sure you have a paid plan (required for SMTP)
   - Or use SendGrid/Mailgun instead

### Emails Going to Spam?

1. **SPF Record** (Important!)
   - In Namecheap, go to Domain → Advanced DNS
   - Add TXT record:
     - **Host:** @
     - **Value:** v=spf1 include:privateemail.com ~all
   - This helps prevent spam marking

2. **DKIM Record**
   - Namecheap Private Email should set this up automatically
   - Check in Private Email settings

3. **Check Spam Folder**
   - Mark as "Not Spam"
   - Add sender to contacts

### Can't Send from Email Client?

1. **Verify SMTP Settings**
   - Server: mail.privateemail.com
   - Port: 587 (TLS) or 465 (SSL)
   - Username: hello@zegamedia.com
   - Password: Correct password

2. **Check Firewall**
   - Some networks block port 587
   - Try port 465 (SSL) instead

3. **Verify Account**
   - Log into webmail to confirm account works
   - Test sending from webmail first

---

## Security Best Practices

1. **Strong Password**
   - Use a strong, unique password for hello@zegamedia.com
   - Don't reuse passwords

2. **2FA (Two-Factor Authentication)**
   - Enable if available in Namecheap Private Email
   - Adds extra security

3. **Don't Expose Credentials**
   - Never put SMTP passwords in public repositories
   - EmailJS public key is safe client-side
   - Service ID and Template ID are safe

4. **Rate Limiting**
   - EmailJS paid plan has limits
   - SendGrid: 100 emails/day free
   - Monitor usage to avoid hitting limits

---

## Pricing Comparison

### Option 1: Namecheap Private Email + EmailJS SMTP
- **Namecheap Private Email:** ~$1.88/month
- **EmailJS Starter Plan:** $15/month
- **Total:** ~$17/month
- ✅ Full control, professional setup

### Option 2: Namecheap Private Email + SendGrid
- **Namecheap Private Email:** ~$1.88/month
- **SendGrid:** Free (100 emails/day)
- **Total:** ~$2/month
- ✅ Cost-effective, good for most websites

### Option 3: Namecheap Private Email + Mailgun
- **Namecheap Private Email:** ~$1.88/month
- **Mailgun:** Free (5,000 emails/month)
- **Total:** ~$2/month
- ✅ Best for higher volume

---

## Quick Checklist

- [ ] Purchased Namecheap Private Email
- [ ] Created hello@zegamedia.com mailbox
- [ ] Got SMTP settings (server, port, username, password)
- [ ] Signed up for EmailJS (or SendGrid/Mailgun)
- [ ] Added SMTP service in EmailJS
- [ ] Created email template
- [ ] Copied Service ID, Template ID, and Public Key
- [ ] Updated js/main.js with credentials
- [ ] Configured email client (Gmail/Outlook) to send from hello@zegamedia.com
- [ ] Tested contact form
- [ ] Tested sending email from email client
- [ ] Verified emails come FROM hello@zegamedia.com
- [ ] Added SPF record in Namecheap DNS

---

## Need Help?

- **EmailJS Documentation:** https://www.emailjs.com/docs/
- **EmailJS Support:** support@emailjs.com
- **Namecheap Support:** https://www.namecheap.com/support/
- **SendGrid Documentation:** https://docs.sendgrid.com/
- **Mailgun Documentation:** https://documentation.mailgun.com/

---

**Once you complete these steps, you'll be able to SEND and RECEIVE emails from hello@zegamedia.com!**

**Recommended Setup:** Namecheap Private Email ($1.88/month) + SendGrid (Free) = Best value for money!
