import React from "react";
import PersonaInfo from "../components/PersonalInfo";

const PersonalInfoPage = ({ nextPageLink }) => {
    return (
        <PersonaInfo nextPageLink= {nextPageLink} />
    );
};

export default PersonalInfoPage;