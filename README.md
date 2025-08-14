1. DaisyUI Theme System Samajhna

DaisyUI apne pre-built themes ke through colors control karta hai.

Ye themes HTML ke data-theme attribute pe based hoti hain.

Example:

<html data-theme="light">  <!-- Light theme apply -->
<html data-theme="dark">   <!-- Dark theme apply -->

Tum data-theme ka value change karke theme switch kar sakte ho.

2. Theme Toggle ka Core Logic

Toggle ka matlab:

Agar light theme active hai → dark kar do.

Agar dark theme active hai → light kar do.

Matlab tumhe:

Ek state rakhni hai (current theme ka naam store karne ke liye).

Button click par theme ka naam change karna hai.

HTML ke <html> element pe data-theme attribute update karna hai.

3. Steps in Flow

Initial Theme Decide Karna

Default light ho sakta hai.

Ya user ki system preference detect karke set kar sakte ho (optional).

Theme Change Karna

User button click kare → state ka value light ↔ dark switch ho.

Example:

setTheme(theme === "light" ? "dark" : "light");

HTML me Apply Karna

JavaScript se HTML tag ka data-theme set kar do:

document.documentElement.setAttribute("data-theme", theme);

Optional: Save in Local Storage

Refresh ke baad bhi theme same rahe iske liye localStorage me save karo.

Next time load hone par localStorage ka value read karke theme set karo.

4. DaisyUI ka Kaam

Tum sirf data-theme ka naam change karoge.

DaisyUI automatically us theme ke colors, background, buttons, text color sab set kar dega — tumhe manual CSS likhne ki zarurat nahi.

5. Toggle Implementation Types

Button Toggle → Simple button jo click par theme switch kare.

Switch / Checkbox → DaisyUI ka pre-made toggle switch (swap class) use karke animated icon bana sakte ho.

Navbar Integration → Navbar me icon rakh ke theme change karna.

📌 Summary
Theme toggle = State (light/dark) + Button click par data-theme change + (optional) localStorage
Baaki styling DaisyUI handle karega.
