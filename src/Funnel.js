import React, { useEffect } from 'react';

const Funnel = () => {
    useEffect(() => {
        const formContainer = document.querySelector('.convertkit-form');
        if (formContainer) {
            const script = document.createElement('script');
            script.src = "https://lukasz-5.kit.com/874754c3c3/index.js";
            script.async = true;
            script.setAttribute('data-uid', '874754c3c3');
            formContainer.appendChild(script);

            // Check if the form is visible
            script.onload = () => {
                console.log('Script loaded successfully');
                const form = formContainer.querySelector('form');
                if (form) {
                    console.log('Form loaded successfully');
                } else {
                    console.error('Form not found inside the container');
                }
            };
        } else {
            console.error('ConvertKit form container not found');
        }
    }, []);
    return (
        <div>
            {/* ...existing code... */}
            <div className="convertkit-form"></div>
            <a data-formkit-toggle="874754c3c3" href="https://lukasz-5.kit.com/874754c3c3">Your link text</a>
        </div>
    );
};

// ...existing code...

export default Funnel;
