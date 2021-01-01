// When main navigation links are clicked, the page smooth scrolls to the appropriate section.
$(function() {
    $(".sf-menu li a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500); // 1500 = 1.5 seconds
    });
});

// Obfuscate email address - https://stackoverflow.com/questions/23002711/how-to-show-email-addresses-on-the-website-to-avoid-spams

/**
 * Obfuscate the email address until clicked.
 * @param elementId 
 */
const obfuscateEmailAddress = (elementId) => {
    // Use javascript to decode the email address - check https://v2.cryptii.com/text/htmlentities when changes are needed.
    let emailElement = document.getElementById(elementId);
    let emailAddress = "&#109;&#111;&#98;&#105;&#108;&#101;&#97;&#117;&#116;&#111;&#114;&#101;&#112;&#97;&#105;&#114;&#115;&#101;&#114;&#118;&#105;&#99;&#101;&#64;&#121;&#97;&#104;&#111;&#111;&#46;&#99;&#111;&#109;"
        
    // Set the Human-Readable email address to the encoded version, as it will be translated by the browser.
    emailElement.innerHTML = emailAddress;
        
    // Reserve the plain-text version for clicks only.
    emailElement.addEventListener('click', () => {
        emailElement.setAttribute('href', 'mailto:' + emailElement.innerHTML);
    });
}

// Get the header and footer email obfuscated:
obfuscateEmailAddress('header__email');
obfuscateEmailAddress('footer-row__email');

/**
 * Obfuscate the phone number until clicked.
 * @param elementId 
 */
const obfuscatePhoneNumber = (elementId) => {
    const phone = '&#056;&#048;&#051;&#045;&#050;&#055;&#048;&#045;&#053;&#056;&#049;&#057;';
    const phoneElement = document.getElementById(elementId);
    phoneElement.innerHTML = phone;
    const tel = phoneElement.innerHTML;

    phoneElement.addEventListener('click', () => {
        phoneElement.setAttribute('href', 'tel:' + tel.replace(/-/g, ''));
    });
}

// Get the header and footer phone obfuscated
obfuscatePhoneNumber('header__phone');
obfuscatePhoneNumber('footer-row__phone');