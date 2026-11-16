# Google Search Console & Google Analytics 4 Setup Guide
**Target Domain:** `https://aanya-interior-portfolio.vercel.app/`  
**Audience:** Website Owner & Administrator  

---

## 1. Google Search Console (GSC) Setup

Google Search Console is the official Google platform for tracking website indexation, diagnosing crawl errors, submitting sitemaps, and monitoring organic search impressions and clicks.

### Step 1: Add Property in Google Search Console
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Sign in using your Google Account (`aanyachandoriya2@gmail.com` recommended).
3. Select **Add Property**.
4. Choose **URL prefix** and enter:
   ```
   https://aanya-interior-portfolio.vercel.app/
   ```
   *(Note: If using a custom domain in the future, such as `aanyajain.design`, use the Domain property option with DNS verification).*

### Step 2: Verification Methods for Vercel
Google provides several verification methods. The two easiest for this Next.js Vercel setup are:

#### Method A: HTML Tag (Quickest)
1. In GSC, select **HTML tag** under "Other verification methods".
2. Copy the meta tag provided, which looks like:
   `<meta name="google-site-verification" content="YOUR_UNIQUE_CODE" />`
3. Add it to `app/layout.tsx` inside the `<head>` tag:
   ```tsx
   <meta name="google-site-verification" content="YOUR_UNIQUE_CODE" />
   ```
4. Push to Git and click **Verify** in GSC.

#### Method B: DNS TXT Record (Recommended if Custom Domain Added)
1. Add a TXT record to your DNS provider (Vercel DNS, GoDaddy, or Cloudflare).
2. Host: `@` | Value: `google-site-verification=YOUR_UNIQUE_CODE`
3. Click **Verify**.

### Step 3: Submit the XML Sitemap
1. Once verified, open the left sidebar in Search Console and click **Sitemaps**.
2. Under "Add a new sitemap", enter:
   ```
   sitemap.xml
   ```
3. Click **Submit**.
4. GSC will fetch `https://aanya-interior-portfolio.vercel.app/sitemap.xml` and report:
   - Status: **Success**
   - Discovered URLs: **7** (Homepage + 6 Project Pages)

### Step 4: URL Inspection & Initial Priority Indexing
To accelerate initial indexing, manually inspect and request indexing for key routes:
1. In the top search bar ("Inspect any URL in..."), paste each URL:
   - `https://aanya-interior-portfolio.vercel.app/`
   - `https://aanya-interior-portfolio.vercel.app/projects/workers-module-bagru`
   - `https://aanya-interior-portfolio.vercel.app/projects/centre-table-furniture-design`
   - `https://aanya-interior-portfolio.vercel.app/projects/tide-and-terra-rooftop-cafe-pune`
   - `https://aanya-interior-portfolio.vercel.app/projects/universal-toilet-accessible-design`
   - `https://aanya-interior-portfolio.vercel.app/projects/shulabh-residential-interior-ahmedabad`
   - `https://aanya-interior-portfolio.vercel.app/projects/dining-chair-furniture-design`
2. Click **Test Live URL**.
3. Once live test succeeds, click **Request Indexing**.

---

## 2. Google Analytics 4 (GA4) Implementation Guide

To track how design studios and recruiters interact with the portfolio, set up a Google Analytics 4 property.

### Step 1: Create a GA4 Property
1. Visit [Google Analytics](https://analytics.google.com/).
2. Create an Account: `Aanya Jain Portfolio`.
3. Create a Property: `Aanya Jain Design Website` (Timezone: India Standard Time).
4. Create a **Web Data Stream** pointing to `https://aanya-interior-portfolio.vercel.app/`.
5. Copy your **Measurement ID** (Format: `G-XXXXXXXXXX`).

### Step 2: Safe Environment Variable Configuration
Never hardcode private tracking IDs into public git repositories. Instead, configure it in Vercel:
1. In the Vercel Dashboard, go to your project → **Settings** → **Environment Variables**.
2. Add:
   - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
3. In `app/layout.tsx`, render the Google Analytics script only when the environment variable is present.

### Step 3: Recommended Custom Event Architecture
GA4 will automatically track pageviews and scroll depth. The portfolio's interactions can be tracked using these custom events:

| Event Name | Trigger Condition | Parameters | Purpose |
| :--- | :--- | :--- | :--- |
| `project_view` | User opens a case study page | `project_slug`, `project_category` | Measure which projects attract highest interest |
| `resume_download` | User clicks "Download Resume (PDF)" | `file_name: Aanya-Jain-Resume.pdf` | High-intent indicator of recruiter evaluation |
| `flipbook_open` | User clicks external Heyzine flipbook | `outbound_url: heyzine.com/...` | Measure full portfolio engagement |
| `contact_email_click` | User clicks `mailto:` link | `email_address: aanyachandoriya2@...` | Direct inquiry conversion tracking |
| `contact_phone_click` | User clicks `tel:` link | `phone_number: +917454876841` | Direct inquiry conversion tracking |
| `image_lightbox_open` | User zooms a project drawing/render | `image_url`, `project_name` | Technical drawing examination engagement |

---

## 3. Routine Search Health Checklist (Monthly)

- [ ] Check **Coverage / Page indexing** in GSC: Confirm all 7 pages show *"Page is indexed"*.
- [ ] Monitor **Performance**: Review queries generating impressions and clicks.
- [ ] Inspect **Core Web Vitals**: Verify all pages pass LCP (< 2.5s) and CLS (< 0.1).
- [ ] Review **Security & Manual Actions**: Ensure clean zero-issue standing.
