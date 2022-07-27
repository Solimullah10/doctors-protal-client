import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary uppercase text-white font-bold gre bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;