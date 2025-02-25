import React, { useEffect } from 'react';

const Funnel = () => {
    useEffect(() => {
        const formContainer = document.querySelector('.convertkit-form');
        if (formContainer) {
            const script = document.createElement('script');
            script.src = "https://lukasz-5.kit.com/a9e40a47d4/index.js";
            script.async = true;
            script.setAttribute('data-uid', 'a9e40a47d4');
            formContainer.appendChild(script);
        } else {
            console.error('ConvertKit form container not found');
        }
    }, []);

    return (
        <div>
            {/* ...existing code... */}
            <div className="convertkit-form"></div>
        </div>
    );
};

// ...existing code...

export default Funnel;
