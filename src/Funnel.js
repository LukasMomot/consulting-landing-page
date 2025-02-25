import React, { useEffect } from 'react';

const Funnel = ({ url, formId, displayMs }) => {
    useEffect(() => {
        const formContainer = document.querySelector('.convertkit-form');
        if (formContainer) {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            script.setAttribute('data-uid', formId);
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
                // Simulate click after specified milliseconds
                const link = document.querySelector(`[data-formkit-toggle="${formId}"]`);
                if (link) {
                    setTimeout(() => {
                        link.click(); // Simulate click
                    }, displayMs);
                }
            };
        } else {
            console.error('ConvertKit form container not found');
        }
    }, [url, formId, displayMs]);

    return (
        <div>
            {/* ...existing code... */}
            <div className="convertkit-form"></div>
            <a style={{ display: 'none' }} data-formkit-toggle={formId} href={url}>Your link text</a>
        </div>
    );
};

// ...existing code...

export default Funnel;
