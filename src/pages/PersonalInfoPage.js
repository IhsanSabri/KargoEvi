import React from "react";

import PersonalInfo from "../components/UI/PersonalInfo";

const PersonalInfoPage = ({ nextPageLink }) => {
    return (
        <PersonalInfo nextPageLink= {nextPageLink} />
    );
};

export default PersonalInfoPage;